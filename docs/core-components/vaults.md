---
id: vaults
title: Vaults - The Foundation of Liquidity
sidebar_label: Vaults
slug: /core-components/vaults
---

# Vaults: The Foundation of Liquidity

Vaults are the foundational smart contracts within Yeap Finance, serving as segregated, highly configurable pools for specific digital assets.

* **Isolated Asset Pools**: Each vault is dedicated to managing a single cryptographic asset (e.g., USDC, ETH, WBTC, or a niche altcoin). This isolation is a key risk management feature, ensuring that the specific risks, utilization rates, and market dynamics associated with one asset do not directly spill over to impact other assets held in different vaults within the Yeap Finance ecosystem.
* **Interest-Bearing Tokens (IBTs)**: When lenders deposit assets into a vault, they receive a corresponding amount of Interest-Bearing Tokens (IBTs). These IBTs are fungible tokens that represent the lender's pro-rata share of the vault’s total assets, including any accrued interest. The exchange rate between the IBT and the underlying asset increases over time as interest is paid by borrowers into the vault. Lenders can hold these IBTs, transfer them, or use them in other DeFi protocols (where supported), and can redeem them at any time to withdraw their original principal plus accumulated earnings, subject to the vault's available (non-borrowed) liquidity.
* **Configurable Interest Rate Models (IRMs)**: A defining feature of Yeap vaults is the ability for their creators to select and meticulously configure an appropriate interest rate model from a suite of available options, or even propose new ones. The primary types include:
    * **Fixed Rate**: Offers a predetermined, stable interest rate (e.g., 5% APY). Ideal for users seeking predictability.
    * **Variable Rate**: Interest rates fluctuate algorithmically based primarily on the utilization rate of the vault (i.e., the ratio of borrowed assets to total assets).
    * **Dynamic Rate**: More sophisticated models that can adapt to a broader set of real-time conditions, potentially including vault utilization, external market signals via oracles (e.g., prevailing rates on other platforms), time-based parameters, or even the velocity of change in utilization.
