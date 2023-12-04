import { Random } from '@woowacourse/mission-utils';
import { NUMBERS } from '../constants/constants.js';

class LottoMachine {
  static getLottoWinningNumbers(quantity) {
    const lottoWinningNumbers = [];

    let count = 0;

    while (count < quantity) {
      const lottoWinningNumber = Random.pickUniqueNumbersInRange(
        NUMBERS.minNumber,
        NUMBERS.maxNumber,
        NUMBERS.lottoLength,
      );

      const sortedLottoWinningNumbers = lottoWinningNumber.sort(
        (number1, number2) => number1 - number2,
      );

      lottoWinningNumbers.push(sortedLottoWinningNumbers);

      count += 1;
    }

    return lottoWinningNumbers;
  }
}

export default LottoMachine;
