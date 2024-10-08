export default function cleanSet(set, startString) {
  if (!startString || !startString.length || typeof startString !== 'string') {
    return '';
  }
  let result = '';
  for (const str of set) {
    if (str && str.startsWith(startString)) {
      result += `${str.slice(startString.length)}-`;
    }
  }
  return result.slice(0, result.length - 1);
}
