var GAMES = [
    {
       "gameTitle":"Super Mario Land",
       "gameThumbImg":"sml150.png",
       "gameFullImg":"sml.png",
       "gameBriefDesc":"Super Mario Land was the first game I ever owned.",
       "gameFullDesc":"Super Mario Land is a 1989 platform video game, and it was developed and published by Nintendo as a launch game for its Game Boy handheld game console.",
       "gameRating":"E",
       "gameRelease":"1989",
       "gameGenre":"Platform",
       "gameValue":"$15.00",
       "gamePublisher":"Nintendo",
       "gameMultiplayer":"No"
    },
    {
       "gameTitle":"Pokemon Stadium",
       "gameThumbImg":"ps150.png",
       "gameFullImg":"ps.png",
       "gameBriefDesc":"This was the first game I ever played on the Nintendo 64.",
       "gameFullDesc":"Pokémon Stadium is a strategy video game developed and published by Nintendo for the Nintendo 64.",
       "gameRating":"E",
      "gameRelease":"1999",
      "gameGenre":"Strategy",
      "gameValue":"$20.00",
      "gamePublisher":"Nintendo",
      "gameMultiplayer":"Yes"
      },
    {
       "gameTitle":"Super Smash Bros. Melee",
       "gameThumbImg":"ssbm150.png",
       "gameFullImg":"ssbm.png",
       "gameBriefDesc":"The follow-up to the original Super Smash Bros. for the Nintendo 64.",
       "gameFullDesc":"It is the second installment in the Super Smash Bros. series. It features characters from Nintendo video game franchises such as Mario, The Legend of Zelda, Star Fox and Pokémon, and Donkey Kong among others. The stages and gameplay modes reference or take designs from these franchises as well.",
       "gameRating":"T",
       "gameRelease":"2001",
       "gameGenre":"Fighting",
       "gameValue":"$40.00",
       "gamePublisher":"Nintendo",
       "gameMultiplayer":"Yes"
      },
    {
       "gameTitle":"WGT Golf",
       "gameThumbImg":"wgt150.png",
       "gameFullImg":"wgt.png",
       "gameBriefDesc":"Bring the golf course to your home with WGT Golf.",
       "gameFullDesc":"WGT Golf is the most realistic free online golf game, loved by more than 15 million players across the globe. It's the #1 top rated 3D online game, as seen on NBC Sports, Golf Channel, DirecTV, & Fox Sports.",
       "gameRating":"NR",
       "gameRelease":"2018",
      "gameGenre":"Sports",
      "gameValue":"$0.00",
      "gamePublisher":"WGT",
      "gameMultiplayer":"Yes"
      },
 ];

function loadData(){
    $.each(GAMES, function (index, game){
     $("#app").append(`<div id="${index}" class="game-holder">
     <h4>${game.gameTitle}</h4>
     <h5>Value: ${game.gameValue}</h5>
     <div class="gameImage">
         <img src="images/${game.gameThumbImg}" 
         alt="${game.gameTitle}">
     </div>
     <div class="brief-rating">
         <div class="brief-des">
               ${game.gameBriefDesc}
         </div>
         <div class="genre">Genre: ${game.gameGenre}</div>
         <div class="multiplayer">Multiplayer?: ${game.gameMultiplayer}</div>
         <div class="release">Release: ${game.gameRelease}</div>
         <div class="publisher">Publisher: ${game.gamePublisher}</div>
         <div class="fullDesc">Full Description: ${game.gameFullDesc}</div>
         <div class="rating">Rating: ${game.gameRating}</div>
     </div>
 </div>`)
    });
   }
// for (let i = 0; i < GAMES.length; i++) {
//       console.log(GAMES [i].gameTitle);

//    }


// function initListeners(){}

$(document).ready(function() {
    // initListeners();
    loadData();
});