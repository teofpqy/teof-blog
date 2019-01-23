/**
 *
 * @param {Array} entries
 * @returns {Object}
 */
export function fromEntries(entries) {
  return entries.reduce((obj, [k, v]) => ({...obj, ...{[k]: v }}), {});
}

