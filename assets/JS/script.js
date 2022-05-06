/* creating a variable to store the username chosen and also creating the capitals object that stores all the country/capital pairs
   then an event listener is added to the start game button and also a listener in case the user presses the "enter" key instead */

let username;
let capitals = {"Albania": "Tirana", 
                "Andorra": "Andorra la Vella", 
                "Armenia": "Yerevan", 
                "Austria": "Viena", 
                "Azerbaijan": "Baku", 
                "Belarus": "Minsk", 
                "Belgium": "Brussels",
                "Bosnia and Herzegovina": "Sarajevo", 
                "Bulgaria": "Sofia", 
                "Croatia": "Zagreb", 
                "Cyprus": "Nicosia", 
                "Czech Republic": "Prague", 
                "Denmark": "Copenhagen",
                "Estonia": "Tallinn", 
                "Finland": "Helsinki", 
                "France": "Paris", 
                "Georgia": "Tbilisi", 
                "Germany": "Berlin", 
                "Greece": "Athens", 
                "Hungary": "Budapest",
                "Iceland": "Reykjavik", 
                "Ireland": "Dublin", 
                "Italy": "Rome", 
                "Kazakhstan": "Nur-Sultan", 
                "Kosovo": "Pristina", 
                "Latvia": "Riga", 
                "Liechtenstein": "Vaduz",
                "Lithuania": "Vilnius", 
                "Luxembourg": "Luxembourg", 
                "Malta": "Valletta", 
                "Moldova": "Chisinau", 
                "Monaco": "Monaco", 
                "Montenegro": "Podgorica",
                "Netherlands": "Amsterdam", 
                "Norway": "Oslo", 
                "Poland": "Warsaw", 
                "Portugal": "Lisbon", 
                "Romania": "Bucharest", 
                "Russia": "Moscow", 
                "San Marino": "San Marino",
                "Serbia": "Belgrade", 
                "Slovakia": "Bratislava", 
                "Slovenia": "Ljubljana", 
                "Spain": "Madrid", 
                "Sweden": "Stockholm", 
                "Switzerland": "Bern", 
                "Turkey": "Ankara",
                "Ukraine": "Kiev", 
                "United Kingdom": "London"
                };

document.getElementById("username").focus();

let button = document.getElementById("start_game_button");
    button.addEventListener("click", function() {
        createPlayer();
    });

document.getElementById("start_game_button").addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        createPlayer();
    }
});

/**
 * creates a user from the name input in the username text field
 * after that, switches the html to the main game page
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
                                <p>${username}, can you name all the capital cities?</p>                
                        </header>

                        <section id="game_section">
                            <div id="scoreboard">
                                <p id="correct_score" class="scoreboard_item">Correct <span id="correct_score_value">0</span></p>
                                <p id="incorrect_score" class="scoreboard_item">Incorrect <span id="incorrect_score_value">0</span></p>
                                <p id="questions_remaining" class="scoreboard_item">Remaining <span id="questions_remaining_value">0</span></p>
                            </div>
                            <div>
                                <div id="country" class="question_area">
                                    <h2 id="country_name">Country: <span id="current_country">Albania</span></h2>
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
                                <button id="new_game_button" class="game_button finish_button">New Game</button>
                                <button id="quit_game_button" class="game_button finish_button">Quit Game</button>
                            </div>
                        </section>

                        <script src='assets/JS/script.js'></script>
                    </body>
                    </html>`;

        document.body.innerHTML = html;
        newGame();
        document.getElementById("capital_city").value = "";
        document.getElementById("capital_city").focus();

        /* adds event listener to submit button to check user response
         also adds key press listener in case user hits the "enter" key instead of clicking the submit button */
        let userAnswer = document.getElementById("answer_button");
        userAnswer.addEventListener("click", function() {
            checkAnswer();
        });

        document.getElementById("capital_city").addEventListener("keydown", function(event) {
            if(event.key === "Enter") {
                checkAnswer();
            }
        });
};

/**
 * resets the scoreboard and
 * calls generateQuestion to generate a random country/capital pair
 */
function newGame() {
    document.getElementById("correct_score_value").textContent = 0;
    document.getElementById("incorrect_score_value").textContent = 0;
    document.getElementById("questions_remaining_value").textContent = Object.keys(capitals).length;
    generateQuestion();

    let replayGame = document.getElementById("new_game_button");
        replayGame.addEventListener("click", function() {
            newGame();
        });

    let quitGame = document.getElementById("quit_game_button");
        quitGame.addEventListener("click", function() {
            endGame();
        }); 
};

/**
 * checks if there any still countries remaining, if not it will end the game
 * generates a random country/capital pair from the capitals object and the corresponding flag
 */
function generateQuestion() {
    if(parseInt(document.getElementById("questions_remaining_value").textContent) <= 0) {
        endGame();
    } else {
    let capitalsKeysArray = Object.keys(capitals); 
    let randomCountry = capitalsKeysArray[Math.floor(Math.random()* capitalsKeysArray.length)];
    let flag = randomCountry + " Flag.png"; 
    
    document.getElementById("country_name").innerHTML = 'Country: <span id="current_country">' + `${randomCountry}` + '</span>';
    document.getElementById("country_flag").src = "./assets/images/country_flags/" + `${flag}` + "";
    }
};

/**
 * will increment the players' correct score value by 1
 */
function correctScore() {
    let score = parseInt(document.getElementById("correct_score_value").textContent) +1;
    document.getElementById("correct_score_value").textContent = score;
    decrementRemainingQuestions(); 
};

/**
 * will increment the players' incorrect score value by 1
 */
function incorrectScore() {
    let score = parseInt(document.getElementById("incorrect_score_value").textContent) +1;
    document.getElementById("incorrect_score_value").textContent = score;
    decrementRemainingQuestions();
};

/**
 * will decrement the remaining questions value by 1
 */
function decrementRemainingQuestions() {
    let score = parseInt(document.getElementById("questions_remaining_value").textContent) -1;
    document.getElementById("questions_remaining_value").textContent = score;
};

/**
 * checks user answer against the correct answer
 * will increment the score based on if user answer is correct or incorrect
 * will decrement the number of remaining countries
 */
function checkAnswer() {
    let country = document.getElementById("current_country").textContent;
    let answer = document.getElementById("capital_city").value;
    if(answer === capitals[country]) {
        correctScore();
        alert("Good job! Your answer was correct");
        delete capitals[country];
        document.getElementById("capital_city").value = "";
        document.getElementById("capital_city").focus();
        generateQuestion();
    } else {
        incorrectScore();
        alert("Sorry you got it wrong! The correct answer was: " + `${capitals[country]}`);
        delete capitals[country];
        document.getElementById("capital_city").value = "";
        document.getElementById("capital_city").focus();
        generateQuestion();
    }
};

/**
 * terminates the current game and presents the user with the score
 * both the number of correct and incorrect answers will be displayed
 * reloads the page to the username input screen
 */
function endGame() {
    let correctScore = document.getElementById("correct_score_value").textContent;
    let incorrectScore = document.getElementById("incorrect_score_value").textContent;
    alert(`Game Over! You had ${correctScore} correct answers and ${incorrectScore} incorrect.`);
    location.reload();
};

