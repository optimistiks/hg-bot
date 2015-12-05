var utils = require('../../utils');

var fs = require('fs');
var questions = fs.readFileSync(__dirname + '/questions/questions-test.txt').toString().split("\n");

module.exports = {

    quizzes: {},

    INTERVAL: 20000,

    match: function (segments, chatId) {

        var text = utils.getTextFromSegments(segments);
        return this.shouldStartQuiz(text, chatId) ||
            this.shouldStopQuiz(text, chatId) ||
            this.shouldCheckAnswer(text, chatId);

    },

    handle: function (segments, sendMessage, chatId, sender) {

        var text = utils.getTextFromSegments(segments);

        if (this.shouldStartQuiz(text, chatId)) {
            sendMessage('погнали');
            this.startQuiz(sendMessage, chatId);
        }

        if (this.shouldStopQuiz(text, chatId)) {
            sendMessage('хорош');
            this.stopQuiz(chatId);
        }

        if (this.shouldCheckAnswer(text, chatId)) {
            var quiz = this.getQuizByChatId(chatId);
            if (text === quiz.question.answer) {
                quiz.question = null;
                sendMessage(sender.name + ' красава');
                this.sendQuestion(this.getQuestion(), sendMessage, chatId);
            } else {

            }
        }


    },

    getQuizByChatId: function(chatId) {
        return this.quizzes[chatId] || {};
    },

    shouldStopQuiz: function(text, chatId) {
        var stopRegex = /^стоп$/;
        return this.getQuizByChatId(chatId).question != null && stopRegex.test(text);
    },

    shouldStartQuiz: function(text, chatId) {
        var startRegex = /^бв$/;
        return this.getQuizByChatId(chatId).question == null && startRegex.test(text);
    },

    shouldCheckAnswer: function(text, chatId) {
        return this.getQuizByChatId(chatId).question != null &&
            !this.shouldStartQuiz(text) &&
            !this.shouldStopQuiz(text);
    },

    stopQuiz: function(chatId) {
        var quiz = this.getQuizByChatId(chatId);
        quiz.question = null;
        clearTimeout(quiz.timeout);
        this.quizzes[chatId] = null;
    },

    startQuiz: function(sendMessage, chatId) {
        this.quizzes[chatId] = {};
        this.sendQuestion(this.getQuestion(), sendMessage, chatId)
    },

    sendQuestion: function(question, sendMessage, chatId) {

        var quiz = this.getQuizByChatId(chatId);

        quiz.question = question;

        sendMessage(question.question);

        clearTimeout(quiz.timeout);

        quiz.timeout = setTimeout(function() {
            this.sendQuestion(this.getQuestion(), sendMessage, chatId)
        }.bind(this), this.INTERVAL);

    },

    getQuestion: function () {
        var randomString = questions[Math.floor(Math.random() * (questions.length - 1))];
        var split = randomString.split('*');
        return { question: split[0], answer: split[1].trim().toLowerCase() }
    }
};
