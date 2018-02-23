# The-Parrot
The Parrot is an echo Action on Google, that will repeat any thing you say to it.

## Setup Instructions

### Pre-requisites
 1. Actions on Google account: [https://console.actions.google.com](https://console.actions.google.com)
 1. Dialogflow account: [https://dialogflow.com](https://dialogflow.com)
 
See the developer guide and release notes at [https://developers.google.com/actions/](https://developers.google.com/actions/) for more details.

### Steps
1. Create a new agent in Dialogflow [https://dialogflow.com](https://dialogflow.com). 
2. Take the parrot_dialogflow.zip and import it to Dialogflow.
3. Set the "Fulfillment" webhook to Inline Editor and load the file from the repo.
4. In any relevant intents, enable the Fulfillment for the response.
5. Enable Actions on Google in the Integrations.
6. Provide an invocation name for the action.
