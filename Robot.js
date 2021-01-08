class Robot {
  leftTurn(direction) {
    const directions = {
      N: "W",
      E: "N",
      S: "E",
      W: "S",
    };
    const result = directions[direction];
    if (!result) {
      throw new Error("invalid input");
    }
    return result;
  }

  rightTurn(direction) {
    const directions = {
      N: "E",
      E: "S",
      S: "W",
      W: "N",
    };
    const result = directions[direction];
    if (!result) {
      throw new Error("invalid input");
    }
    return result;
  }

  move(coordinates, direction) {
    const currentCoordinates = coordinates;

    switch (direction) {
      case "N":
        currentCoordinates[1]++;
        break;
      case "E":
        currentCoordinates[0]++;
        break;
      case "S":
        currentCoordinates[1]--;
        break;
      case "W":
        currentCoordinates[0]--;
        break;

      default:
        throw new Error("invalid input");
    }

    return currentCoordinates;
  }
}

module.exports = Robot;
