var utils = require('../../utils');

module.exports = {

    match: function (segments) {

        var suffix = 'кинь монетку';
        var text = utils.getTextFromSegments(segments);

        return utils.appealToBot(text) &&
            text.indexOf(suffix) !== -1;

    },

    handle: function (segments, sendMessage) {

        sendMessage(utils.throwCoin() ? 'орёл' : 'решка');

    }
};
