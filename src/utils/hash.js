import is from './is';
/**
 *
 * @param {string} str
 * @returns {string}
 */
function hashCode(str) {
  if (! is.string(str)) throw new Error('str must be a string');
  return str.split('').reduce((prevHash, currVal) =>
      (((prevHash << 5) - prevHash) + currVal.charAt(0)| 0), 0);
}

export default {
  hashCode,
};
