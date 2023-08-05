//  Comon section //

const fs = require("fs");

// Main section//

partOne();
partTwo();

// Functions section //

function partOne() {
  const input = fetchInputData();
  const packetMarker = 4;
  const position = findPosition(input, packetMarker);
  print("Part One", position);
}

function partTwo() {
  const input = fetchInputData();
  const packetMarker = 14;
  const position = findPosition(input, packetMarker);
  print("Part Two", position);
}

function fetchInputData() {
  const getInput = fs.readFileSync("./input.txt").toString();
  return getInput;
}

function findPosition(signal, pMarker) {
  let positionIndex = 0;

  for (let i = 0; i < signal.length; i++) {
    let section = signal.substring(i, i + pMarker);
    const hasDuplicate = checkDuplicate(section);
    if (!hasDuplicate) {
      positionIndex = i + section.length;
      return positionIndex;
    }
  }
}

function checkDuplicate(str) {
  let checkedChar = [];
  let containDuplicate = false;

  for (let char of str) {
    if (checkedChar.includes(char)) {
      containDuplicate = true;
      return containDuplicate;
    }
    checkedChar.push(char);
  }
  return containDuplicate;
}

function print(whitchPart, text) {
  console.log(`The output of ${whitchPart} is ${text}`);
}
