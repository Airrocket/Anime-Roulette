'use strict';
const fs = require('fs')

const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

function type(string, speed) {
  //console.log("\n" + string + "\n");
  var charArray = string.split("");
  //console.log(charArray);
  var arrayLength = charArray.length;
  //console.log(arrayLength);
  for(var i = 0; i < arrayLength; i++) {
    process.stdout.write(charArray[i]);
    sleep(speed);
  };
};

let rawdata = fs.readFileSync('list.json')
let animeArray = JSON.parse(rawdata)
var animeLength = animeArray.length

sleep(500);

console.log("\n\n=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
type("\nWelcome to Anime Roulette!", 50);
type("\nThis will read from the file, list.json, \npick a random anime, \nand pick how many episodes to watch", 50);
type("\nEnjoy! (or don't. You could get something awful for all I know.)", 50);
console.log("\n\n=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

sleep(500);
type("\n\n Press the space bar to continue, q to quit, i for info, or l for a list of pickable animes\n", 50);

process.stdin.on('keypress', (str, key) => {
  if (key.name === 'space') {

    type("\n\nYou have chosen to continue,\nBy the law of stupid games I make, you may not back down.", 50);
    sleep(1000);
    type("\n\nOne of the following will be picked for you to watch:\n\n", 50);
    sleep(1000);

    for (var i = 0; i < animeLength; i++) {

      type(animeArray[i] + "," + "\n", 10)

    }

    sleep(1000);
    type("\nThe picker will now begin shortly...\n", 50);
    sleep(1000);

    for (var i = 0; i < 20; i++) {

      var ranGenAnime = Math.floor(Math.random() * (animeLength - 0)) + 0;
      console.log(animeArray[ranGenAnime]);
      sleep(i * 20)

    };

    var ranEpNum = Math.floor(Math.random() * (4 - 0)) + 1;
    type("\n\nYou get to watch... ", 50);
    sleep(1000);
    type(ranEpNum + " episodes of " + animeArray[ranGenAnime] + "!", 50);
    sleep(1000);
    type("\n\n This concludes this round of Anime Roulette!\n If you would like to continue, press the space bar, otherwise, press q to quit.", 50);

  } else if (key.name === 'i') {

      type("\n\nYou have chosen to see extra information.", 50);
      sleep(3000);
      type("\n\nThis was made by Airrocket#4593 on Discord,\nand uses the custom type function for text animations.\n" +
      "I might have a video about it on my yt channel (youtube.com/user/TheEpicRocket)", 50);
      sleep(3000);
      type("\n\n Press the space bar to continue, q to quit, i for info, or l for a list of pickable animes\n\n", 50);

  } else if (key.name === 'l') {

      type("\n\nYou have chosen to see the list of pickable amines", 50);
      sleep(1000);
      type("\n\nThey are: \n", 50);
      for (var i =0; i<animeLength; i++) {
        type(animeArray[i] + "," + "\n", 50)
      };
      sleep(1000);
      type("\n\n Press the space bar to continue, q to quit, i for info, or l for a list of pickable animes\n\n", 50);

  } else if (key.name === 'q') {

      type("\n\nYou have chosen to quit, goodbye...", 50);
      sleep(3000);
      process.exit();
  }

});
