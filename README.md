# eXtended Candy Box

## What is it?

Candy Box is a pure html game. You need only a decent web browser to play, no plugin is necessary.
It was released in 2013 by [aniwey](https://candybox.fandom.com/wiki/Aniwey).

eXtended Candy Box is a modest fork of Candy Box with only a few supplementary features and bug fixing.

## Version history

### 1.0 - 01/05/2021

- Initial fork

### 1.1 - 02/05/2021

- README.md
- Dark Mode
  - Toggle button moved to upper right corner in all tabs
  - Now saving Dark Mode status in cookie
  - Now saving Dark Mode status in save files
- Minor glitches
  - Magic ball in Castle's entrance quest is now reset when starting quest
- Minor typos
  - Deletion of spaces before colons, before exclamation marks and before question marks
- Cleaning code
  - Deletion of all tabulations

If you need to use a save from previous version, you have to add the two following lines before the last line of file:
```
darkModeSetting: light
gameModeSetting: normal
```

### 1.2 - 02/05/2021

- Hard mode setting
  - New button to start game in hard mode
  - Saving game mode in cookie
  - Saving game mode in save files
  - Differences between hard mode and normal have been found by comparison of the two versions of the game
    - In hard mode you never raise your maximum HPs
    - In hard mode you get nothing when you pay the sorceress to upgrade you weapon beyond level 5

### 2.0 - 05/05/2021

- Minor glitches
  - War ponies behaviour at right of map is fixed
  - War ponies cannot move several times during each time increment any more
- Overall
  - new game title
  - new game cookie name
- eXtended mode
  - throwing 100 candies to the ground unlock hidden features
  - Peaceful Forest: chest appearance probability does not decrease
  - Goblin Mount: chest appearance probability does not decrease
  - A set of ten identical scrolls can now be bought to the merchant
- eXtended mode hidden features
  - Peaceful Forest: wood ponies pop up more often and up to two ponies can be encountered in a single run
  - Peaceful Forest: wood ponies and trees drop a few lollipops
  - Peaceful Forest: chests pop up more often
  - Goblin Mount: tenacious goblins may drop more candies and may drop lollipops
  - Goblin Mount: chests pop up more often
