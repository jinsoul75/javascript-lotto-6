import { winningAmount } from '../constants/constants.js';
import formatAmount from '../utils/formatAmount.js';

class Profit {
  constructor(amount, lottoResult) {
    this.amount = amount;
    this.lottoResult = lottoResult;
    this.profit = this.#getProfit(lottoResult);
  }

  #getProfit(lottoResult) {
    const profit = lottoResult.reduce(
      (totalProfit, result, index) =>
        totalProfit + result * winningAmount[index],
      0,
    );

    return profit;
  }

  getProfitRate() {
    const profitRate = (this.profit / this.amount) * 100;

    return formatAmount(profitRate.toFixed(1));
  }
}

export default Profit;
