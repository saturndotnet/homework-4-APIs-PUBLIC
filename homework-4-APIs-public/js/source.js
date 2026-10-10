// *********************************************************************
// Homework 4 Public APIs
// *********************************************************************

function formatYearFromStr(dateString) {
  return dateString.split('-')[0];
}

function formatPercentage(value) {
  return `${(value * 100).toFixed(2)}%`;
}

localStorage.setItem("game_id", "");
localStorage.setItem("api_key", "");



async function load(){
    
    // add as many more as needed
    let gameID = localStorage.getItem("game_id");
    let apiKey = localStorage.getItem("api_key");
    
    // **************** Write you code below **************** 

    //Step 1: Hero section
    // fetch fav game data from the API
    const gameResponse = await fetch(
      `https://api.gamebrain.co/v1/games/${gameID}?api-key=${apiKey}`);

    const game = await gameResponse.json();

    console.log(game);

    // display game title only 
    const gameTitle = game.title;
    console.log(`Title: ${gameTitle}`);

    // display game artwork
    const gameArtwork = game.artwork_url;
    console.log(`Artwork URL: ${gameArtwork}`);

    // display release date (using formatYearFromStr() function for year only )
    const gameReleaseYear = formatYearFromStr(game.release_date);
    console.log(`Release Year: ${gameReleaseYear}`);

    // display genre
    const gameGenre = game.genre;
    console.log(`Genre: ${gameGenre}`);

    //----------------------------------------------
    //Step 2: Game News Section
    // Add at least 3 new items
    // Display title

    // Display when the news was published

    // Display artwork/image



    //----------------------------------------------
    //Step 3. Similar Games Section
    // Add at least 4 similar game items
    
    // Display name
    // Display year (using the integer part of the value returned as the year)
    // Display rating > mean (using formatPercentage() function)
    // Display screenshot (1 img)









}
load();


   