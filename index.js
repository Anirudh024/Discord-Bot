require("dotenv").config()
const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client()

fs.readdir("./events/", (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`)
    const eventName = file.split(".")[0]
    client.on(eventName, (...args) => eventHandler(client, ...args))
  })
})

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!")
  }
})

// do something when the bot receives a message
client.on('message', function (message) {
  // if the message is not '!jam' then we do nothing
  if (message.content == '!jam')
{  
  // list of themes to pick from
  var themes = [
    'Indirect Interaction',
    'Light and Darkness',
    'Growth',
    'Enemies as Weapons',
    'It’s dangerous to go alone! Take this!',
    'Escape',
    '10 Seconds',
    'Connected Worlds',
    'Chain Reaction',
    'Anime',
    'Enjoyment',
    'You are the Villain'
  ];
  // pick a random theme
  var index = Math.floor(Math.random() * themes.length);
  var theme = themes[index];
  
  // announce the theme
  message.channel.send('The theme is: `' + theme + '`');
}
  else if(message.content =='!joke')
{
  // list of themes to pick from
  var jokes = [
    'Yo momma is so fat when she got on the scale it said, I need your weight not your phone number.',
    'Yo momma is so fat, I took a picture of her last Christmas and its still printing.',
    'Yo momma is so fat that when she went to the beach a whale swam up and sang, We are family, even though you are fatter than me.',
    'Yo mamma is so ugly when she tried to join an ugly contest they said, Sorry, no professionals.',
    'Yo momma is so fat and old when God said, Let there be light, he asked your mother to move out of the way.',
    'Yo momma is so fat, that when she fell, no one was laughing but the ground was cracking up.',
    'Yo momma is so fat when she sat on WalMart, she lowered the prices.',
    'Yo momma is so stupid when an intruder broke into her house, she ran downstairs, dialed 9-1-1 on the microwave, and could not find the CALL button.',
    'Yo momma is so fat that Dora ca not even explore her!',
    'Your momma is so ugly she made One Direction go another direction.',
    'Yo momma is so fat her bellybutton gets home 15 minutes before she does.',
    'Yo momma is so stupid, she put two quarters in her ears and thought she was listening to 50 Cent.',
    'I entered ten puns in a pun contest hoping one would win...I But no pun in ten did!',
    'What is the difference between a well dressed man on a bike and a poorly dressed man on a unicycle?......Attire!',
    'Why do cows wear bells?.....Because their horns do not work!',
    'I broke my finger last week......On the other hand, I am okay!',
    'What did one eye say to the other?....Between you and me, something smells!',
    'Why did Adele cross the road?....To say hello to the other sideeeeee!'
  ];
  
  // pick a random theme
  var index1 = Math.floor(Math.random() * jokes.length);
  var joke = jokes[index1];
  
  // announce the theme
  message.channel.send(joke);
}
  else
{
    return;
}
});



//PRACTICE BOT
client.login(process.env.BOT_TOKEN)
module.exports = client