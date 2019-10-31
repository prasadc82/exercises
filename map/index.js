module.exports = function (array, callback, thisArg) {
  const result = [];
  array.forEach((element, index) => {
    result.push(callback.call(thisArg, element, index, array));
  });
  return result;
}
