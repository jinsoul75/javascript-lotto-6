import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/messages.js';

class OutputView {
  static printErrorMessage(error) {
    Console.print(error.message);
  }

  static printPurchaseHeader(perchaseQuentity) {
    Console.print(`${perchaseQuentity}${MESSAGES.purchaseQuantity}`);
  }

  static printWinningNumber(winningNumber) {
    Console.print(`[${winningNumber.join(', ')}]`);
  }

  static printLottoResultHeader() {
    Console.print(MESSAGES.winningResult);
    Console.print(MESSAGES.divisionLine);
  }

  static printLottoResult(message, result) {
    Console.print(`${message}${result}개`);
  }

  static printProfitRate(profitRate) {
    Console.print(MESSAGES.profitRate(profitRate));
  }
}

export default OutputView;
