/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NativeMetaTransaction,
  NativeMetaTransactionInterface,
} from "../NativeMetaTransaction";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "relayerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes",
      },
    ],
    name: "MetaTransactionExecuted",
    type: "event",
  },
  {
    inputs: [],
    name: "ERC712_VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "sigR",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "sigS",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "sigV",
        type: "uint8",
      },
    ],
    name: "executeMetaTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDomainSeperator",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805460ff1916905534801561001a57600080fd5b506108018061002a6000396000f3fe60806040526004361061005a5760003560e01c806320379ee51161004357806320379ee5146100d15780632d0335ab146100f05780633408e4701461012657600080fd5b80630c53c51c1461005f5780630f7e597014610088575b600080fd5b61007261006d36600461056f565b610139565b60405161007f9190610709565b60405180910390f35b34801561009457600080fd5b506100726040518060400160405280600181526020017f310000000000000000000000000000000000000000000000000000000000000081525081565b3480156100dd57600080fd5b506001545b60405190815260200161007f565b3480156100fc57600080fd5b506100e261010b366004610554565b6001600160a01b031660009081526002602052604090205490565b34801561013257600080fd5b50466100e2565b60408051606081810183526001600160a01b038816600081815260026020908152908590205484528301529181018690526101778782878787610344565b6101ee5760405162461bcd60e51b815260206004820152602160248201527f5369676e657220616e64207369676e617475726520646f206e6f74206d61746360448201527f680000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6001600160a01b03871660009081526002602052604090205461021290600161044c565b6001600160a01b0388166000908152600260205260409081902091909155517f5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b9061026290899033908a906106d4565b60405180910390a1600080306001600160a01b0316888a60405160200161028a92919061069d565b60408051601f19818403018152908290526102a491610681565b6000604051808303816000865af19150503d80600081146102e1576040519150601f19603f3d011682016040523d82523d6000602084013e6102e6565b606091505b5091509150816103385760405162461bcd60e51b815260206004820152601c60248201527f46756e6374696f6e2063616c6c206e6f74207375636365737366756c0000000060448201526064016101e5565b98975050505050505050565b60006001600160a01b0386166103c25760405162461bcd60e51b815260206004820152602560248201527f4e61746976654d6574615472616e73616374696f6e3a20494e56414c49445f5360448201527f49474e455200000000000000000000000000000000000000000000000000000060648201526084016101e5565b60016103d56103d08761045f565b6104dc565b6040805160008152602081018083529290925260ff851690820152606081018690526080810185905260a0016020604051602081039080840390855afa158015610423573d6000803e3d6000fd5b505050602060405103516001600160a01b0316866001600160a01b031614905095945050505050565b6000610458828461071c565b9392505050565b600060405180608001604052806043815260200161078960439139805160209182012083518483015160408087015180519086012090516104bf950193845260208401929092526001600160a01b03166040830152606082015260800190565b604051602081830303815290604052805190602001209050919050565b60006104e760015490565b6040517f190100000000000000000000000000000000000000000000000000000000000060208201526022810191909152604281018390526062016104bf565b80356001600160a01b038116811461053e57600080fd5b919050565b803560ff8116811461053e57600080fd5b60006020828403121561056657600080fd5b61045882610527565b600080600080600060a0868803121561058757600080fd5b61059086610527565b9450602086013567ffffffffffffffff808211156105ad57600080fd5b818801915088601f8301126105c157600080fd5b8135818111156105d3576105d3610772565b604051601f8201601f19908116603f011681019083821181831017156105fb576105fb610772565b816040528281528b602084870101111561061457600080fd5b826020860160208301376000602084830101528098505050505050604086013592506060860135915061064960808701610543565b90509295509295909350565b6000815180845261066d816020860160208601610742565b601f01601f19169290920160200192915050565b60008251610693818460208701610742565b9190910192915050565b600083516106af818460208801610742565b60609390931b6bffffffffffffffffffffffff19169190920190815260140192915050565b60006001600160a01b038086168352808516602084015250606060408301526107006060830184610655565b95945050505050565b6020815260006104586020830184610655565b6000821982111561073d57634e487b7160e01b600052601160045260246000fd5b500190565b60005b8381101561075d578181015183820152602001610745565b8381111561076c576000848401525b50505050565b634e487b7160e01b600052604160045260246000fdfe4d6574615472616e73616374696f6e2875696e74323536206e6f6e63652c616464726573732066726f6d2c62797465732066756e6374696f6e5369676e617475726529a2646970667358221220aaa925a156001c13f0ada544c28a973e398cd7bdfa0c924a9e8fda69838ba48d64736f6c63430008070033";

type NativeMetaTransactionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NativeMetaTransactionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NativeMetaTransaction__factory extends ContractFactory {
  constructor(...args: NativeMetaTransactionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "NativeMetaTransaction";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NativeMetaTransaction> {
    return super.deploy(overrides || {}) as Promise<NativeMetaTransaction>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NativeMetaTransaction {
    return super.attach(address) as NativeMetaTransaction;
  }
  connect(signer: Signer): NativeMetaTransaction__factory {
    return super.connect(signer) as NativeMetaTransaction__factory;
  }
  static readonly contractName: "NativeMetaTransaction";
  public readonly contractName: "NativeMetaTransaction";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NativeMetaTransactionInterface {
    return new utils.Interface(_abi) as NativeMetaTransactionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NativeMetaTransaction {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as NativeMetaTransaction;
  }
}
