const Robot = require("./Robot");

(function main() {
  try {
    const input = require("fs").readFileSync("./input.txt", "utf8");
    const [_, ...infos] = input.split("\n");

    const position = {
      coordinates: [],
      direction: "",
    };

    while (infos.length > 0) {
      const [x, y, direction] = infos.shift().split(" ");

      position.coordinates = [x, y];
      position.direction = direction;

      const instructions = infos.shift().split("");

      const robot = new Robot();

      instructions.forEach((instruction) => {
        switch (instruction) {
          case "L":
            position.direction = robot.leftTurn(position.direction);
            break;
          case "R":
            position.direction = robot.rightTurn(position.direction);
            break;
          case "M":
            position.coordinates = robot.move(
              position.coordinates,
              position.direction
            );
            break;
          default:
            break;
        }
      });
      console.log(
        `${position.coordinates[0]} ${position.coordinates[1]} ${position.direction}`
      );
    }
  } catch (error) {
    console.log(error);
  }
})();
