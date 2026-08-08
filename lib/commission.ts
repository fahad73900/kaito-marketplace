// lib/commission.ts

export interface PriceBreakdown {
    itemPrice: number;
    platformFee: number;      // 15% Marketplace Commission
    paymentAllowance: number; // 5% Payment Gateway Fee
    totalBuyerPays: number;
    sellerPayout: number;     // 80% Seller Share
  }
  
  export function calculateCommission(basePrice: number): PriceBreakdown {
    const itemPrice = Number(basePrice) || 0;
    const platformFee = itemPrice * 0.15;      // 15% commission
    const paymentAllowance = itemPrice * 0.05; // 5% allowance
    const totalBuyerPays = itemPrice + paymentAllowance; // Total including gateway fee
    const sellerPayout = itemPrice - platformFee;         // Net earnings for seller (80%)
  
    return {
      itemPrice,
      platformFee,
      paymentAllowance,
      totalBuyerPays,
      sellerPayout,
    };
  }
  