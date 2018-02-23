/**
 * Created by Daniel Gwerzman on 6/6/17.
 */

// [START app]
'use strict';
const http = require('http');

process.env.DEBUG = 'actions-on-google:*';
const ApiAiAssistant = require('actions-on-google').ApiAiAssistant;

// The context and actions as we declare them in api.ai
const WELCOME_ACTION = 'input.welcome';
const DEFAULT_FALLBACK_ACTION = 'input.unknown';
const UNKNOWN_DEEPLINK_ACTION = 'deeplink.unknown';

let new_line = '';

exports.parrot = function (request, response) {
    // Print the request to the log
    console.log('headers: ' + JSON.stringify(request.headers));
    console.log('body: ' + JSON.stringify(request.body));

    const assistant = new ApiAiAssistant({request: request, response: response});

    function welcomeAction (assistant) {
        console.log('welcomeAction');
        assistant.ask("Hi, I\'m your parrot. Say something and I will repeat it.");
    }

    function defaultFallback (assistant) {
        var rawInput = assistant.getRawInput();
        console.log('defaultFallback: ' + rawInput);
        assistant.ask(rawInput);
    }

    // Map all the actions that create on api.ai to the function in this file
    let actionsMap = new Map();
    actionsMap.set(WELCOME_ACTION, welcomeAction);
    actionsMap.set(DEFAULT_FALLBACK_ACTION, defaultFallback);
    actionsMap.set(UNKNOWN_DEEPLINK_ACTION, defaultFallback);

    assistant.handleRequest(actionsMap);
};
