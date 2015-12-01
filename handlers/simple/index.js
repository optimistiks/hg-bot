var utils = require('../../utils');
var rules = require('./rules');

module.exports = {

  possibleAnswers: [],

  match: function (segments) {

    var text = utils.getTextFromSegments(segments);

    var found = false;

    Object.keys(rules).forEach(function (regexpString) {

      var regexp = new RegExp(regexpString);

      if (regexp.test(text)) {
        found = true;
        this.possibleAnswers = rules[regexpString];
      }

    }.bind(this));

    return found;

  },

  getAnswer: function (segments) {

    return this.possibleAnswers[Math.floor(Math.random() * this.possibleAnswers.length)]

  }
};
