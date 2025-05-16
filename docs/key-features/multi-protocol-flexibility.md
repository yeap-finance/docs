---
id: multi-protocol-flexibility
title: Multi-Protocol Flexibility Per Vault
sidebar_label: Multi-Protocol Flexibility
slug: /key-features/multi-protocol-flexibility
---

# Unparalleled Flexibility with Multiple Borrow Protocols Per Vault

A single vault's liquidity pool can be accessed via multiple, functionally distinct Borrow Protocols simultaneously. This dramatically enhances capital efficiency and use-case versatility.

* **Leveraged LP Token Protocol for Yield Amplification**: This is a cornerstone feature for sophisticated liquidity providers, designed to maximize capital efficiency and potential returns from LPing. It allows users to:
    * **Provide Initial Collateral**: Users can either deposit existing Liquidity Provider (LP) tokens from integrated DEXs or deposit one of the underlying assets intended to form part of an LP pair.
    * **Borrow Underlying Assets**: Against the provided collateral, users can borrow one or even both of the underlying assets of the target LP token pair.
    * **Execute Leverage Loops**: The borrowed asset(s), combined with initial collateral, are used to form or augment an LP position. This new/augmented LP token can then itself become collateral for further borrowing (looping).
    * **Granular Customizable Parameters**: Vault creators define LTV ratios, liquidation thresholds, and debt ceilings.
    * **Sophisticated Risk Management**: Robust mechanisms monitor the health of leveraged positions, involving accurate valuation of LP token collateral and borrowed debt.

    The diagram below illustrates the flow of the Leveraged LP Token Protocol:

    ```mermaid
    ---
    config:
      look: handDrawn
      layout: elk
      theme: redux
    ---
    graph TD
        subgraph User_Action_Start_LP_Leverage
            U[User]
            LLP[Leveraged LP Token Protocol]
            U -- "Option A: Deposits LP Token" --> LLP
            U -- "Option B: Deposits Underlying Asset A" --> LLP
        end

        subgraph Yeap_Finance_Core
            Vault_A["Vault (Asset A)"]
            Vault_B["Vault (Asset B)"]
            User_Position[User's Leveraged LP Position]
            LLP -- "Interacts with for liquidity" --> Vault_A
            LLP -- "Interacts with for liquidity" --> Vault_B
            LLP -- "Manages collateral & debt for" --> User_Position
        end

        UB[User Borrows Necessary Assets]
        LLP -- "Borrows Necessary Assets:<br>Asset B or A, or Both" --> UB

        subgraph DEX_Interaction
            DEX["Decentralized Exchange (DEX)"]
            New_LP["New/Augmented LP Token (Asset A/B)"]
            UB -- "Combines with own assets if needed,<br>provides to DEX" --> DEX
            DEX -- "Forms/Augments LP" --> New_LP
        end

        New_LP -- "Can be re-collateralized in LLPP for looping" --> LLP

        style U fill:#lightgrey,stroke:#333
        style LLP fill:#ccf,stroke:#333,stroke-width:2px
        style Vault_A fill:#f9f,stroke:#333
        style Vault_B fill:#f9f,stroke:#333
        style DEX fill:#cfc,stroke:#333
    ```

* **Position Protocol for Strategic Leverage and Margin Trading**: The Position Protocol serves as a versatile tool for both general overcollateralized borrowing and, crucially, for **facilitating on-chain margin trading**. It allows users to:
    * **Depositing Collateral**: Users lock in accepted assets.
    * **Borrowing Assets**: They can borrow other assets against their collateral up to the LTV ratio.
    * **Executing Leveraged Trades**: Borrowed funds can be used on external DEXs to purchase more of the collateral asset or acquire other target assets.
    * **Integrated Position Management**: Yeap Finance provides tools for users to monitor the health of these leveraged positions.

    The following diagram shows the margin trading flow using the Position Protocol:

    ```mermaid
    ---
    config:
      look: handDrawn
      layout: elk
      theme: redux
    ---
    graph TD
        U[User]
        PP[Position Protocol]
        User_Position[User's Margin Position]
        Vault_Collateral["Vault (Collateral Asset, e.g., ETH)"]
        Vault_Borrowed["Vault (Borrowed Asset, e.g., USDC)"]
        UB[User Borrows USDC]
        DEX["Decentralized Exchange (DEX)"]
        TA["Target Asset in User's Wallet/Control"]
        Risk_Management["Risk Management (LLTV)"]

        U -- "Deposits Collateral (e.g., ETH)" --> PP

        subgraph Yeap_Finance_Core
            PP -- "Manages Collateral & Debt for" --> User_Position
            PP -- "Interacts with for collateral" --> Vault_Collateral
            PP -- "Interacts with for borrowed asset" --> Vault_Borrowed
        end

        PP -- "Borrows Asset (e.g., USDC)" --> UB
        UB -- "Trades on DEX" --> DEX
        DEX -- "Acquires Target Asset (e.g., SOL or more ETH)" --> TA

        User_Position -- "Monitored for LTV/Liquidation by" --> Risk_Management

        style U fill:#lightgrey,stroke:#333
        style PP fill:#ccf,stroke:#333,stroke-width:2px
        style Vault_Collateral fill:#f9f,stroke:#333
        style Vault_Borrowed fill:#f9f,stroke:#333
        style DEX fill:#cfc,stroke:#333
    ```

* **Flashloan Protocol for Atomic Operations**: Provides standard uncollateralized flash loans that must be repaid within the same blockchain transaction. Features include configurable fees and support for multi-asset flash loan strategies.
* **Extensibility with Other Specialized Protocols**: The architecture is designed for future growth, readily supporting the integration of new Borrow Protocols like NFT Collateral Loan Protocols, RWA Protocols, Fixed-Term Loan Protocols, and potentially Undercollateralized Loan Protocols.
