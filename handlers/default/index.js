var utils = require('../../utils');

module.exports = {

  match: function(segments) {

    var text = utils.getTextFromSegments(segments);
    return utils.appealToBot(text);

  },


  getAnswer: function(segments) {


    var items = ['ты опять выходишь на связь?', 'чего тебе?,'ммм??', 'о чем ты спросишь свою смерть?', 'ничего не понял' , 'аэаэаэ бот бот аэаэа', 'ой, да надоели уже', 'хули?', 'ЗАЧЕЕЕМ МЕНЯ ПРИЗВААЛИИ?'];
  var item = items[Math.floor(Math.random()*items.length)]; 
  return item;


  }
};
