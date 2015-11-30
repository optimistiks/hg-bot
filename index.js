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

  if (ev.chat_message.message_content.segment  &&
      ev.self_event_state.user_id.gaia_id != ev.sender_id.gaia_id) {

    var answer = createAnswer(ev.chat_message.message_content.segment);

    if (answer) {

      var bld = new Client.MessageBuilder();
      var segments = bld.text(answer).toSegments();

      client.sendchatmessage(ev.conversation_id.id, segments);
    }



  }

  return console.log('chat_message', ev);
});

// connect and post a message.
// the id is a conversation id.
client.connect(creds).then(function() {
  console.log('connected');
}).done();

var createAnswer = function(segments) {

  var response = null;
  var segment = segments[0];

  if (segment && segment.type === 'TEXT' && segment.text.indexOf('bot') === 0) {
    response = 'Ты опять выходишь на связь?';
  }

  return response;
};
