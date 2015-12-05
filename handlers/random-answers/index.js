var utils = require('../../utils');

module.exports = {

    match: function (segments) {
        var text = utils.getTextFromSegments(segments);
        var regexp = /^.+\?$/;
        var rand = Math.random();
        return regexp.test(text) && rand < 0.05;
    },

    handle: function (segments, sendMessage) {

        var items = [
            'чииивооо?',
            'чёт хз',
            'ты серьёзно??',
            'я пас',
            'ага',
            'ммм, так так, ещё че нить спроси',
            'лучше б поинтересовался творчеством Толстого',
            'неееее',
            'эммм, ок'
        ];
        sendMessage(items[Math.floor(Math.random() * items.length)]);

    }
};
