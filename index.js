var Client = require('hangupsjs');
var Q = require('q');
var handlers = require('./handlers');
var util = require('util');

// callback to get promise for creds using stdin. this in turn
// means the user must fire up their browser and get the
// requested token.
var creds = function () {
    return {
        auth: Client.authStdin
    };
};

var client = new Client();

var namesCache = {};

var getSenderName = function (senderId) {

    var name = namesCache[senderId] || client.getentitybyid([senderId]).then(function (response) {
            namesCache[senderId] = response.entities[0].properties.display_name;
            return namesCache[senderId];
        });

    return Q.when(name);
};

// set more verbose logging
//client.loglevel('debug');

// receive chat message events
client.on('chat_message', function (ev) {

    var segments = ev.chat_message.message_content.segment;
    var senderId = ev.sender_id.gaia_id;

    if (segments && segments.length &&
        ev.self_event_state.user_id.gaia_id != senderId) {

        var handler = handlers.find(function (handler) {
            return handler.match(segments, ev.conversation_id.id);
        });

        if (handler) {


            getSenderName(senderId).then(function (senderName) {

                var delay = 100;

                var sendMessage = function (message) {

                    var bld = new Client.MessageBuilder();
                    var answer = bld.text(message).toSegments();

                    setTimeout(function () {
                        client.sendchatmessage(ev.conversation_id.id, answer);
                    }, delay);

                    delay += 100;
                };

                var sender = {
                    id: senderId,
                    name: senderName
                };

                handler.handle(segments, sendMessage, ev.conversation_id.id, sender);
            });

        }

    }

    //console.log('chat_message', util.inspect(ev, false, null));
});

// connect and post a message.
// the id is a conversation id.
client.connect(creds).then(function () {
    console.log('connected');
}).done();
