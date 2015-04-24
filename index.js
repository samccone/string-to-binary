module.exports = function(str) {
  var pad = "00000000";

  return unescape(encodeURIComponent(str))
  .split('').map(function(str) {
    var binary = str.charCodeAt(0).toString(2);

    return pad.slice(binary.length)+binary;
  }).join('');
};
