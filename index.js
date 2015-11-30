var Client = require('hangupsjs');
var Q = require('q');
var handlers = require('./handlers');

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

    var handler = handlers.find(function(handler) {
      return handler.match(segments);
    });

    console.log('found handler', handler);

    if (handler) {
      var bld = new Client.MessageBuilder();
      var answer = bld.text(handler.getAnswer(segments)).toSegments();
      client.sendchatmessage(ev.conversation_id.id, answer);
    }

  }

  return console.log('chat_message', ev);
});

// connect and post a message.
// the id is a conversation id.
client.connect(creds).then(function() {
  console.log('connected');
}).done();
