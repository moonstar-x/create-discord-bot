const { prefix } = require('../../../config/settings.json');
const { updatePresence, executeCommand } = require('../../common/utils');

const handleDebug = (info) => {
  console.log(info);
};

const handleError = (error) => {
  console.error(error);
};

const handleGuildCreate = (guild) => {
  console.log(`Joined ${guild.name} guild!`);
};

const handleGuildDelete = (guild) => {
  console.log(`Left ${guild.name} guild!`);
};

const handleGuildMemberAdd = (member) => {
  console.log(`${member.displayName} joined ${member.guild.name}!`);
};

const handleGuildMemberRemove = (member) => {
  console.log(`${member.displayName} left ${member.guild.name}!`);
};

const handleGuildUnavailable = (guild) => {
  console.log(`Guild ${guild.name} is currently unavailable!`);
};

const handleInvalidated = () => {
  console.error('Client connection invalidated, terminating execution with code 1.');
  process.exit(1);
};

const handleMessage = (message, client) => {
  if (!message.content.startsWith(prefix) || message.author.bot) {
    return;
  }

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  const options = {
    args,
    commands: client.commands
  };

  executeCommand(client, message, options, command);
};

const handleReady = (client) => {
  console.log('Connected to Discord! - Ready.');
  updatePresence(client);
};

const handleWarn = (info) => {
  console.warn(info);
};

module.exports = {
  handleDebug,
  handleError,
  handleGuildCreate,
  handleGuildDelete,
  handleGuildMemberAdd,
  handleGuildMemberRemove,
  handleGuildUnavailable,
  handleInvalidated,
  handleMessage,
  handleReady,
  handleWarn
};
