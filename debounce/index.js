// https://davidwalsh.name/javascript-debounce-function
module.exports = function debounce(fn, wait) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = () => {
      timeout = null;
      fn.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}


// module.exports = function debounce(func, wait, immediate=false) {
// 	var timeout;
// 	return function() {
// 		var context = this, args = arguments;
// 		var later = function() {
// 			timeout = null;
// 			if (!immediate) func.apply(context, args);
// 		};
// 		var callNow = immediate && !timeout;
// 		clearTimeout(timeout);
// 		timeout = setTimeout(later, wait);
// 		if (callNow) func.apply(context, args);
// 	};
// };
