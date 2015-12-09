var utils = require('../../utils');

module.exports = {

    match: function (segments) {
        var text = utils.getTextFromSegments(segments);
        var regexp = /^.+\?$/;
        var rand = Math.random();
        return regexp.test(text) && rand < 0.05;
    },

    getAnswer: function (segments) {

        var items = [
            'чииивооо?',
            'чёт хз',
            'ты серьёзно??',
            'еще не всё потеряно. еще не всё.',
            'это была ошибка',
            'а ты?',
            'я пас',
            'ага',
            'ммм, так так, ещё че нить спроси',
            'лучше б поинтересовался творчеством Толстого',
            'неееее',
            'эммм, ок'
        ];
        return items[Math.floor(Math.random() * items.length)];

    }
};
