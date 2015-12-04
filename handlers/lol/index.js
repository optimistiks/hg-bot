var utils = require('../../utils');

module.exports = {

    match: function (segments) {
        var text = utils.getTextFromSegments(segments);
        var regexp = /^лол/;
        var rand = Math.random();
        return regexp.test(text) && rand < 0.05;
    },

    getAnswer: function (segments) {

        var items = [
            'ахахах',
            'лал',
            'ахах, чет с подливой проорал',
            ')))))))',
            'ааааааа лоооол',
            'в голосину прост',
            'пушка',
            'скааа, чет ору',
            'лол??'
        ];
        return items[Math.floor(Math.random() * items.length)];

    }
};
