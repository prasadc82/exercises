module.exports = function once(fn, thisArg) {
  let result
  return function () {
    if (fn) {
      result = fn.apply(thisArg || this, arguments);
      fn = null;
    }
    return result;
  };
}
