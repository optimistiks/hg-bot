var utils = require('../../utils');

module.exports = {

  match: function(segments) {

    var text = utils.getTextFromSegments(segments);
    var regexp = /подписчики/;


    return regexp.test(text);

  },


  getAnswer: function(segments) {

  var items = ['паааадаконник на хуй', 'патснечники ПАТСНЕЧНИКИ','подкишкиевски', 'подкишки', 'подкиевски подкиевски' , 'пааа папа ПАДНИЧНИКИ патсвечники', 'па пааа падаконник нахуй мне похуй уже', 'подснишки', 'дааа а не могу я уже, зачем ты это слово сказал'];
  var item = items[Math.floor(Math.random()*items.length)]; 
  return item;

  }
};
