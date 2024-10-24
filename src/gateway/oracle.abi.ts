export const oracleAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferStarted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'reqId',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
    ],
    name: 'ReencryptCallback',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'reqId',
        type: 'bytes32',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'requester',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'data',
                type: 'uint256',
              },
              {
                internalType: 'uint8',
                name: 'valueType',
                type: 'uint8',
              },
            ],
            internalType: 'struct CapsulatedValue',
            name: 'target',
            type: 'tuple',
          },
          {
            internalType: 'bytes32',
            name: 'publicKey',
            type: 'bytes32',
          },
          {
            internalType: 'bytes',
            name: 'signature',
            type: 'bytes',
          },
          {
            internalType: 'address',
            name: 'callbackAddr',
            type: 'address',
          },
          {
            internalType: 'bytes4',
            name: 'callbackFunc',
            type: 'bytes4',
          },
        ],
        indexed: false,
        internalType: 'struct ReencryptRequest',
        name: 'req',
        type: 'tuple',
      },
    ],
    name: 'ReencryptSent',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'reqId',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
    ],
    name: 'RequestCallback',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'reqId',
        type: 'bytes32',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'requester',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'uint8',
                name: 'opcode',
                type: 'uint8',
              },
              {
                internalType: 'uint256[]',
                name: 'operands',
                type: 'uint256[]',
              },
              {
                internalType: 'uint64',
                name: 'value',
                type: 'uint64',
              },
            ],
            internalType: 'struct Operation[]',
            name: 'ops',
            type: 'tuple[]',
          },
          {
            internalType: 'uint256',
            name: 'opsCursor',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'callbackAddr',
            type: 'address',
          },
          {
            internalType: 'bytes4',
            name: 'callbackFunc',
            type: 'bytes4',
          },
          {
            internalType: 'bytes',
            name: 'payload',
            type: 'bytes',
          },
        ],
        indexed: false,
        internalType: 'struct Request',
        name: 'req',
        type: 'tuple',
      },
    ],
    name: 'RequestSent',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'reqId',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
    ],
    name: 'SaveCiphertextCallback',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'reqId',
        type: 'bytes32',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'requester',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'ciphertext',
            type: 'bytes',
          },
          {
            internalType: 'uint8',
            name: 'ciphertextType',
            type: 'uint8',
          },
          {
            internalType: 'address',
            name: 'callbackAddr',
            type: 'address',
          },
          {
            internalType: 'bytes4',
            name: 'callbackFunc',
            type: 'bytes4',
          },
        ],
        indexed: false,
        internalType: 'struct SaveCiphertextRequest',
        name: 'req',
        type: 'tuple',
      },
    ],
    name: 'SaveCiphertextSent',
    type: 'event',
  },
  {
    inputs: [],
    name: 'VERSION',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'reqId',
        type: 'bytes32',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'data',
            type: 'uint256',
          },
          {
            internalType: 'uint8',
            name: 'valueType',
            type: 'uint8',
          },
        ],
        internalType: 'struct CapsulatedValue[]',
        name: 'result',
        type: 'tuple[]',
      },
    ],
    name: 'callback',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pendingOwner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'reqId',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: 'result',
        type: 'bytes',
      },
    ],
    name: 'reencryptCallback',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'reqId',
        type: 'bytes32',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'data',
            type: 'uint256',
          },
          {
            internalType: 'uint8',
            name: 'valueType',
            type: 'uint8',
          },
        ],
        internalType: 'struct CapsulatedValue',
        name: 'result',
        type: 'tuple',
      },
    ],
    name: 'saveCiphertextCallback',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'requester',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'ciphertext',
            type: 'bytes',
          },
          {
            internalType: 'uint8',
            name: 'ciphertextType',
            type: 'uint8',
          },
          {
            internalType: 'address',
            name: 'callbackAddr',
            type: 'address',
          },
          {
            internalType: 'bytes4',
            name: 'callbackFunc',
            type: 'bytes4',
          },
        ],
        internalType: 'struct SaveCiphertextRequest',
        name: 'req',
        type: 'tuple',
      },
    ],
    name: 'send',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'requester',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'data',
                type: 'uint256',
              },
              {
                internalType: 'uint8',
                name: 'valueType',
                type: 'uint8',
              },
            ],
            internalType: 'struct CapsulatedValue',
            name: 'target',
            type: 'tuple',
          },
          {
            internalType: 'bytes32',
            name: 'publicKey',
            type: 'bytes32',
          },
          {
            internalType: 'bytes',
            name: 'signature',
            type: 'bytes',
          },
          {
            internalType: 'address',
            name: 'callbackAddr',
            type: 'address',
          },
          {
            internalType: 'bytes4',
            name: 'callbackFunc',
            type: 'bytes4',
          },
        ],
        internalType: 'struct ReencryptRequest',
        name: 'req',
        type: 'tuple',
      },
    ],
    name: 'send',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'requester',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'uint8',
                name: 'opcode',
                type: 'uint8',
              },
              {
                internalType: 'uint256[]',
                name: 'operands',
                type: 'uint256[]',
              },
              {
                internalType: 'uint64',
                name: 'value',
                type: 'uint64',
              },
            ],
            internalType: 'struct Operation[]',
            name: 'ops',
            type: 'tuple[]',
          },
          {
            internalType: 'uint256',
            name: 'opsCursor',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'callbackAddr',
            type: 'address',
          },
          {
            internalType: 'bytes4',
            name: 'callbackFunc',
            type: 'bytes4',
          },
          {
            internalType: 'bytes',
            name: 'payload',
            type: 'bytes',
          },
        ],
        internalType: 'struct Request',
        name: 'req',
        type: 'tuple',
      },
    ],
    name: 'send',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
