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
    //Botw info
    const gameResponse = await fetch(`https://api.gamebrain.co/v1/games/${gameID}?api-key=${apiKey}`);
    const game = await gameResponse.json();

    // 1.a game title
    document.querySelector(".game-info h1").textContent = game.title;

    // 1.b game artwork
    const gameArtwork = game.artwork_url;
    document.querySelector(".game-info img").src = gameArtwork;

    // 1.c release date (using formatYearFromStr() function for year only )
    const gameReleaseYear = formatYearFromStr(game.release_date);
    document.querySelector(".game-info .release-year").textContent = gameReleaseYear;

    // 1.d genre
    const gameGenre = game.genre;
    document.querySelector(".game-info .genre").textContent = gameGenre;

    //----------------------------------------------
    //Step 2: Game News Section
    const newsResponse = await fetch(`https://gamebrain.co{gameID}/news?api-key=${apiKey}`);
    const newsData = await newsResponse.json();

    // Select all existing news cards in the grid layout
    const newsCards = document.querySelectorAll(".news-list .news-card");

    // Loop thru cards up to limit of 3
    newsCards.forEach((card, index) => {
        if (index < 3 && newsData[index]) {
            const article = newsData[index];

            // 2.a title
            card.querySelector(".news-title").textContent = article.title;

            // 2.b Display when the news was published
            card.querySelector(".news-date").textContent = formatYearFromStr(article.published_at);

            // 2.c artwork/image
            card.querySelector("img").src = article.image_url;
        }
        else {
          //Hide extra layout cards if API returns fewer than 3 newa
            card.style.display = "none";
        }
    });


    // Add at least 3 new items
    // 2.a title

    // 2.b Display when the news was published

    // 2.c artwork/image



    //----------------------------------------------
    //Step 3. Similar Games Section
    // Add at least 4 similar game items

    //Variables for similar games & game cards
    // Remember to ajust the fetch lines and endpoints!!!!
    const similarGames = game.similar_games || [];
    const gameCards = document.querySelectorAll(".game-grid .game-card");

    // Loop (4) timesthru similar games & populate game cards
    gameCards.forEach((card, index) => {
      if (index < 4 && similarGames[index]) {
          const item = similarGames[index];

          // 3.a name
            card.querySelector(".game-name").textContent = item.name;

          // 3.b year (using the integer part of the value returned as the year)
            card.querySelector(".game-year").textContent = Math.floor(item.release_date);

          // 3.c rating > mean (using formatPercentage() function)
            card.querySelector(".game-rating").textContent = formatPercentage(item.rating);

          // 3.d screenshot (1 img)
            card.querySelector("img").src = item.screenshot_url;
        }
        else {
            card.style.display = "none";
        }
    });

    // 3.a name
    // 3.b year (using the integer part of the value returned as the year)
    // 3.c rating > mean (using formatPercentage() function)
    // 3.d screenshot (1 img)









}
load();


   