# Euro Capitals Quiz

Euro Capitals Quiz is game desgined to test your knowledge of the capital cities of countries located in the European continent. This game will help improve your geographical awarness and provide you with answers to trivia question you may not have known the solution to before. Since the demise of the U.S.S.R. there are more European countries than ever before and this quiz qill provide you with 49 countries and their respective capital cities.  

Users of this game will get a chance to test their knowledge regarding capital cities of European countries. They may even be able to impress friends and family with their newfound confidence when discussing these countries and their capital cities. This site is geared towards both children and adults whom wish to have a bit of fun while also learning European capital cities.

![Responsice Mockup](./assets/images/screenshots/responsive-project.png)

## Features 

### Existing Features

- __The Header__

  - Featured at the top of the page, the shows the game name: Euro Capitals Quiz! in a font with the color of the starts on the European Union flag. The background of the page is the same color as the blue background of the E.U. flag.
  - There is also a small paragraph meant to inspire the user by delivering a challenging message, "Who is brave enough to play the European capitals quiz game?"
  - This header makes if very clear to the user that they will be participating in a quiz where the question are about european capitals.

![Header](./assets/images/screenshots/header-1.png)

- __Username Input Area__

  - This section will allow the user to create a unique  username before starting the quiz.
  - There is a text input area and a large "start game" button.
  - Under the button is a map of Europe with the countries highlighted in different colors. 

![Username](./assets/images/screenshots/username-area.png)

- __The Second Header__

  - Featured at the top of the page, the shows the game name: Euro Capitals Quiz! just as before. However, the paragraph below it has been modified.
  - The small paragraph now displays the chosen username and questions the user's knowledge. 

![Header2](./assets/images/screenshots/header-2.png)

- __The Scoreboard Area__

  - This section will allow the user to see exactly how many correct and incorrect answers they have provided.
  - There is also an element that will display how many question remain before the quiz is finished.

![scoreboard](./assets/images/screenshots/scoreboard.png)

- __The Game Area__

  - This section will provide the user with the country and flag for which they must reply with the capital city.
  - There is text input field where the user may write their response, and a submit button directly below it.
  - There are also two buttons at the bottom: The new game button will refresh the game and allow the user to start over. The quit game button will end the game and direct the user back to the username creation section.

![game](./assets/images/screenshots/game-area.png)

- __How The Game Works__

  - The game will randomly generate a country and flag from a predefined list. The user will then have to respond with the capital city of said country.
  - If the user answers correctly, they will receive an alert congratulating them on their answer.
  - However, if the user is incorrect, they will receive an alert advising them they have not answered correctly, as well as, what the correct response was.
  - The scoreboard will then add 1 to the number of correct/incorrect answers based on the outcome and also reduce the number of remaining questions left by 1.
  - When the user quits the game, they will receive an alert with the number of correct and incorrect responses they provided.

  ![correct](./assets/images/screenshots/correct.png) ![incorrect](./assets/images/screenshots/incorrect.png) ![endgame](./assets/images/screenshots/endgame.png)

### Features Left to Implement

- I would like to add an external link to a website with all of the European countries and their respective capitals.
- I would like to expand the quiz to not only Europe, but other continents as well.
- I would like to add language options, so that the user may choose to play in Portuguese or Spanish as well.

## Testing 

- I tested playing this game in different browsers: Chrome, Firefox, Safari.
- I confirmed that the game results are always correct.
- I confirmed that the header, scoreboard and game areas are all readable and easy to understand.
- I confirmed that the colors and fonts chosen are easy to read and accessible by running it through lighthouse in devtools.

![lighthouse](./assets/images/screenshots/lighthouse.png)

- I confirmed that this project is responsive, looks good and functions on all standard screen szes using devtools device toolbar.

### Validator Testing 

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdiocar84.github.io%2FEuro_Capitals_Quiz%2F)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdiocar84.github.io%2FEuro_Capitals_Quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - There are 14 functions in this file.
      - Function with the largest signature take 1 arguments, while the median is 0.
      - Largest function has 17 statements in it, while the median is 2.5.
      - The most complex function has a cyclomatic complexity value of 3 while the median is 1.

### Unfixed Bugs

No unfixed bugs 

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab and then select Pages from the left-side menu
  - From the source section drop-down menu, select the Main Branch
  - Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://diocar84.github.io/Euro_Capitals_Quiz/

## Credits 

### Content 

- The list of European countries and their capitals was taken from [Countries of the World](https://www.countries-ofthe-world.com/capitals-of-europe.html)

### Media

- The images used on this application we all taken from [Pexels](https://www.pexels.com/royalty-free-images/)