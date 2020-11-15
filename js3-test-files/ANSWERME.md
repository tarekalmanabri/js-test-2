1. In the project there was a house that did not have a lord. Which house was this? And what did you do to deal with this situation?

House Stark of Winterfell
I used if statement to determine if its empty. if its not empty we do the fetch. if its empty keep it empty.

2. You could have used XMLHttpRequest, the library axios or the fetch API to get the data from the server. And you could have used callbacks, async/await and/or promises. What did you use and why?
   (_TIP: There is no right way, all have their advantages and disadvantages. Explain your decision making listing the advantages/disadvantages of each technology/approach_)
   i used async await because i focused the last few days on learning it and found it faster and easier and shorter to use. i used fetch because the xml request would be a lot more lines of code and i didnt want to get the axios cdn so fetch was easier to use because its already there

3. Let's say you were a huge fan of Object Oriented Programming and the api offered the option to get all the data you needed at once. What classes would you make and what functions would they have?
   (_TIP: You do not have to write out the implementation of the functions (but you can if it makes it easier to think it through)_)
   (_TIP: If you are unsure between two decisions, then write a comment with the alternative you considered but decided against with arguments. There is again no one correct answer here, but we want to see you think in an OOP way_)
   (_TIP: If you want the code highlighting, it is also fine to create a `.js` file and then write down here what file to look at_)

```
class House {
  constructor(name, currentLord) {
    this.name = name;
    this.currentLord = currentLord;
  }

  getCurrentLord() {}

  getOtherLord() {}
}

class Lord {
  constructor(name) {
    this.name = name;
  }
}

```
