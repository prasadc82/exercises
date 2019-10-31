module.exports = function flatten(array, result=[]) {
  array.forEach(element => {
    if (Array.isArray(element)) {
      flatten(element, result);
    }
    else {
      result.push(element);
    }
  });
  return result;
}
