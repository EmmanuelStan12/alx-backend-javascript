export const weakMap = new WeakMap();

export function queryAPI(arg) {
  let count = weakMap.get(arg) || 0;
  count += 1;

  weakMap.set(arg, count);
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
