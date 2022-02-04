import { expect } from "chai";
import { ethers, waffle } from "hardhat";
import { StonedCookies } from "../typechain/StonedCookies";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { BigNumber } from "ethers";
import crypto from "crypto";
import { parseEther } from "ethers/lib/utils";

const { provider } = waffle;

describe("StonedCookies", () => {
  let signers: SignerWithAddress[];
  let owner: string;
  let ownerAcc: SignerWithAddress;
  let contract: StonedCookies;

  before(async () => {
    signers = await ethers.getSigners();
    ownerAcc = signers[0];
    owner = await ownerAcc.getAddress();
  });

  beforeEach(async () => {
    const stonedCookies = await ethers.getContractFactory("StonedCookies");
    contract = (await stonedCookies.deploy()) as StonedCookies;
    await contract.deployed();
  });

  describe("constants", () => {
    it("should have a name of 'StonedCookies'", async () => {
      const name = await contract.name();
      expect(name).to.equal("StonedCookies");
    });

    it("should have a symbol of 'STC'", async () => {
      const symbol = await contract.symbol();
      expect(symbol).to.equal("STC");
    });

    it("should have total of 4200 pieces", async () => {
      const total = await contract.totalSupply();
      expect(total).to.equal(4200);
    });

    it("should have minting price of 0.024 ethereum", async () => {
      const price = await contract.mintPrice();
      expect(ethers.utils.formatEther(price)).to.equal("0.024");
    });
  });

  describe("ownership", () => {
    it("only owner can transfer ownership", async () => {
      const newOwner = signers[1].address;
      await expect(
        contract.transferOwnership(newOwner, { from: signers[2].address }),
      ).to.be.reverted;
    });

    it("should be able to transfer ownership", async () => {
      let contractOwner: string;
      contractOwner = await contract.owner();
      expect(contractOwner).to.equal(owner);
      const newOwner = signers[1].address;
      const changeOwnershipTx = await contract.transferOwnership(newOwner);
      await changeOwnershipTx.wait();
      contractOwner = await contract.owner();
      expect(contractOwner).to.equal(newOwner);
    });
  });

  describe("payable", () => {
    it("contract should be able to receive eth", async () => {
      const txValue = parseEther("3");
      const tx = await ownerAcc.sendTransaction({
        from: owner,
        to: contract.address,
        value: txValue,
      });
      await tx.wait();
      expect(await provider.getBalance(contract.address)).to.equal(txValue);
    });

    it("owner should be able to withdraw eth from contract", async () => {
      const txValue = parseEther("3");
      const tx = await ownerAcc.sendTransaction({
        to: contract.address,
        value: txValue,
      });
      await tx.wait();
      const contractBalance = await provider.getBalance(contract.address);
      expect(contractBalance).to.equal(txValue);

      const initialOwnerBalance = await provider.getBalance(owner);
      const withdrawTx = await contract.withdraw();
      const withdrawReceipt = await withdrawTx.wait();
      const ownerBalance = await provider.getBalance(owner);
      const gas = withdrawReceipt.gasUsed.mul(
        withdrawReceipt.effectiveGasPrice,
      );
      expect(initialOwnerBalance.sub(gas).add(txValue)).to.equal(ownerBalance);
    });
  });

  describe("presale allocation", () => {
    it("allocates the tokens accordingly on creation", async () => {});
  });

  describe("minting", () => {
    beforeEach(async () => {
      const stonedCookies = await ethers.getContractFactory("StonedCookies");
      contract = (await stonedCookies.deploy()) as StonedCookies;
      await contract.deployed();
    });

    it("should be able to single mint", async () => {
      const quantity = ethers.BigNumber.from("1");
      const price = await contract.mintPrice();
      const value = price.mul(quantity);
      const initialBalance = await contract.balanceOf(owner);
      const mintTx = await contract.mint(owner, quantity, { value });
      await mintTx.wait();
      const postMintBalance = await contract.balanceOf(owner);
      expect(initialBalance.add(quantity)).to.equal(postMintBalance);
    });

    it("shouldn't be able to mint for not enough eth", async () => {
      const quantity = ethers.BigNumber.from("1");
      await expect(
        contract.mint(owner, quantity, {
          value: parseEther("0.01"),
        }),
      ).to.reverted;
    });

    it("should be able to mint multiple", async () => {
      const quantity = ethers.BigNumber.from("5");
      const price = await contract.mintPrice();
      const value = price.mul(quantity);
      const initialBalance = await contract.balanceOf(owner);
      const mintTx = await contract.mint(owner, quantity, { value });
      await mintTx.wait();
      const postMintBalance = await contract.balanceOf(owner);
      expect(initialBalance.add(quantity)).to.equal(postMintBalance);
    });

    it("should have max mint in single tx of 20", async () => {
      let price: BigNumber;
      let value: BigNumber;
      price = await contract.mintPrice();
      value = price.mul(20);
      const tx = await contract.mint(owner, 20, { value });
      const txReceipt = await tx.wait();
      expect(txReceipt).not.to.be.null;
      value = price.mul(21);
      expect(contract.mint(owner, 21, { value })).to.reverted;
    });

    describe("toggling", () => {
      it("should be able to toggle minting", async () => {
        const mintingEnabled = await contract.mintingEnabled();
        const tx = await contract.toggleMinting();
        await tx.wait();
        expect(await contract.mintingEnabled()).to.equal(!mintingEnabled);
      });

      it("should respect whether minting is toggled on/off", async () => {
        expect(await contract.mintingEnabled()).to.be.true;
        const initialBalance = await contract.balanceOf(owner);
        const mintTx = await contract.mint(owner, "1", {
          value: parseEther("0.024"),
        });
        await mintTx.wait();
        const postMintBalance = await contract.balanceOf(owner);
        expect(initialBalance.add(1)).to.equal(postMintBalance);
        const toggleOffTx = await contract.toggleMinting();
        await toggleOffTx.wait();
        expect(await contract.mintingEnabled()).to.be.false;
        expect(contract.mint(owner, "1", { value: parseEther("0.024") })).to
          .reverted;
      });
    });

    describe("mint price", () => {
      it("it is possible to set the mint price", async () => {
        expect(await contract.mintPrice()).to.eq(parseEther("0.024"));
        const newPrice = parseEther("1");
        const set = await contract.setMintPrice(newPrice);
        await set.wait();
        expect(await contract.mintPrice()).to.eq(newPrice);
        const initialBalance = await contract.balanceOf(owner);
        const mintTx = await contract.mint(owner, "1", {
          value: newPrice,
        });
        await mintTx.wait();
        const postMintBalance = await contract.balanceOf(owner);
        expect(initialBalance.add(1)).to.equal(postMintBalance);
      });

      it("only owner can set the mint price", async () => {
        const bob = signers[3];
        contract = contract.connect(bob);
        const newPrice = parseEther("1");
        await expect(contract.setMintPrice(newPrice)).to.reverted;
      });
    });
  });

  describe("uri", () => {
    it("should retrieve the uri correctly, uri points to right uri", async () => {
      const uri = await contract.baseTokenURI();
      expect(uri).to.equal("https://stoned-cookies-api.herokuapp.com/");
    });

    it("should be able to update the uri", async () => {
      const setUriTx = await contract.setBaseTokenURI("foo");
      await setUriTx.wait();
      expect(await contract.baseTokenURI()).to.equal("foo");
    });

    it("returns right metadata uri to nft pieces", async () => {
      const tokenId = BigNumber.from(5);
      const uri = await contract.baseTokenURI();
      const tokenUri = await contract.tokenURI(tokenId);
      expect(tokenUri).to.eq(uri + tokenId.toString());
    });
  });

  describe("proxy address", () => {
    it("should retrieve the proxy address correctly", async () => {
      const address = await contract.proxyRegistryAddress();
      expect(address).to.equal("0xa5409ec958C83C3f309868babACA7c86DCB077c1");
    });

    it("should be able to update the proxy address", async () => {
      const privateKey = "0x" + crypto.randomBytes(32).toString("hex");
      const wallet = new ethers.Wallet(privateKey);
      const setProxyAddressTx = await contract.setProxyRegistryAddress(
        wallet.address,
      );
      await setProxyAddressTx.wait();
      expect(await contract.proxyRegistryAddress()).to.equal(wallet.address);
    });
  });

  describe("OpenSea integration", () => {
    it("isApprovedForAll works", async () => {
      const owner = await contract.owner();
      const operator = await contract.proxyRegistryAddress();
      const isApprovedForAll = await contract.isApprovedForAll(
        owner,
        operator,
      );
      expect(isApprovedForAll);
    });

    it("isApprovedForAll works when registering beforehand", async () => {
      const hre = require("hardhat");
      const owner = await contract.owner();
      const proxyRegistry = await hre.ethers.getVerifiedContractAt(
        await contract.proxyRegistryAddress(),
      );
      const proxy = await proxyRegistry.callStatic.registerProxy();
      const register = await proxyRegistry.registerProxy();
      await register.wait();
      const isApprovedForAll = await contract.isApprovedForAll(owner, proxy);
      expect(isApprovedForAll);
    });
  });
});
