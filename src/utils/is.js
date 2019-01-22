
function string(s) {
  return typeof s === 'string' || s instanceof String;
}


function json(item) {
  const itemStr = typeof item === 'string' ? item : JSON.parse(item);
  let result;
  try {
    result = JSON.parse(itemStr);
  } catch (error) {
    return false;
  }
  if (typeof result === 'object' && result !== null) return true;
  return false;
}

export default {
  string,
  json,
};
