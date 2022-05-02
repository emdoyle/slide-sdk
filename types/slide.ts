export type Slide = {
  "version": "0.1.0",
  "name": "slide",
  "instructions": [
    {
      "name": "initializeUser",
      "accounts": [
        {
          "name": "userData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "username",
          "type": "string"
        },
        {
          "name": "realName",
          "type": "string"
        }
      ]
    },
    {
      "name": "createExpenseManager",
      "accounts": [
        {
          "name": "expenseManager",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "membershipTokenMint",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "splGovInitializeExpenseManager",
      "accounts": [
        {
          "name": "expenseManager",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "governanceAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenOwnerRecord",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "member",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "realm",
          "type": "publicKey"
        },
        {
          "name": "governanceType",
          "type": {
            "defined": "GovernanceType"
          }
        },
        {
          "name": "externalProgramId",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "splGovCreateAccessRecord",
      "accounts": [
        {
          "name": "accessRecord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expenseManager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "governanceAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "nativeTreasury",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "realm",
          "type": "publicKey"
        },
        {
          "name": "user",
          "type": "publicKey"
        },
        {
          "name": "role",
          "type": {
            "defined": "Role"
          }
        }
      ]
    },
    {
      "name": "splGovWithdrawFromExpenseManager",
      "accounts": [
        {
          "name": "expenseManager",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "governanceAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "nativeTreasury",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "realm",
          "type": "publicKey"
        },
        {
          "name": "withdrawalAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "splGovCreateExpensePackage",
      "accounts": [
        {
          "name": "expensePackage",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expenseManager",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenOwnerRecord",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "realm",
          "type": "publicKey"
        },
        {
          "name": "nonce",
          "type": "u32"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "quantity",
          "type": "u64"
        }
      ]
    },
    {
      "name": "splGovUpdateExpensePackage",
      "accounts": [
        {
          "name": "expensePackage",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expenseManager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenOwnerRecord",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "realm",
          "type": "publicKey"
        },
        {
          "name": "nonce",
          "type": "u32"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "quantity",
          "type": "u64"
        }
      ]
    },
    {
      "name": "splGovSubmitExpensePackage",
      "accounts": [
        {
          "name": "expensePackage",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expenseManager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenOwnerRecord",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "realm",
          "type": "publicKey"
        },
        {
          "name": "nonce",
          "type": "u32"
        }
      ]
    },
    {
      "name": "splGovApproveExpensePackage",
      "accounts": [
        {
          "name": "expensePackage",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expenseManager",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenOwnerRecord",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "accessRecord",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "realm",
          "type": "publicKey"
        },
        {
          "name": "nonce",
          "type": "u32"
        }
      ]
    },
    {
      "name": "splGovDenyExpensePackage",
      "accounts": [
        {
          "name": "expensePackage",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expenseManager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenOwnerRecord",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "accessRecord",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "realm",
          "type": "publicKey"
        },
        {
          "name": "nonce",
          "type": "u32"
        }
      ]
    },
    {
      "name": "withdrawFromExpensePackage",
      "accounts": [
        {
          "name": "expensePackage",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u32"
        }
      ]
    },
    {
      "name": "squadsInitializeExpenseManager",
      "accounts": [
        {
          "name": "expenseManager",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "memberEquity",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "squad",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "member",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "externalProgramId",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "squadsCreateExpensePackage",
      "accounts": [
        {
          "name": "expensePackage",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expenseManager",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "memberEquity",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "squad",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u32"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "quantity",
          "type": "u64"
        }
      ]
    },
    {
      "name": "squadsUpdateExpensePackage",
      "accounts": [
        {
          "name": "expensePackage",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expenseManager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "memberEquity",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "squad",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u32"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "quantity",
          "type": "u64"
        }
      ]
    },
    {
      "name": "squadsSubmitExpensePackage",
      "accounts": [
        {
          "name": "expensePackage",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expenseManager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "memberEquity",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "squad",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u32"
        }
      ]
    },
    {
      "name": "squadsExecuteAccessProposal",
      "accounts": [
        {
          "name": "proposal",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proposalExecution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "accessRecord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expenseManager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "squad",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "squadMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "member",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "squadsExecuteWithdrawalProposal",
      "accounts": [
        {
          "name": "proposal",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proposalExecution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expenseManager",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "squad",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "squadMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "squadTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "squadsApproveExpensePackage",
      "accounts": [
        {
          "name": "expensePackage",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expenseManager",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "accessRecord",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "memberEquity",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "squad",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u32"
        }
      ]
    },
    {
      "name": "squadsDenyExpensePackage",
      "accounts": [
        {
          "name": "expensePackage",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expenseManager",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "accessRecord",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "memberEquity",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "squad",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u32"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "accessRecord",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "expenseManager",
            "type": "publicKey"
          },
          {
            "name": "role",
            "type": {
              "defined": "Role"
            }
          }
        ]
      }
    },
    {
      "name": "expenseManager",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "membershipTokenMint",
            "type": "publicKey"
          },
          {
            "name": "expensePackageNonce",
            "type": "u32"
          },
          {
            "name": "squad",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "realm",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "governanceAuthority",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "externalProgramId",
            "type": "publicKey"
          },
          {
            "name": "governanceType",
            "type": {
              "option": {
                "defined": "GovernanceType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "expensePackage",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "expenseManager",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "state",
            "type": {
              "defined": "ExpensePackageState"
            }
          },
          {
            "name": "quantity",
            "type": "u64"
          },
          {
            "name": "nonce",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "proposalExecution",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "publicKey"
          },
          {
            "name": "executedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "userData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "username",
            "type": "string"
          },
          {
            "name": "realName",
            "type": "string"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Role",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Reviewer"
          },
          {
            "name": "Admin"
          }
        ]
      }
    },
    {
      "name": "ExpensePackageState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Created"
          },
          {
            "name": "Pending"
          },
          {
            "name": "Denied"
          },
          {
            "name": "Approved"
          },
          {
            "name": "AutoApproved"
          },
          {
            "name": "Paid"
          }
        ]
      }
    },
    {
      "name": "GovernanceType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Account"
          },
          {
            "name": "Token"
          },
          {
            "name": "Mint"
          },
          {
            "name": "Program"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "UserIsNotDAOMember",
      "msg": "User does not hold the appropriate membership token"
    },
    {
      "code": 6001,
      "name": "UserCannotApproveOrDenyExpenses",
      "msg": "User has insufficient permissions to approve or deny expenses"
    },
    {
      "code": 6002,
      "name": "UserCannotApproveOrDenyOwnExpense",
      "msg": "User cannot approve or deny their own expense package"
    },
    {
      "code": 6003,
      "name": "IncorrectNonce",
      "msg": "Client provided incorrect nonce"
    },
    {
      "code": 6004,
      "name": "SPLGovRealmMismatch",
      "msg": "Realm does not match ExpenseManager"
    },
    {
      "code": 6005,
      "name": "SquadMismatch",
      "msg": "Squad does not match ExpenseManager"
    },
    {
      "code": 6006,
      "name": "SquadMintMismatch",
      "msg": "Squad mint does not match TokenAccount mint"
    },
    {
      "code": 6007,
      "name": "WrongProposalType",
      "msg": "Proposal is not the right type for this instruction"
    },
    {
      "code": 6008,
      "name": "ProposalAlreadyExecuted",
      "msg": "Proposal has already been executed"
    },
    {
      "code": 6009,
      "name": "InvalidProposal",
      "msg": "Proposal has invalid data for execution"
    },
    {
      "code": 6010,
      "name": "FailedToParseProposal",
      "msg": "Proposal body could not be parsed"
    },
    {
      "code": 6011,
      "name": "PackageOwnershipMismatch",
      "msg": "ExpensePackage is not owned by signer, or not related to provided expense manager"
    },
    {
      "code": 6012,
      "name": "PackageFrozen",
      "msg": "ExpensePackage has already been submitted or is otherwise locked"
    },
    {
      "code": 6013,
      "name": "PackageMissingInfo",
      "msg": "ExpensePackage is missing required info such as name or quantity"
    },
    {
      "code": 6014,
      "name": "PackageNotApproved",
      "msg": "ExpensePackage has not been manually approved"
    },
    {
      "code": 6015,
      "name": "ManagerInsufficientFunds",
      "msg": "Insufficient funds exist in the manager to approve this expense"
    },
    {
      "code": 6016,
      "name": "DataTooLarge"
    }
  ]
};

export const IDL: Slide = {
  "version": "0.1.0",
  "name": "slide",
  "instructions": [
    {
      "name": "initializeUser",
      "accounts": [
        {
          "name": "userData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "username",
          "type": "string"
        },
        {
          "name": "realName",
          "type": "string"
        }
      ]
    },
    {
      "name": "createExpenseManager",
      "accounts": [
        {
          "name": "expenseManager",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "membershipTokenMint",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "splGovInitializeExpenseManager",
      "accounts": [
        {
          "name": "expenseManager",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "governanceAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenOwnerRecord",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "member",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "realm",
          "type": "publicKey"
        },
        {
          "name": "governanceType",
          "type": {
            "defined": "GovernanceType"
          }
        },
        {
          "name": "externalProgramId",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "splGovCreateAccessRecord",
      "accounts": [
        {
          "name": "accessRecord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expenseManager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "governanceAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "nativeTreasury",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "realm",
          "type": "publicKey"
        },
        {
          "name": "user",
          "type": "publicKey"
        },
        {
          "name": "role",
          "type": {
            "defined": "Role"
          }
        }
      ]
    },
    {
      "name": "splGovWithdrawFromExpenseManager",
      "accounts": [
        {
          "name": "expenseManager",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "governanceAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "nativeTreasury",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "realm",
          "type": "publicKey"
        },
        {
          "name": "withdrawalAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "splGovCreateExpensePackage",
      "accounts": [
        {
          "name": "expensePackage",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expenseManager",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenOwnerRecord",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "realm",
          "type": "publicKey"
        },
        {
          "name": "nonce",
          "type": "u32"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "quantity",
          "type": "u64"
        }
      ]
    },
    {
      "name": "splGovUpdateExpensePackage",
      "accounts": [
        {
          "name": "expensePackage",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expenseManager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenOwnerRecord",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "realm",
          "type": "publicKey"
        },
        {
          "name": "nonce",
          "type": "u32"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "quantity",
          "type": "u64"
        }
      ]
    },
    {
      "name": "splGovSubmitExpensePackage",
      "accounts": [
        {
          "name": "expensePackage",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expenseManager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenOwnerRecord",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "realm",
          "type": "publicKey"
        },
        {
          "name": "nonce",
          "type": "u32"
        }
      ]
    },
    {
      "name": "splGovApproveExpensePackage",
      "accounts": [
        {
          "name": "expensePackage",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expenseManager",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenOwnerRecord",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "accessRecord",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "realm",
          "type": "publicKey"
        },
        {
          "name": "nonce",
          "type": "u32"
        }
      ]
    },
    {
      "name": "splGovDenyExpensePackage",
      "accounts": [
        {
          "name": "expensePackage",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expenseManager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenOwnerRecord",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "accessRecord",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "realm",
          "type": "publicKey"
        },
        {
          "name": "nonce",
          "type": "u32"
        }
      ]
    },
    {
      "name": "withdrawFromExpensePackage",
      "accounts": [
        {
          "name": "expensePackage",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u32"
        }
      ]
    },
    {
      "name": "squadsInitializeExpenseManager",
      "accounts": [
        {
          "name": "expenseManager",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "memberEquity",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "squad",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "member",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "externalProgramId",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "squadsCreateExpensePackage",
      "accounts": [
        {
          "name": "expensePackage",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expenseManager",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "memberEquity",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "squad",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u32"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "quantity",
          "type": "u64"
        }
      ]
    },
    {
      "name": "squadsUpdateExpensePackage",
      "accounts": [
        {
          "name": "expensePackage",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expenseManager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "memberEquity",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "squad",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u32"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "quantity",
          "type": "u64"
        }
      ]
    },
    {
      "name": "squadsSubmitExpensePackage",
      "accounts": [
        {
          "name": "expensePackage",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expenseManager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "memberEquity",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "squad",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u32"
        }
      ]
    },
    {
      "name": "squadsExecuteAccessProposal",
      "accounts": [
        {
          "name": "proposal",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proposalExecution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "accessRecord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expenseManager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "squad",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "squadMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "member",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "squadsExecuteWithdrawalProposal",
      "accounts": [
        {
          "name": "proposal",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proposalExecution",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expenseManager",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "squad",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "squadMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "squadTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "squadsApproveExpensePackage",
      "accounts": [
        {
          "name": "expensePackage",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expenseManager",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "accessRecord",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "memberEquity",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "squad",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u32"
        }
      ]
    },
    {
      "name": "squadsDenyExpensePackage",
      "accounts": [
        {
          "name": "expensePackage",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expenseManager",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "accessRecord",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "memberEquity",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "squad",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u32"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "accessRecord",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "expenseManager",
            "type": "publicKey"
          },
          {
            "name": "role",
            "type": {
              "defined": "Role"
            }
          }
        ]
      }
    },
    {
      "name": "expenseManager",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "membershipTokenMint",
            "type": "publicKey"
          },
          {
            "name": "expensePackageNonce",
            "type": "u32"
          },
          {
            "name": "squad",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "realm",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "governanceAuthority",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "externalProgramId",
            "type": "publicKey"
          },
          {
            "name": "governanceType",
            "type": {
              "option": {
                "defined": "GovernanceType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "expensePackage",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "expenseManager",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "state",
            "type": {
              "defined": "ExpensePackageState"
            }
          },
          {
            "name": "quantity",
            "type": "u64"
          },
          {
            "name": "nonce",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "proposalExecution",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "publicKey"
          },
          {
            "name": "executedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "userData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "username",
            "type": "string"
          },
          {
            "name": "realName",
            "type": "string"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Role",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Reviewer"
          },
          {
            "name": "Admin"
          }
        ]
      }
    },
    {
      "name": "ExpensePackageState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Created"
          },
          {
            "name": "Pending"
          },
          {
            "name": "Denied"
          },
          {
            "name": "Approved"
          },
          {
            "name": "AutoApproved"
          },
          {
            "name": "Paid"
          }
        ]
      }
    },
    {
      "name": "GovernanceType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Account"
          },
          {
            "name": "Token"
          },
          {
            "name": "Mint"
          },
          {
            "name": "Program"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "UserIsNotDAOMember",
      "msg": "User does not hold the appropriate membership token"
    },
    {
      "code": 6001,
      "name": "UserCannotApproveOrDenyExpenses",
      "msg": "User has insufficient permissions to approve or deny expenses"
    },
    {
      "code": 6002,
      "name": "UserCannotApproveOrDenyOwnExpense",
      "msg": "User cannot approve or deny their own expense package"
    },
    {
      "code": 6003,
      "name": "IncorrectNonce",
      "msg": "Client provided incorrect nonce"
    },
    {
      "code": 6004,
      "name": "SPLGovRealmMismatch",
      "msg": "Realm does not match ExpenseManager"
    },
    {
      "code": 6005,
      "name": "SquadMismatch",
      "msg": "Squad does not match ExpenseManager"
    },
    {
      "code": 6006,
      "name": "SquadMintMismatch",
      "msg": "Squad mint does not match TokenAccount mint"
    },
    {
      "code": 6007,
      "name": "WrongProposalType",
      "msg": "Proposal is not the right type for this instruction"
    },
    {
      "code": 6008,
      "name": "ProposalAlreadyExecuted",
      "msg": "Proposal has already been executed"
    },
    {
      "code": 6009,
      "name": "InvalidProposal",
      "msg": "Proposal has invalid data for execution"
    },
    {
      "code": 6010,
      "name": "FailedToParseProposal",
      "msg": "Proposal body could not be parsed"
    },
    {
      "code": 6011,
      "name": "PackageOwnershipMismatch",
      "msg": "ExpensePackage is not owned by signer, or not related to provided expense manager"
    },
    {
      "code": 6012,
      "name": "PackageFrozen",
      "msg": "ExpensePackage has already been submitted or is otherwise locked"
    },
    {
      "code": 6013,
      "name": "PackageMissingInfo",
      "msg": "ExpensePackage is missing required info such as name or quantity"
    },
    {
      "code": 6014,
      "name": "PackageNotApproved",
      "msg": "ExpensePackage has not been manually approved"
    },
    {
      "code": 6015,
      "name": "ManagerInsufficientFunds",
      "msg": "Insufficient funds exist in the manager to approve this expense"
    },
    {
      "code": 6016,
      "name": "DataTooLarge"
    }
  ]
};
