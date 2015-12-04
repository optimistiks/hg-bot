var utils = require('../../utils');

module.exports = {

    match: function (segments) {

        var suffix = 'что ты думаешь о';
        var text = utils.getTextFromSegments(segments);

        return utils.appealToBot(text) &&
            text.indexOf(suffix) !== -1 && !utils.endsWith(text, suffix);

    },

    getAnswer: function (segments) {

        return utils.throwCoin() ? 'норм' : 'хуерга какая то';

    }
};
