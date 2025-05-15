---
id: developers-flash-loans
title: Use Cases for Developers & Flash Loans
sidebar_label: For Developers (Flash Loans)
slug: /use-cases/developers-flash-loans
---

## 7.3. For Sophisticated Users & Developers (Flash Loans)

Yeap Finance's Flashloan Protocol offers powerful capabilities for developers and advanced DeFi users to execute complex atomic operations.

### Arbitrage Across Decentralized Exchanges (DEXs)
* **Scenario**: A bot or an astute trader detects a temporary price discrepancy for an asset (e.g., ETH is priced at $3000 on DEX A and $3015 on DEX B).
* **Yeap Finance Solution**: They can take a **Flashloan Protocol** loan of USDC from a Yeap vault, use it to buy ETH on DEX A at the lower price, immediately sell that ETH on DEX B at the higher price, convert the proceeds back to USDC, and repay the flash loan plus the fee, all within the same atomic transaction, pocketing the difference (minus gas fees).

### Collateral Swaps / Debt Refinancing
* **Scenario**: A borrower has an existing collateralized debt position (e.g., ETH backing a USDC loan on another platform, or even on Yeap itself) but wishes to change their collateral asset to WBTC without closing their loan, or wants to move their debt to a Yeap vault offering better terms (e.g., lower interest rate or higher LTV).
* **Yeap Finance Solution**: Using a flash loan, they can borrow USDC to instantly repay their existing debt, which unlocks their original ETH collateral. They can then swap that ETH for WBTC (or keep the ETH if just refinancing into a new Yeap position), deposit the WBTC as new collateral in a Yeap vault's Position Protocol, borrow USDC again from Yeap against this new collateral, and finally use these newly borrowed funds to repay the initial flash loan and its fee. This complex series of actions is made feasible and risk-free (from the lender's perspective) by the atomicity of flash loans.

### Executing Liquidations Efficiently
* **Scenario**: A liquidator identifies an undercollateralized loan position on Yeap Finance (or another DeFi protocol that allows external liquidators).
* **Yeap Finance Solution**: They can take a flash loan of the required debt asset (e.g., USDC), use it to liquidate the unhealthy position thereby acquiring the borrower's collateral at a discount (the liquidation bonus), sell a portion of the acquired collateral on a DEX to obtain enough USDC to repay the flash loan and fee, and profit from the remaining collateral.
