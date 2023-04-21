# Set up 

Clone this repo

Install dependencies 
`yarn`

Run 
`yarn run main`

Run in watch mode 
`yarn run dev`

Run tests 
`yarn run test`

Run tests in watch mode
`yarn run test-watch`

# What I would do differently 
- Token doesn't need to be a class. It only has one value and so could just be a variable called tokenSquare.
- I would maybe instatiate the token on square 1 in the constructor instead of using the function. But I didn't do that so I that could use the given when then scenario in the kata. 

# How I would extent for Features 2, 3 and 4

## Feature 2 Snakes and ladders
- Array of snakes and ladders stored in the Game class
- Snake/ Ladder: { start: number, end: number } 

## Feature 3 Multiple Players 
- Player would be its own class so that can instantiate new players and it would have the keys token and hasWon

## Feature 4 Computer Controlled Character
- Add a computerControlled boolean to the Player class and if the player is computer controlled then automatically do their turn 