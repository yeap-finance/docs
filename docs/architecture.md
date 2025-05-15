---
id: architecture
title: Protocol Architecture
sidebar_label: Architecture
slug: /architecture
---

## 2. Protocol Overview: The Core Architecture

Yeap Finance facilitates seamless, efficient, and highly flexible lending and borrowing of digital assets. Its architecture revolves around two primary, interoperable components: **Vaults** and **Borrow Protocols**.

This section provides a high-level view of these components and their synergy. For more detailed explanations, please refer to the "Core Components" section.

### Key Architectural Pillars:

* **Isolated Asset Pools (Vaults):** Each vault manages a single cryptographic asset, ensuring risk isolation.
* **Interest-Bearing Tokens (IBTs):** Lenders receive IBTs representing their share and accrued interest.
* **Configurable Interest Rate Models (IRMs):** Vault creators can select and customize IRMs (Fixed, Variable, Dynamic).
* **Modular Borrowing Functionality (Borrow Protocols):** Distinct systems defining rules for borrowing from vaults (e.g., Position Protocol, Leveraged LP Token Protocol, Flashloan Protocol).
* **Extensibility:** The architecture allows for the integration of new, custom Borrow Protocols.

### The Synergy of Vaults and Borrow Protocols

The true innovative power of Yeap Finance emerges from the synergistic and decoupled relationship between Vaults and Borrow Protocols. Vaults act as the secure, specialized repositories and yield-generating engines for individual assets, managed according to their unique IRMs. Borrow Protocols, in turn, act as versatile, pluggable "gateways" or "lending interfaces" that define *how* the liquidity within those vaults can be accessed and utilized.

This decoupling means:

* **Maximized Capital Efficiency**: A single pool of capital can serve multiple use cases simultaneously.
* **Tailored Risk Exposure for Lenders (Indirectly)**: Vault configuration shapes the risk profile.
* **Adaptability and Future-Proofing**: New Borrow Protocols can be integrated without overhauling the core system.

The following diagram illustrates this synergy:

```mermaid
---
config:
  look: handDrawn
  layout: dagre
  theme: redux
---
graph TD

        Lenders[Lenders]
        V[Vault - Asset A Pool]
        IBTs[IBT - Asset A]

        Lenders -- "Deposit Asset A" --> V
        V -- "Issues IBT" --> IBTs
        Lenders -- "Redeem IBT" --> IBTs

        subgraph Borrowing Mechanisms
            BP1[Position Protocol]
            BP2[Leveraged LP Token Protocol]
            BP3[Flashloan Protocol]
            BP_N[...Other Custom Protocols]
        end

        V -- "Liquidity" --> BP1
        V -- "Liquidity" --> BP2
        V -- "Liquidity" --> BP3
        V -- "Liquidity" --> BP_N

        Borrower_CM[Borrowers - Collateralized/Margin]
        Borrower_LLP[Borrowers - Leveraged LP]
        Borrower_FU[Borrowers - Flashloan Users]
        Borrower_CN[Borrowers - Custom Needs]

        Borrower_CM -- "Interact" --> BP1
        Borrower_LLP -- "Interact" --> BP2
        Borrower_FU -- "Interact" --> BP3
        Borrower_CN -- "Interact" --> BP_N

        BP1 -- "Facilitates Borrowing" --> Borrower_CM
        BP2 -- "Facilitates Borrowing" --> Borrower_LLP
        BP3 -- "Facilitates Borrowing" --> Borrower_FU
        BP_N -- "Facilitates Borrowing" --> Borrower_CN


    style V fill:#f9f,stroke:#333,stroke-width:2px
    style BP1 fill:#ccf,stroke:#333,stroke-width:2px
    style BP2 fill:#ccf,stroke:#333,stroke-width:2px
    style BP3 fill:#ccf,stroke:#333,stroke-width:2px
    style BP_N fill:#ccf,stroke:#333,stroke-width:2px
```

### Operational Flow Overview

1.  **Lending Process**: Lenders deposit assets, receive IBTs, and accrue interest.
2.  **Borrowing Process**: Borrowers select a vault and an associated Borrow Protocol to access funds.
3.  **Vault Governance Process**: Vault creators define initial parameters and can adjust them over time based on the chosen governance structure.

For detailed information on Vaults and Borrow Protocols, please see the "Core Components" section.
