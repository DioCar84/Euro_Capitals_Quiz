let username;
let capitals = [["Albania", "Tirana"], ["Andorra", "Andorra la Vella"], ["Armenia", "Yerevan"], ["Austria", "Viena"], ["Azerbaijan", "Baku"], ["Belarus", "Minsk"], ["Belgium", "Brussels"],
                    ["Bosnia and Herzegovina", "Sarajevo"], ["Bulgaria", "Sofia"], ["Croatia", "Zagreb"], ["Cyprus", "Nicosia"], ["Czech Republic", "Prague"], ["Denmark", "Copenhagen"],
                    ["Estonia", "Tallinn"], ["Finland", "Helsinki"], ["France", "Paris"], ["Georgia", "Tbilisi"], ["Germany", "Berlin"], ["Greece", "Athens"], ["Hungary", "Budapest"],
                    ["Iceland", "Reykjavik"], ["Ireland", "Dublin"], ["Italy", "Rome"], ["Kazakhstan", "Nur-Sultan"], ["Kosovo", "Pristina"], ["Latvia", "Riga"], ["Liechtenstein", "Vaduz"],
                    ["Lithuania", "Vilnius"], ["Luxembourg", "Luxembourg"], ["Malta", "Valletta"], ["Moldova", "Chisinau"], ["Monaco", "Monaco"], ["Montenegro", "Podgorica"], 
                    ["Netherlands", "Amsterdam"], ["Norway", "Oslo"], ["Poland", "Warsaw"], ["Portugal", "Lisbon"], ["Romania", "Bucharest"], ["Russia", "Moscow"], ["San Marino", "San Marino"],
                    ["Serbia", "Belgrade"], ["Slovakia", "Bratislava"], ["Slovenia", "Ljubljana"], ["Spain", "Madrid"], ["Sweden", "Stockholm"], ["Switzerland", "Bern"], ["Turkey", "Ankara"],
                    ["Ukraine", "Kiev"], ["United Kingdom", "London"]];

let button = document.getElementById("start_game_button");
    button.addEventListener("click", function() {
        createPlayer();
    });
document.getElementById("start_game_button").addEventListener("keydown", function(event) {
    if(event === "Enter") {
        createPlayer();
    }
})

/**
 * creates a user from the name input in the username text field
 * after that, switches the html to the main game screen
 */
function createPlayer() {
    
        username = document.getElementById("username").value;

        let html = `<!DOCTYPE html>
                    <html>
                    <head>
                        <meta charset='utf-8'>
                        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
                        <title>Euro Capitals Quiz!</title>
                        <meta name='viewport' content='width=device-width, initial-scale=1'>
                        <link rel="preconnect" href="https://fonts.googleapis.com">
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Rajdhani:wght@300;400&display=swap" rel="stylesheet"> 
                        <link rel='stylesheet' type='text/css' media='screen' href='assets/css/style.css'>
                        
                    </head>
                    <body>
                        
                        <header>
                                <h1>Euro Capitals Quiz!</h1>
                                <p>${username}, you name all the capital cities?</p>                
                        </header>

                        <section id="game_section">
                            <div id="scoreboard">
                                <p id="correct_score" class="scoreboard_item">Correct <span>0</span></p>
                                <p id="incorrect_score" class="scoreboard_item">Incorrect <span>0</span></p>
                                <p id="questions_remaining" class="scoreboard_item">Remaining <span>0</span></p>
                            </div>
                            <div>
                                <div id="country" class="question_area">
                                    <h2 id="country_name">Country: Albania</h2>
                                    <img id="country_flag" src="./assets/images/country_flags/Albania Flag.png" alt="the flag of the country that the user must guess the capital city of">
                                </div>
                                <div id="capital" class="question_area">
                                    <h2>Capital</h2>
                                    <div id="city_input">
                                        <label class="city_display" id="city_label" for="capital_city">City:</label>
                                        <input class="city_display" type="text" id="capital_city" name="capital_city" required>
                                    </div>
                                    
                                    <button class="city_display game_button" id="answer_button">Submit Answer</button>
                                </div>
                            </div>
                            <div>
                                <button class="game_button finish_button">New Game</button>
                                <button class="game_button finish_button">Quit Game</button>
                            </div>
                        </section>

                        <script src='assets/JS/script.js'></script>
                    </body>
                    </html>`;

        document.body.innerHTML = html;
        newGame();
};

/**
 * 
 * calls generateQuestion to generate a random country
 */
function newGame() {

    generateQuestion();
};

/**
 * generates and random country and flag from the capitals array
 */
function generateQuestion() {
  let randomCountry = capitals[Math.floor(Math.random()* capitals.length + 1)][0];
  let flag = randomCountry + " Flag.png"; 
  
  document.getElementById("country_name").innerText = "Country: " + `${randomCountry}` + "";
  document.getElementById("country_flag").src = "./assets/images/country_flags/" + `${flag}` + "";  
};

function correctScore() {};

function incorrectScore() {};

function decrementRemainingQuestions() {};

function checkAnswer() {};

function newUser() {};

function endGame() {};

