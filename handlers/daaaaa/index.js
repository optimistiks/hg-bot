var utils = require('../../utils');

module.exports = {

    match: function (segments) {

        var text = utils.getTextFromSegments(segments);
        var regexp = /^даа+/;
        var rand = Math.random();
        return regexp.test(text) && rand <= 0.5;

    },

    getAnswer: function (segments) {

        var aaa = '';
        var rand = Math.floor(Math.random() * 10) + 1;

        for (var i = 0; i !== rand; ++i) {
            aaa += 'а';
        }

        var items = [
            'жизнь то она тяжелая...',
            'лето то дымное было...',
            'прошлого то уже и не вернуть...',
            'обосрались мы тогда конечно....',
            'Сереега, жизнь то она мимо проходит...',
            'художников то нынче не ценят',
            'умные парни то теперь никому не нужны',
            'всем тревилинг теперь подавай',
            'Макс то в Португалии теперь почти',
            'Вася то там спит на диване и сотку получает',
            'ракеты то падают, Толь, а ты все сиську очка мнешь',
            'жить то страшно стало...',
            'играть то не во что',
            'Глебу то уже диссер защищать, а словно только вчера люстру разбили',
            'победа то она здесь....понимаешь?',
            'Вася то затащил вчера каточку',
            'я то уже доебал всех, а как всё начиналось....',
            'бурдааааа',
            'мы не живём, Серёга ...мы выживаем... ',
            'трава то раньше зеленее была.... ',
            'перспектив то никаких...'
        ];
        var item = items[Math.floor(Math.random() * items.length)];
        return 'да' + aaa + ', ' + item;
    }
};
