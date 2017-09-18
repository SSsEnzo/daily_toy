function songDecoder(song){
  return song.split("WUB").filter(function(word) {
    return word !== '';
  }).join(' ');

  // for(var i = 0; i < outcome.length; i++){
  //   if(outcome[i] === ''){
  //     outcome.splice(i, 1);
  //     i -= 1;
  //   }
  // }
  // outcome = outcome.join(" ");
  // return outcome;
}
console.log(songDecoder("WUBWEWUBWUBWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));
  // =>  WE ARE THE CHAMPIONS MY FRIEND


 //  WUB WE WUB ARE WUB WUB THE WUB CHAMPIONS WUB MY WUB FRIEND WUB
