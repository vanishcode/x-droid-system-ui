export function createRange(length: number, initializer: Function) {
  return [...new Array(length)].map((_, index) => {
    return initializer(index);
  });
}
