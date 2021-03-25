# Pre-work - *Memory Game*

**Color and Sound Memory Game**  is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Tyler Yu**

Time spent: **4** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [ ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ ] Game buttons each light up and play a sound when clicked. 
* [ ] Computer plays back sequence of clues including sound and visual cue for each button
* [ ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ ] User wins the game after guessing a complete pattern
* [ ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)

The following **additional** features are implemented:

- [ ] A display of remaining attempts that gets updated every time the player makes a mistake.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

https://cdn.glitch.com/bb724709-9963-4a71-b7d7-b303f2d4a447%2Fezgif-4-5b1912e32fcb.gif?v=1616652987467

**The buttons do change color when mouse clicks, the gif transition made it not too obvious because the fps is really low.**

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 


I looked up for html and javascript documentations, and some examples in w3schools.com and stackoverflow

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 


One of the biggest challenge was not being able to speed up after rounds. I started in the “playClueSequence” function and tried to decrease the variable “delay” during each iteration. 
However, this resulted with my app not playing any clues, which confused me quite a lot. Later, I was to find out that since “delay” corresponds to the time that setTimeOut waits for a function call, so if I decrease it in each iteration, the time might have had a negative value, and crashed the app. 

Later, I decided to change variables that determines “delay” before the calculation of delay. This resulted with a working program, but I don’t see and speeding up when I test. After a bit of thinking I found out that it was because of “clueHoldTime”, “nextClueWaitTime”, and “cluePauseTime” being constants instead of variables, and after changing “nextClueWaitTime” and decreases it before each call of “playClueSequence”, I successfully sped up after rounds. 

One more difficulty was when I implemented an extra feature showing how many more attempts can the player use. I didn’t know how to use the variable that I declared in .js file in html file. I went over every word in the write up and thought “document.getElementById” might be a solution. So I looked up on stackoverflow, and on w3schools for more details and found we could use .innerHTML to interact with <p> in html, and this solved the problem.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

After during this prework, I am able to see the interaction between front end and back end of web development, there are two things that I would want to take a further look into,

1: How do front end web development create cool effects that we see everyday interacting with fancy websites, in this prework I have gained the idea that adding fancy effects, videos, images would take quite much memory, how is that solved practically?

2: What is the underlying logic that converts what we do with html, css, and javascript into the website we see? How are the graphics interfaces implemented?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

  
If I had plenty of time, I would try making more button, each representing a different pitch, and making random lists of song melodies represented by the number of the button. Then I would add randomness to the initialization of patterns, and there would be a possibility for player to play a song while playing the merry game, which would be quite fun. 



## License

    Copyright Tyler Yu

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.