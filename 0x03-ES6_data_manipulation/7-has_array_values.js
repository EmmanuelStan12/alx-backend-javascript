export default function hasValuesFromArray(set, array) {
  for (const el of array) {
    if (!set.has(el)) {
      return false;
    }
  }
  return true;
}
