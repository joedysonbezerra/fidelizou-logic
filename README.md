<p align="center">
   <img alt="INB" title="Instituto Nicolas Bueno" src="https://secureservercdn.net/50.62.89.138/072.751.myftpupload.com/wp-content/uploads/2017/04/inb-logo.png">
</p>

<h2 align="center">
  Technical logic test
</h2>
A squad of robotic rovers are to be landed by NASA on a plateau on 
Mars. This plateau, which is curiously rectangular, must be navigated 
by the rovers so that their on-board cameras can get a complete view 
of the surrounding terrain to send back to Earth. A rover's position 
and location is represented by a combination of x and y co-ordinates 
and a letter representing one of the four cardinal compass points. The 
plateau is divided up into a grid to simplify navigation. An example 
position might be 0, 0, N, which means the rover is in the bottom left 
corner and facing North. In order to control a rover, NASA sends a 
simple string of letters. The possible letters are 'L', 'R' and 'M'. 
'L' and 'R' makes the rover spin 90 degrees left or right 
respectively, without moving from its current spot. 'M' means move 
forward one grid point, and maintain the same heading. 
 
Assume that the square directly North from (x, y) is (x, y+1). 

Input
```
5 5 
1 2 N 
LMLMLMLMM 
3 3 E 
MMRMMRMRRM 
```

## :information_source: How to start
1. start: 

```
$ node main.js
```


## :wrench: Technologies

-  [Node.js](https://nodejs.org/en/)
-  [VS Code][vc]

---

Made with ♥ by Joédyson Bezerra :wave: [Get in touch!](https://www.linkedin.com/in/joedyson-bezerra/)

[vc]: https://code.visualstudio.com/
