export default function cleanSet(set, startString) {
  let result = '';
  if (!startString || !startString.length || typeof startString !== 'string') {
    return result;
  }
  for (const str of set) {
    if (str.startsWith(startString)) {
      result += `${str.slice(startString.length)}-`;
    }
  }
  return result.slice(0, result.length - 1);
}
