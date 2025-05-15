---
id: borrow-protocols
title: Borrow Protocols - Defining Access to Liquidity
sidebar_label: Borrow Protocols
slug: /core-components/borrow-protocols
---

## 2.2. Borrow Protocols: Defining Access to Liquidity

Borrow Protocols are distinct, modular smart contract systems that interface with a Yeap Finance vault. Each Borrow Protocol defines a specific set of rules, conditions, collateralization requirements (if any), and mechanisms by which users can borrow assets from that vault.

* **Modular Borrowing Functionality**: A single vault can support multiple Borrow Protocols simultaneously, each catering to different user needs or risk profiles, all while drawing from the same underlying liquidity pool. This enhances capital efficiency and use-case diversity significantly.
* **Standard Borrow Protocol Types**:
    * **Position Protocol (Collateralized Borrowing & Margin Trading)**: This protocol enables users to borrow assets by first supplying other approved assets as collateral. Beyond general-purpose borrowing, the Position Protocol is the primary mechanism for users to engage in **margin trading**, creating leveraged spot positions. Users can deposit collateral (e.g., ETH), borrow another asset (commonly a stablecoin like USDC), and then use these borrowed funds to purchase more of the collateral asset or a different target asset on an external DEX. The "position" managed by this protocol thus represents the user's overall leveraged market exposure. Key parameters, configurable by the vault creator, include eligible collateral types, Loan-to-Value (LTV) ratios, and Liquidation LTV (LLTV) thresholds, which are critical for managing the risk of these leveraged positions.
    * **Leveraged LP Token Protocol (Leveraged Liquidity Provision)**: A cornerstone of Yeap Finance, this protocol allows users to initiate leveraged liquidity positions. Users can collateralize *either* their existing Liquidity Provider (LP) tokens from integrated DEXs, *or one of the underlying assets of a target LP pair* (e.g., deposit ETH to start leveraging an ETH/USDC LP position). Against this initial collateral, users can borrow the other necessary asset(s) (e.g., borrow USDC if ETH was collateralized, or borrow more ETH/USDC if an LP token was collateralized) to form or augment an LP position on a DEX. This newly formed/augmented LP token can then itself become collateral for further borrowing (looping) within this protocol, enabling users to amplify their LP positions and potential yield. This protocol includes specialized logic for valuing both LP tokens and single assets in this context, and for managing the associated risks.
    * **Flashloan Protocol (Atomic Borrow & Repay)**: This protocol provides access to uncollateralized loans, with the critical condition that the borrowed amount plus a small, configurable fee must be repaid within the same blockchain transaction. Failure to repay results in the entire transaction being reverted. This is primarily used by developers and sophisticated traders for arbitrage, collateral swaps, liquidations, and other complex atomic operations.
* **Extensibility**: The Yeap Finance architecture is designed to be highly extensible, allowing the community and third-party developers to create, propose, and (if approved by a vault's governance) integrate new, custom Borrow Protocols to meet emerging needs or introduce novel financial mechanisms.

## 2.3. The Synergy of Vaults and Borrow Protocols

(This content is also summarized in the main Architecture page, but can be detailed here again or expanded)

The true innovative power of Yeap Finance emerges from the synergistic and decoupled relationship between Vaults and Borrow Protocols. Vaults act as the secure, specialized repositories and yield-generating engines for individual assets, managed according to their unique IRMs. Borrow Protocols, in turn, act as versatile, pluggable "gateways" or "lending interfaces" that define *how* the liquidity within those vaults can be accessed and utilized.

This decoupling means:

* **Maximized Capital Efficiency**: A single pool of capital (e.g., USDC within a specific vault) can simultaneously serve a multitude of use cases.
* **Tailored Risk Exposure for Lenders (Indirectly)**: The vault's configuration (which Borrow Protocols it supports and their parameters) indirectly shapes the risk profile.
* **Adaptability and Future-Proofing**: As new DeFi primitives or borrowing mechanisms emerge, new Borrow Protocols can be developed and integrated.

*(Consider re-inserting the Mermaid diagram from section 2.3 of the whitepaper here if desired for more detail on this page, or link back to the Architecture page's diagram).*

## 2.4. Operational Flow

1.  **Lending Process**:
    * Lenders identify a Yeap Finance vault that holds an asset they wish to lend and offers a risk/reward profile (defined by its IRM and supported Borrow Protocols) that aligns with their objectives.
    * They deposit their chosen asset into the vault and, in return, receive an equivalent value of the vault's unique IBTs.
    * Interest accrues in real-time based on the vault’s active IRM and the borrowing activity facilitated by its connected Borrow Protocols, increasing the redemption value of their IBTs.
2.  **Borrowing Process**:
    * Borrowers identify a vault containing the asset they wish to borrow.
    * They then select an appropriate Borrow Protocol associated with that vault that matches their specific needs (e.g., Position Protocol for a general collateralized loan or margin trading, Leveraged LP Token Protocol to amplify an LP position, or Flashloan Protocol for an atomic operation).
    * They interact with the chosen Borrow Protocol, fulfilling its specific requirements (e.g., posting collateral, paying a fee) to access funds from the vault.
3.  **Vault Governance Process**:
    * Vault creators (individuals, multisigs, or DAOs) define the initial parameters for their vault, including the asset, the IRM and its settings, and which Borrow Protocols are initially enabled along with their specific configurations (e.g., LTVs for a Position Protocol, accepted LP tokens for a Leveraged LP Token Protocol).
    * Depending on the governance structure chosen by the creator for that specific vault, these parameters can be adjusted over time through proposals and voting, allowing the vault to adapt to changing market conditions or community preferences.
