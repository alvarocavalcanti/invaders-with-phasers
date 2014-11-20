# Invaders... With Phasers!

Hi. This is a simple base project for a [Space Invaders](http://en.wikipedia.org/wiki/Space_Invaders)-like game, created with [Phaser](http://phaser.io)

This code includes:

- The non-minified release of Phaser v2.1.3 "Ravinda"
- A basic index.html file with the scaffolding code, ready for your game logic
- A few art assets from the [Tyrian](http://www.lostgarden.com/2007/04/free-game-graphics-tyrian-ships-and.html) game, by [DanC](http://lostgarden.com)

## How to get going

1. Clone this repo
1. Create a new branch for yourself or your team
1. Serve its folder using any webserver (I recommend [npm http-server](https://www.npmjs.org/package/http-server))
1. Hit http://localhost:8080/ and there you have it

## Can't touch this

The master branch is supposed to be always a starting point. Bear that in mind when creating pull requests for it.

Use your own branch to create your game.

## Suggested path

1. Add the ship [Image](http://docs.phaser.io/Phaser.Image.html) to the game
1. Instead of an image, use the ship as a [Sprite](http://docs.phaser.io/Phaser.Sprite.html), defining its animations
1. Add movement support to the ship, using the keyboard arrows to move it sideways
1. Play a little with the ship's movement. Experiment with the physics possibility (velocity, acceleration, drag, etc)
1. Make the ship able to shoot. Be mindful of the shooting rate, bullets exiting the boundaries, etc
1. Add several enemies and make them move together
1. Make the enemies shoot ramdomly at the player
1. Make sure the bullets are able to kill things. Both player and anemies
1. Add sounds
1. Add a scrolling background
1. Add scoring points and player lives
1. Define the ending conditions (loose all lives and kill all enemies), and an ending screen
1. Create a menu screen
