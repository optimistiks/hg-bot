var Client = require('hangupsjs');
var Q = require('q');

// callback to get promise for creds using stdin. this in turn
// means the user must fire up their browser and get the
// requested token.
var creds = function() {
  return {
    auth: Client.authStdin
  };
};

var client = new Client();

// set more verbose logging
//client.loglevel('debug');

// receive chat message events
client.on('chat_message', function(ev) {

  var segments = ev.chat_message.message_content.segment;

  if (segments && segments.length  &&
      ev.self_event_state.user_id.gaia_id != ev.sender_id.gaia_id) {

    var answer = createAnswer(segments);
    var bld = new Client.MessageBuilder();

    client.sendchatmessage(ev.conversation_id.id, bld.text(answer).toSegments());

  }

  return console.log('chat_message', ev);
});

// connect and post a message.
// the id is a conversation id.
client.connect(creds).then(function() {
  console.log('connected');
}).done();

var coin = function() {
  var rand = Math.random();
  return rand >= 0.5;
};

var endsWith = function(string, suffix) {
  return string.indexOf(suffix, string.length - suffix.length) !== -1;
};

var startsWithBot = function(segments) {
  var segment = segments[0];
  return segment && segment.type === 'TEXT' && segment.text.indexOf('бот') === 0;
};

var createAnswer = function(segments) {

  var response = null;
  var segment = segments[0];
  var normalized = segment.text.trim().toLowerCase();

  var dagRegexp = /хочу.*обратиться.*к.*дагестанцам.*пацанам/;

  if (startsWithBot(segments) && normalized.indexOf('что ты думаешь о') !== -1 && !endsWith(normalized, 'что ты думаешь о')) {
    if (coin()) {
      response = 'норм'
    } else {
      response = 'хуерга какая то, херобора'
    }
  } else if (dagRegexp.test(normalized)) {
    response = 'я сам из дагестана, алейкум ас-салам'
  }

  if (startsWithBot(segments) && response === null) {
    response = 'ты опять выходишь на связь?';
  }

  return response;
};
