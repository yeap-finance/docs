---
id: advanced-customization
title: Advanced Interest Rate Customization
sidebar_label: Interest Rate Customization
slug: /key-features/advanced-customization
---

# Advanced Interest Rate Customization

While many protocols offer basic interest rate models, Yeap Finance provides a framework for deep customization and strategic application, directly benefiting both lenders and borrowers.

* **Asset-Specific Optimization**: Vault creators can meticulously tailor interest models to an asset's unique risk profile, market dynamics, and liquidity characteristics.
    * *Example for Stablecoins*: Vaults for stablecoins can employ variable rate models that offer competitive base APYs, dynamically scaling with utilization to attract liquidity during high demand periods, ensuring both attractive returns for lenders and available capital for borrowers.
    * *Example for Volatile Assets*: Vaults for volatile assets like ETH or newer altcoins can utilize dynamic models that not only respond to utilization but might also incorporate factors like observed market volatility (via oracles) to adjust rates, offering higher compensation to lenders for bearing increased risk during turbulent periods.
* **Sophisticated Utilization Curves**: Beyond simple linear models, vault creators can implement nuanced interest rate curves to precisely manage liquidity and borrowing incentives:
    * *Linear Curves*: A straightforward model where rates increase steadily with utilization (e.g., 2% APY at 10% utilization, scaling to 15% at 90%). Useful for predictable scaling.
    * *'Kink' Models*: Particularly powerful for balancing capital efficiency with liquidity assurance. A vault might maintain low, attractive borrowing rates up to a specific, high utilization threshold (e.g., 3% APY up to 80% utilization), then sharply increase rates beyond this "kink" (e.g., scaling rapidly to 25% APY at 95% utilization). This aggressively incentivizes new liquidity provision or loan repayments when the vault's reserves are running low, acting as a strong market-balancing mechanism.
    * *Adaptive Models (Future Scope)*: The architecture allows for the future integration of adaptive models that could adjust curve parameters based on the *velocity* of utilization change, time-weighted average utilization, or other external market factors, offering even more sophisticated automated risk management and interest rate setting.
