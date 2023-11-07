import { printErrorMessage } from '../utils/printMessage.js';
import MESSAGES from '../constants/messages.js';
import NUMBERS from '../constants/numbers.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  static validate(numbers) {
    if (numbers.length !== NUMBERS.lottoNumberLength) {
      printErrorMessage(MESSAGES.invalidLength);
    }

    const lottoNumberRange = number =>
      number >= NUMBERS.minLottoNumber && number <= NUMBERS.maxLottoNumber;

    if (!numbers.every(lottoNumberRange)) {
      printErrorMessage(MESSAGES.invalidRange);
    }

    const deleteDuplication = new Set(numbers);

    if (numbers.length !== deleteDuplication.size) {
      printErrorMessage(MESSAGES.duplicatedNumber);
    }
  }
}

export default Lotto;
