var utils = require('../../utils');

module.exports = {

  match: function (segments) {

    var text = utils.getTextFromSegments(segments);
    var regexp = /^даа+/;

    return regexp.test(text);

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
      'бурдааааа',
      'мы не живём, Серёга ...мы выживаем... ',
      'трава то раньше зеленее была.... ',
      'перспектив то никаких...'
    ];
    var item = items[Math.floor(Math.random() * items.length)];
    return 'да' + aaa + ', ' + item;
  }
};
