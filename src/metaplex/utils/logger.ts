import log from 'loglevel';
import { isObjectLike } from 'lodash';
import { formatDate } from 'metaplex/utils/helpers';

log.setLevel('INFO');
const originalFactory = log.methodFactory;
log.methodFactory = function (methodName, logLevel, loggerName) {
  const rawMethod = originalFactory(methodName, logLevel, loggerName);

  return function () {
    const currentDate = formatDate(new Date()) + '->';
    let messages: Array<any> = [];
    for (let i = 0; i < arguments.length; i++) {
      let original = arguments[i];
      if (isObjectLike(arguments[i])) {
        original = JSON.stringify(arguments[i]);
      }
      if (original === undefined) {
        console.log('logging undefined message');
      }
      messages.push(original);
    }

    rawMethod.apply(undefined, [currentDate, ...messages]);
  };
};
log.setLevel(log.getLevel()); // Be sure to call setLevel method in order to apply plugin
const logger = log;
export default logger;
