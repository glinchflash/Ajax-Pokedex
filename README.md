# Title: Ajax-Pokedex

Check out my [pokedex](https://glinchflash.github.io/Ajax-Pokedex/)
---
### Exercise
Make a Pokédex using this API.

Basic functionality that is expected (read: core features):

* - [x] You can search a pokémon by name and by ID
* - [ ] Of said pokémon you need to show:
     * - [x] The ID-number
     * - [x] An image (sprite)
     * - [x] At least 4 "moves"
     * - [ ] The previous evolution, only if it exists, along with their name and image. Be carefull, you cannot just do ID-1 to get the previous form, for example look into "magmar" - "magmortar". You have to use a seperate api call for this!
* - [ ] Make your web page look like a pokédex by adding a little CSS.

Note: For this exercise, the goal is to keep working on it, until the deadline is reached. If you are finished adding all "core features", look at what else the API has to offer, and try adding some other features. At the end of the deadline, everyone is going to present the pokédex they made; As such it is important that you have published your web page on GitHub!

---
Extra challenge
There are a couple of pokemon that don't play with the normal rules, add code so their cases are also handled elegantly.

* - [x] Ditto only has 1 move.
* - [ ] Eevee has 6 evolutions.

---

### Progress

1. - [x] make it so you can search by name and by ID
    * - [x] get data from api
    * - [x] use data to retreive specific information
2. -[ ] Of said pokémon you need to show
    * - [x] name
    *  -[x] id
    *  -[x] moves (4 minimum)
    * -[x]  previous evolution
3. - [ ] Make your web page look like a pokédex by adding a little CSS
    * basic layout
    * background color changes depending on type
    * give it a pokedex look
4.  -[x] Post page on github pages and add link to about/readme
---

#### Extras

* -[x] Show both front and back sprite aswell as both front and back shiny sprite
* - [x] Show both front and back sprite for female version (shiny aswell)
* -[x] Show typing
* -[ ] show next evolution aswell as previous evolution form
---

##### Issues I came across
1. when no images available in API don't change image source
    * fixed it with using != null.
2. Images from sprites not displaying correctly
   * linked incorrectly, cleaned up code for better overview
3. evolution line doesn't show correctly (going into a new chain old images stay,next evo isn't always correct )
   * 