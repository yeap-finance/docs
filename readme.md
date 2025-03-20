# Yeap Finance: A Decentralized Lending Protocol

## Abstract

Yeap Finance is an innovative decentralized lending protocol engineered to overcome the shortcomings of traditional DeFi lending platforms.
Unlike conventional systems that impose rigid structures, Yeap Finance introduces **customizable vaults** and **multiple borrow managers**, offering diverse borrowing options within a single ecosystem.
This flexibility caters to a wide range of financial strategies, from conservative lending to advanced trading.
Furthermore, its **permissionless governance model** enables anyone—individuals, groups, or decentralized autonomous organizations (DAOs)—to create and manage vaults, promoting a truly decentralized and community-driven platform.
This whitepaper provides an in-depth exploration of Yeap Finance’s architecture, key functionalities, technical underpinnings, and its ambitious vision to transform the DeFi lending landscape.

---

## Introduction

Yeap Finance has three key pioneering designs:

- **Customizable Vaults**: Each vault operates as an independent lending pool with its own interest rate model—whether fixed, variable, or dynamic—tailored to the specific asset it holds, enhancing efficiency and risk management.
- **Multiple Borrow Managers**: A single vault can integrate various borrowing mechanisms, such as 
  - **Position Manager** for collateralized loans
  - **Flashloan Manager** for instant, uncollateralized loans, broadening the protocol’s utility
  - **NFT Collateral Loans** allowing borrowing against non-fungible tokens (NFTs), using their market value as collateral
  - **Fixed Term Loans**  offer loans with fixed interest rates and repayment schedules, providing predictability for borrowers
  - **Leveraging with LP tokens** enable LP token as collateral to borrow additional tokens from a lending protocol, which then added back to the liquidity pool.
- **Permissionless Governance**: Vault creation and management are open to all, empowering users to experiment and innovate without gatekeepers, whether through individual accounts, multisig wallets, or DAOs.

Yeap Finance’s mission is to deliver a versatile, secure, and user-centric lending platform that meets the diverse needs of the DeFi community—from risk-averse lenders seeking stable returns to traders pursuing leveraged opportunities.

---

## Protocol Overview

Yeap Finance is a decentralized lending platform that facilitates seamless lending and borrowing of digital assets. Its architecture revolves around two core components: **Vaults** and **Borrow Managers**, which together create a modular and adaptable ecosystem.

### Vaults

Vaults are the foundational units of Yeap Finance, serving as smart contracts that manage specific asset pools:

- **Asset Pools**: Each vault holds a designated asset (e.g., USDC, ETH, or WBTC) deposited by lenders. For instance, one vault might be dedicated to stablecoin lending, while another focuses on volatile assets.
- **Custom Interest Rate Models**: Vaults feature configurable interest rates:
    - **Fixed**: Offers a steady rate (e.g., 5% annually), ideal for lenders seeking predictability, such as those depositing stablecoins for consistent returns.
    - **Variable**: Fluctuates based on supply and demand within the vault. For example, if borrowing demand for ETH surges, the interest rate increases to attract more lenders.
    - **Dynamic**: Adapts to real-time conditions, such as vault utilization or external market signals (e.g., price feeds from oracles). A dynamic model might lower rates during low utilization to encourage borrowing or raise them during volatility to protect lenders.
- **Utilization-Driven Design**: Interest rates can be tied to the vault’s utilization ratio—the percentage of deposited assets currently borrowed. For example, a vault might offer 2% interest at 20% utilization but scale to 10% at 90%, ensuring a balanced market.
- **Interest-Bearing Tokens**: Upon depositing assets into a vault, lenders receive an **interest-bearing token**. This token represents their proportional share of the vault’s assets and accrued interest. As borrowers pay interest, the token’s value grows, reflecting the lender’s increasing stake. Lenders can redeem this token to withdraw their principal and earnings, subject to available liquidity.

### Borrow Managers

Borrow managers are smart contracts that define the rules for accessing funds from a vault, with each vault capable of supporting multiple managers to suit different user needs:

- **Modular Borrowing Rules**: This modularity allows vaults to cater to diverse scenarios. For instance, a USDC vault could offer both collateralized loans and flash loans, each governed by a distinct manager.
- **Position Manager (Collateralized Borrowing)**:
    - Borrowers deposit collateral (e.g., ETH) to borrow another asset (e.g., USDC).
    - Key parameters include the **Loan-to-Value (LTV)** ratio (e.g., 70%, meaning $100 of ETH collateral allows borrowing $70 of USDC) and the **Liquidation LTV (LLTV)** (e.g., 80%, where liquidation triggers if collateral value drops too low).
    - This manager suits long-term borrowing needs, such as funding yield farming or leveraged trading.
- **Flashloan Manager (Uncollateralized Borrowing)**:
    - Provides instant access to funds without collateral, requiring repayment within the same blockchain transaction.
    - A small fee (e.g., 0.01% of the loan amount) is charged, configurable by vault governance, making it cost-effective for quick operations like arbitrage.
    - Ideal for short-term, high-frequency strategies that capitalize on market inefficiencies.

Developers can build upon Yeap Finance to create other borrow managers for a vault. For example:

- **Fixed Term Loans**: Offer loans with fixed interest rates and repayment schedules, providing predictability for borrowers.
- **NFT Collateral Loans**: Allow borrowing against non-fungible tokens (NFTs), using their market value as collateral.
- **Interest-Bearing Token Collateral**: Let lenders use their interest-bearing tokens (received upon deposit) as collateral to borrow from other vaults.
- **Leveraging with Interest-Bearing Token:** Borrowers can leverage ****interest-bearing tokens like(wsteth)  to borrow from underlying asset vaults (like ETH), and buying more ib tokens, so on and so on. the LTV can be  high (like 95%)  to increase the leverage level.
- **Leveraging with LP tokens** : Using LP tokens from DEX(like Uniswap), as collateral to borrow additional tokens from a lending protocol. These borrowed tokens are then added back to the liquidity pool, increasing your share and potential earnings from trading fees and rewards.
- **Isolated Lending Markets**: Create separate pools for specific use cases, isolating risks for high-risk or niche borrowing.

### How It Works

1. **Lending Process**:
    - Lenders deposit assets into a vault (e.g., 100 USDC into a stablecoin vault), and receive an interest-bearing token.
    - They earn interest based on the vault’s rate model, accruing in real time, and can redeem the token for their assets and profits. For example, a 5% fixed-rate vault would yield 5 USDC annually, payable upon withdrawal.
    - Withdrawals are possible anytime, provided sufficient liquidity remains in the vault (i.e., not all funds are borrowed).
2. **Borrowing Process**:
    - Borrowers choose a borrow manager:
        - Via the **Position Manager**, they lock 1 ETH (valued at $2,000) as collateral with a 70% LTV, borrowing up to $1,400 in USDC. Lenders can also use their interest-bearing tokens as collateral to borrow from other vaults.
        - Via the **Flashloan Manager**, they borrow $10,000 in USDC, execute an arbitrage trade, and repay $10,009 (loan + 0.09% fee) within one transaction.
3. **Governance Process**:
    - Vault creators set initial parameters—interest model, collateral types, fees—and can adjust them over time. For example, a DAO managing an ETH vault might vote to increase the LTV from 70% to 75% to attract more borrowers.

This modular framework allows Yeap Finance to support everything from basic lending to intricate DeFi strategies, all within a decentralized environment.

```text
+--------------------------------+       +--------------------------------+
| Vault A (Asset: ETH)           |       | Vault B (Asset: DAI)           |
+--------------------------------+       +--------------------------------+
| Lenders: Deposit ETH           |       | Lenders: Deposit DAI           |
|   -> Receive vToken-A          |       |   -> Receive vToken-B          |
+--------------------------------+       +--------------------------------+
          |                                      |
          v                                      v
+--------------------------------+       +--------------------------------+
| Position Manager A             |       | Position Manager B             |
| Accepts:                       |       | Accepts:                       |
| - DAI                          |       | - ETH                          |
| - vToken-B (from Vault B)      |       | - vToken-A (from Vault A)      |
+--------------------------------+       +--------------------------------+
          |                                      |
          v                                      v
+--------------------------------+       +--------------------------------+
| Borrowers: Borrow ETH          |       | Borrowers: Borrow DAI          |
|   Using DAI or vToken-B        |       |   Using ETH or vToken-A        |
+--------------------------------+       +--------------------------------+
          ^                                      ^
          | vToken-B flows from                  | vToken-A flows from
          | Vault B                              | Vault A
+--------------------------------+       +--------------------------------+
| Flashloan Manager A            |       | Flashloan Manager B            |
| - Instant ETH borrow/repay     |       | - Instant DAI borrow/repay     |
| - No collateral                |       | - No collateral                |
+--------------------------------+       +--------------------------------+
```
---

## Key Features

Yeap Finance stands out in the crowded DeFi lending market with its innovative features, designed to maximize flexibility, accessibility, and efficiency:

### Customizable Interest Rate Models

- **Asset-Specific Optimization**: Each vault’s interest model aligns with its asset’s characteristics:
    - Stablecoins might use a variable rate (e.g., 2–8%) to adjust with demand, ensuring competitive yields.
    - Volatile assets like ETH could adopt a dynamic rate that rises during price drops to compensate lenders for increased risk.
- **Utilization Curves**: Vaults can implement sophisticated rate structures:
    - A linear curve increases rates steadily with utilization (e.g., 2% at 10%, 10% at 90%).
    - A “kink” model keeps rates low until a threshold (e.g., 80% utilization), then sharply increases to incentivize liquidity provision.

### Multiple Borrow Managers per Vault

- **Position Manager**:
    - Supports overcollateralized borrowing with customizable parameters. For example, a vault might accept ETH and WBTC as collateral, with LTVs of 70% and 65%, respectively, and LLTVs of 80% and 75%.
    - Use case: A trader locks $10,000 in ETH to borrow $7,000 in USDC, using the funds to buy more ETH, amplifying their market exposure.
- **Flashloan Manager**:
    - Enables uncollateralized borrowing for rapid, transaction-bound operations. A borrower might borrow $50,000 in USDC, swap it for ETH on a DEX where ETH is undervalued, sell it elsewhere for $50,500, and repay the loan with a $450 profit (minus the $45 fee).
    - Governance can adjust fees dynamically—e.g., lowering them to 0.01% during low activity to encourage usage.
- RWA Manager

### Permissionless Vault Creation

- **Universal Access**: No central authority approves vault creation. A solo developer could launch a vault for a niche token (e.g., a gaming asset), while a DAO might create a vault for a basket of stablecoins.
- **Configurable Governance**: Creators choose their control mechanism:
    - An individual might manage a vault personally for simplicity.
    - A multisig (e.g., 3-of-5 signers) could oversee a vault for a small team.
    - A DAO might govern a vault with token-based voting, allowing community input on parameters like LTV ratios.
- **Ecosystem Diversity**: This openness fosters experimentation, enabling vaults for unique use cases—like low-risk stablecoin lending or high-risk leveraged trading on altcoins.

---

## Technical Architecture

Yeap Finance’s infrastructure is built on a secure, efficient foundation, leveraging the **Move programming language** (used in blockchains like Aptos or Sui) to ensure robustness and scalability.

### Smart Contracts

- **Vault Contracts**:
    - Handle deposits, track interest accrual, and process withdrawals. For example, a vault calculates interest every block based on its model and updates lender balances accordingly.
    - Monitor utilization (e.g., 60% of $1M deposited is borrowed) and adjust interest rates in real time.
- **Borrow Manager Contracts**:
    - **Position Manager**: Manages collateral locking, borrowing limits, and liquidation triggers. If ETH’s price drops from $2,000 to $1,600, a $1,400 loan against 1 ETH might hit the 80% LLTV, prompting liquidation.
    - **Flashloan Manager**: Executes atomic loans, reverting the transaction if repayment fails. For instance, borrowing $10,000 requires returning $10,001 (if fee is 0.01%) by the transaction’s end, or the entire operation is undone.

### Move Language Advantages

- **No Drop Struct**: Ensures flash loans are repaid within a single transaction by preventing incomplete state changes, thwarting potential exploits.
- **Formal Verification**: Allows developers to mathematically prove contract correctness, reducing risks like reentrancy attacks or overflow errors common in other languages like Solidity.

### Integrations

- **Decentralized Exchanges (DEXs)**: Borrowers can use funds to trade on platforms like Uniswap, enabling arbitrage or liquidity provision.
- **Oracles**: Price feeds (e.g., from Pyth) inform collateral valuations. For example, if ETH’s price falls 10%, the Position’s health rate can decrease to liquidation threshold.

---

## Governance and Decentralization

Yeap Finance embraces a fully decentralized governance model, ensuring the protocol evolves organically through user participation:

- **Vault-Level Governance**: Each vault operates independently:
    - Creators set initial parameters (e.g., a 5% fixed rate, 70% LTV for ETH collateral).
    - Adjustments—like raising flashloan fees from 0.09% to 0.15%—are made by the creator or delegated governance body.
- **Flexible Structures**:
    - **Individual**: A single user might manage a small vault for personal use.
    - **Multisig**: A team of developers could control a vault, requiring consensus for changes.
    - **DAO**: A community might govern a vault, with $YEAP token holders voting on proposals (if a token exists).
- **No Central Oversight**: Unlike protocols with admin keys, Yeap Finance relinquishes control to vault creators, fostering a trustless ecosystem.

This approach cultivates a vibrant, diverse network of vaults tailored to specific user bases and strategies.

---

## Security and Risk Management

Yeap Finance prioritizes security and resilience, implementing safeguards to protect all participants:

### Liquidation Mechanism

- **Collateralized Loans**: If a position’s collateral value drops below the LLTV (e.g., 80% of borrowed value), it’s liquidated.
- **Process**: Liquidators repay the debt (e.g., $1,400 USDC) and claim the collateral (e.g., 1 ETH, now worth $1,750) at a discount (e.g., 5% bonus), maintaining vault solvency.
- **Example**: A 20% ETH price drop triggers liquidation, ensuring lenders recover their funds.

### Lender Protections

- **Overcollateralization**: Borrowers lock more value than they borrow (e.g., $2,000 ETH for $1,400 USDC), buffering against price drops.
- **Reserve Fund**: Vaults can allocate fees (e.g., 10% of flashloan revenue) to a reserve, covering losses in extreme scenarios like oracle failures.

### Flashloan Security

- **Atomic Transactions**: Loans revert if not repaid, eliminating default risk. For example, a failed arbitrage attempt cancels the borrow without loss to lenders.
- **Audits**: Contracts undergo extensive audits by reputable firms to identify and fix vulnerabilities.

These measures ensure Yeap Finance withstands market turbulence and malicious actors.

---

## Use Cases

Yeap Finance’s versatility supports a broad spectrum of financial activities:

### For Lenders

- **Stable Yields**: Deposit USDC into a fixed-rate vault (e.g., 4%) for reliable income, suitable for conservative investors.
- **Dynamic Earnings**: Lend ETH to a dynamic-rate vault, earning higher rates (e.g., 8%) during high demand or volatility.

### For Borrowers

- **Leveraged Trading**: Lock $10,000 in WBTC to borrow $6,500 in USDC, buying more WBTC to amplify gains if its price rises.
- **Yield Farming**: Borrow ETH to stake in a liquidity pool, earning rewards that exceed borrowing costs.

### For Flashloan Users

- **Arbitrage**: Borrow $100,000 in USDC, exploit a 2% price gap between DEXs, repay $100,090 (loan + fee), and pocket $1,910 profit.
- **Collateral Swaps**: Swap ETH collateral for WBTC without closing a position, adjusting exposure seamlessly.

These examples highlight Yeap Finance’s appeal to both novice and expert DeFi users.

---

## Tokenomics (Optional)

A native token, such as $YEAP, could enhance Yeap Finance’s ecosystem:

- **Governance**: $YEAP holders vote on protocol upgrades (e.g., adding new borrow managers).
- **Incentives**: Lenders earn $YEAP rewards (e.g., 1% of deposits annually), boosting participation.
- **Fee Sharing**: 20% of flashloan fees might redistribute to staked $YEAP holders, creating passive income.

*Details will evolve with community input and protocol maturity.*

---

## Roadmap

Yeap Finance’s development unfolds in strategic phases:

- **Phase 1: Core Launch**
    - Deploy vaults for key assets (USDC, ETH, WBTC).
    - Activate Position and Flashloan Managers.
    - Enable permissionless vault creation.
- **Phase 2: Expansion**
    - Add borrow managers for synthetic assets.
    - Support more tokens (e.g., altcoins, NFTs) and cross-chain assets.
    - Enhance interest models with predictive analytics.
- **Phase 3: Advanced Features**
    - Introduce cross-chain vaults (e.g., via LayerZero or Wormhole).
    - Build DAO-friendly governance tools, like voting dashboards.

This roadmap aligns innovation with stability, guided by user feedback.

---

## Conclusion

Yeap Finance reimagines DeFi lending with a flexible, secure, and decentralized platform that empowers users to shape their financial future. Its customizable vaults, diverse borrow managers, and permissionless governance unlock new possibilities—from stable yields to cutting-edge trading strategies. Whether you’re a lender, borrower, or developer, Yeap Finance offers the tools to succeed in DeFi. Join our community at [Yeap Finance website] to explore, contribute, and thrive in this transformative ecosystem.