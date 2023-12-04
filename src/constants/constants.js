export const NUMBERS = {
  maxAmount: 20000,
  purchaseUnit: 1000,
  minNumber: 1,
  maxNumber: 45,
  lottoLength: 6,
};

export const STRINGS = {
  bonus: 'BONUS',
};

export const winningAmountByRank = {
  three: 5000,
  four: 50000,
  five: 1500000,
  bonus: 30000000,
  six: 2000000000,
};

export const winningAmount = Object.values(winningAmountByRank);
