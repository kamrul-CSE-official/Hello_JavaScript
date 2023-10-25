function cubeNumber(number) {
  if (typeof number !== "number") {
    return `'${number}' this is not a number, please give a number and try again.`;
  } else {
    return number * number * number;
  }
}

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "You have to provide string for each parameter.";
  } else {
    if (string1.includes(string2)) {
      return true;
    } else {
      return false;
    }
  }
}

function sortMaker(arr) {
  if (typeof arr[0] !== "number" || typeof arr[1] !== "number") {
    return "Invalid input";
  } else if (arr[0] === arr[1]) {
    return "equal";
  } else if (arr[0] < 1 || arr[1] < 1) {
    return "Invalid input";
  } else {
    if (arr[0] > arr[1]) {
      return arr;
    } else {
      var result = [arr[1], arr[0]];
      return result;
    }
  }
}

function findAddress(obj) {
  const result = [];

  if (obj.hasOwnProperty("state")) {
    result.push(obj.state);
  } else {
    result.push("___");
  }

  if (obj.hasOwnProperty("house")) {
    result.push(obj.house);
  } else {
    result.push("___");
  }

  if (obj.hasOwnProperty("society")) {
    result.push(obj.society);
  } else {
    result.push("___");
  }

  return result.join(",");
}

function canPay(changeArray, totalDue) {
  const sum = changeArray.reduce(
    (preValue, currentValue) => preValue + currentValue,
    0
  );
  if (sum === 0) {
    return "You have not enough money so you can not purchase this product.";
  } else {
    if (sum >= totalDue) {
      return true;
    } else {
      return false;
    }
  }
}
