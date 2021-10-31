/**
 * Express the intention to be given to an element. Typically to a button or a message.
 *
 * @typedef {'normal'|'primary'|'success'|'danger'} Intent
 */

export const Intents = {
  NORMAL: 'normal',
  PRIMARY: 'primary',
  SUCCESS: 'success',
  DANGER: 'danger',
};

/**
 * resolve the given intent into a valid intent. If undefined or invalid, fallbacks to 'normal'.
 *
 * @param {string} intent
 * @return {Intent}
 */
export const resolveIntent = (intent) => {
  return Object.values(Intents).indexOf(intent) === -1 ? 'normal' : intent;
};
