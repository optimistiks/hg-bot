var utils = require('../../utils');

module.exports = {

  guessSuffix: 'загадай число',
  answerSuffix: 'ты загадал',

  number: null,

  match: function (segments) {

    var text = utils.getTextFromSegments(segments);

    return utils.appealToBot(text) &&
           (text.indexOf(this.guessSuffix) !== -1 || (text.indexOf(this.answerSuffix) !== -1 && this.number !== null ));

  },

  getAnswer: function (segments) {

    var answer = '';
    var text = utils.getTextFromSegments(segments);

    if (text.indexOf(this.guessSuffix) !== -1) {

      this.number = Math.floor(Math.random() * (10 - 1 + 1) + 1);
      answer = 'загадал (от 1 до 10)'

    } else if (text.indexOf(this.answerSuffix) !== -1) {

      var number = parseInt(text.replace(/\D/g, ''));

      if (number === this.number) {
        answer = 'красава';
      } else {
        answer = 'не угадал (я загадал ' + this.number + ')'
      }

      this.number = null;

    }

    return answer;

  }
};