# Create-Discord-Bot

A simple scaffold to create Discord bots with Discord.js for Node.js.

## Usage

Currently this only includes the folder structure for the bot. To use this structure:

1. Download this repo as a ZIP and extract it to your bot's directory (do not include the `.git` file).
2. Initialize your git repo in your bot's directory (`git init`) and add your remote `git remote add origin <git url>`.
3. Edit the `package.json` file to suit your needs.
4. Install the dependencies `npm install`.
5. Rename `./config/settings.json.example` to `./config/settings.json` and edit it to your needs.

## Structure

The bot's entry point is `./src/app.js`, this is where the bot starts and only includes the client initialization, the commands loading and event handlers.

The client events are located in `./src/events/appEvents.js`, this file includes the most used events, you can add more here if you need. The handlers are located in `./src/events/handlers/app.js`, in this file there's only the callback handlers.

Inside `./src/common/` you'll find a `constants.js` file that contains a list of useful data for your bot: available permissions, presence statuses, activity types, channel types and more. There's also `utils.js` that has some functions to help you change your bot's presence and to execute the commands. Currently the `updatePresence()` function sets the presence to the number of servers your bot is currently in.

To add new commands to your bot, duplicate the file `template.js.example` inside `./src/commands` and rename it to `<the name of your command>.js`. Inside of this file you should change the `name` and `description` properties to whatever you want, you can also include more properties for your commands. The command code should go inside the `execute()` method. Commands are loaded from this directory, which means that if you create a new command and restart your bot, the command will be recognized directly.

## Dependencies

If your bot requires to join voice channels, you will need to install the following dependency:

    npm install node-opus

> If you're on Windows and this command fails, you may need to install the following package [windows-build-tools](https://www.npmjs.com/package/windows-build-tools). Visit the link for further instructions.

This bot includes a few dev dependencies to help you with your developing process:

* **ESLint** for code linting.
* **Jest** for code testing `*.spec.js` files.
* **Sinon** for testing events.
* **Nodemon** to restart a node script every time you save a file.
* **Husky** to run scripts on `git` hooks.

### ESLint

**ESLint** comes with the `standard` rules. You can edit these rules from the `.eslintrc.js` file.

### Husky Hooks

Currently, there are `pre-commit` and `pre-push` hooks that check the linting of all the files. If a file has an error, **Husky** won't let the changes be committed or pushed. You can disable this from `package.json`.

## Scripts

To run all the tests in your project:

    npm test

If you want to run certain tests based on filename, just add the name of the filename:

    npm test TestThis

To run the bot with an auto-restart on file save:

    npm run dev

To start the bot with debug messages:

    npm run debug

To start the bot normally:

    npm start

## To Do

* Transform this project into an actual CLI.
  
## Author

This tool was made by [moonstar-x](https://github.com/moonstar-x).
