export default function appendToEachArrayValue(array, appendString) {
  const arrCpy = [];
  for (const value of array) {
    arrCpy.push(appendString + value);
  }

  return arrCpy;
}
