import { Console } from '@woowacourse/mission-utils';
import { MESSAGES, RESULT } from '../constants/messages.js';

const OutputView = {
  pritnError(message) {
    Console.print(message);
  },

  printquantity(quantity) {
    Console.print(MESSAGES.printquantity(quantity));
  },

  printLottoWinningNumbers(numbers) {
    Console.print(RESULT.printWinningNumbers(numbers));
  },

  printLottoResult(result) {
    Console.print(RESULT.printLottoResult(...result));
  },
};

export default OutputView;
