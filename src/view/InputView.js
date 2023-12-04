import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants/messages.js';

const InputView = {
  async readAmount() {
    const amount = await Console.readLineAsync(MESSAGES.inputAmount);
    return amount;
  },

  async readLottoNumber() {
    const userLottoNumber = await Console.readLineAsync(
      MESSAGES.askLottoNumber,
    );
    return userLottoNumber;
  },

  async readBonusNumber() {
    const userBonusNumber = await Console.readLineAsync(
      MESSAGES.askBonusNumber,
    );
    return userBonusNumber;
  },
};

export default InputView;
