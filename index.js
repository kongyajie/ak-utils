// 尽量使用UMD，出于兼容性+包大小考虑

(function (name, definition) {
    var hasDefine = typeof define === 'function',
      hasExports = typeof module !== 'undefined' && module.exports;
    if (hasDefine) {
      define(definition);
    } else if (hasExports) {
      module.exports = definition();
    } else {
      this[name] = definition();
    }
  })('ak-utils', function (obj) {
    return JSON.parse(JSON.stringify(obj));
  });