module.exports = {

  getTextFromSegments: function (segments) {

    segments = segments || [];

    var text = null;

    if (segments.length) {
      text = segments[0].text.trim().toLowerCase();
    }

    return text;

  },

  appealToBot: function (text) {
    return text.startsWith('бот');
  },

  endsWith: function (string, suffix) {
    return string.indexOf(suffix, string.length - suffix.length) !== -1;
  },

  throwCoin: function () {
    var rand = Math.random();
    return rand >= 0.5;
  }

};