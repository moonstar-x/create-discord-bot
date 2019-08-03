module.exports = {
  name: 'ping',
  description: 'A simple ping command!',
  execute(message, option) {
    message.reply('Pong!');
  }
};
