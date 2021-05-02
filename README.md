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

If you need to use a save from previous version, you need to add the two following lines at the end of file:
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