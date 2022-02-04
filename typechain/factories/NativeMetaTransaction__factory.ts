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
  "0x608060405260008060006101000a81548160ff02191690831515021790555034801561002a57600080fd5b50610f898061003a6000396000f3fe60806040526004361061005a5760003560e01c806320379ee51161004357806320379ee5146100ba5780632d0335ab146100e55780633408e470146101225761005a565b80630c53c51c1461005f5780630f7e59701461008f575b600080fd5b610079600480360381019061007491906106f4565b61014d565b6040516100869190610a8c565b60405180910390f35b34801561009b57600080fd5b506100a46103bf565b6040516100b19190610aae565b60405180910390f35b3480156100c657600080fd5b506100cf6103f8565b6040516100dc91906109e7565b60405180910390f35b3480156100f157600080fd5b5061010c600480360381019061010791906106c7565b610402565b6040516101199190610b30565b60405180910390f35b34801561012e57600080fd5b5061013761044b565b6040516101449190610b30565b60405180910390f35b606060006040518060600160405280600260008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018781525090506101d08782878787610458565b61020f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020690610b10565b60405180910390fd5b6102626001600260008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461056190919063ffffffff16565b600260008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b8733886040516102d8939291906109a9565b60405180910390a16000803073ffffffffffffffffffffffffffffffffffffffff16888a60405160200161030d92919061094a565b6040516020818303038152906040526040516103299190610933565b6000604051808303816000865af19150503d8060008114610366576040519150601f19603f3d011682016040523d82523d6000602084013e61036b565b606091505b5091509150816103b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a790610ad0565b60405180910390fd5b80935050505095945050505050565b6040518060400160405280600181526020017f310000000000000000000000000000000000000000000000000000000000000081525081565b6000600154905090565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000804690508091505090565b60008073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614156104c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c090610af0565b60405180910390fd5b60016104dc6104d787610577565b6105df565b838686604051600081526020016040526040516104fc9493929190610a47565b6020604051602081039080840390855afa15801561051e573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614905095945050505050565b6000818361056f9190610bef565b905092915050565b6000604051806080016040528060438152602001610f116043913980519060200120826000015183602001518460400151805190602001206040516020016105c29493929190610a02565b604051602081830303815290604052805190602001209050919050565b60006105e96103f8565b826040516020016105fb929190610972565b604051602081830303815290604052805190602001209050919050565b600061062b61062684610b70565b610b4b565b90508281526020810184848401111561064757610646610dae565b5b610652848285610caa565b509392505050565b60008135905061066981610ecb565b92915050565b60008135905061067e81610ee2565b92915050565b600082601f83011261069957610698610da9565b5b81356106a9848260208601610618565b91505092915050565b6000813590506106c181610ef9565b92915050565b6000602082840312156106dd576106dc610db8565b5b60006106eb8482850161065a565b91505092915050565b600080600080600060a086880312156107105761070f610db8565b5b600061071e8882890161065a565b955050602086013567ffffffffffffffff81111561073f5761073e610db3565b5b61074b88828901610684565b945050604061075c8882890161066f565b935050606061076d8882890161066f565b925050608061077e888289016106b2565b9150509295509295909350565b61079481610c57565b82525050565b6107a381610c45565b82525050565b6107ba6107b582610c45565b610d1d565b82525050565b6107c981610c69565b82525050565b6107e06107db82610c69565b610d2f565b82525050565b60006107f182610ba1565b6107fb8185610bb7565b935061080b818560208601610cb9565b61081481610dbd565b840191505092915050565b600061082a82610ba1565b6108348185610bc8565b9350610844818560208601610cb9565b80840191505092915050565b600061085b82610bac565b6108658185610bd3565b9350610875818560208601610cb9565b61087e81610dbd565b840191505092915050565b6000610896601c83610bd3565b91506108a182610ddb565b602082019050919050565b60006108b9600283610be4565b91506108c482610e04565b600282019050919050565b60006108dc602583610bd3565b91506108e782610e2d565b604082019050919050565b60006108ff602183610bd3565b915061090a82610e7c565b604082019050919050565b61091e81610c93565b82525050565b61092d81610c9d565b82525050565b600061093f828461081f565b915081905092915050565b6000610956828561081f565b915061096282846107a9565b6014820191508190509392505050565b600061097d826108ac565b915061098982856107cf565b60208201915061099982846107cf565b6020820191508190509392505050565b60006060820190506109be600083018661079a565b6109cb602083018561078b565b81810360408301526109dd81846107e6565b9050949350505050565b60006020820190506109fc60008301846107c0565b92915050565b6000608082019050610a1760008301876107c0565b610a246020830186610915565b610a31604083018561079a565b610a3e60608301846107c0565b95945050505050565b6000608082019050610a5c60008301876107c0565b610a696020830186610924565b610a7660408301856107c0565b610a8360608301846107c0565b95945050505050565b60006020820190508181036000830152610aa681846107e6565b905092915050565b60006020820190508181036000830152610ac88184610850565b905092915050565b60006020820190508181036000830152610ae981610889565b9050919050565b60006020820190508181036000830152610b09816108cf565b9050919050565b60006020820190508181036000830152610b29816108f2565b9050919050565b6000602082019050610b456000830184610915565b92915050565b6000610b55610b66565b9050610b618282610cec565b919050565b6000604051905090565b600067ffffffffffffffff821115610b8b57610b8a610d7a565b5b610b9482610dbd565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b6000610bfa82610c93565b9150610c0583610c93565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610c3a57610c39610d4b565b5b828201905092915050565b6000610c5082610c73565b9050919050565b6000610c6282610c73565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b83811015610cd7578082015181840152602081019050610cbc565b83811115610ce6576000848401525b50505050565b610cf582610dbd565b810181811067ffffffffffffffff82111715610d1457610d13610d7a565b5b80604052505050565b6000610d2882610d39565b9050919050565b6000819050919050565b6000610d4482610dce565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b7f46756e6374696f6e2063616c6c206e6f74207375636365737366756c00000000600082015250565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b7f4e61746976654d6574615472616e73616374696f6e3a20494e56414c49445f5360008201527f49474e4552000000000000000000000000000000000000000000000000000000602082015250565b7f5369676e657220616e64207369676e617475726520646f206e6f74206d61746360008201527f6800000000000000000000000000000000000000000000000000000000000000602082015250565b610ed481610c45565b8114610edf57600080fd5b50565b610eeb81610c69565b8114610ef657600080fd5b50565b610f0281610c9d565b8114610f0d57600080fd5b5056fe4d6574615472616e73616374696f6e2875696e74323536206e6f6e63652c616464726573732066726f6d2c62797465732066756e6374696f6e5369676e617475726529a2646970667358221220c69b262bfb70a93af5d1bb17765a581f815e0874db256e7987fc8d28f28d6bf964736f6c63430008070033";

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
