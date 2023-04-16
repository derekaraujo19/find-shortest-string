function findShortestString(arr) {
  // const shortest = arr.reduce((shortestString, curString) =>
  // curString.length < shortestString.length ? curString : shortestString);
  // return shortest;

  // establish first string as shortest
  let shortest = arr[0];
  // iterate through arr of strings
  for (i = 0; i < arr.length; i++) {
    // if current string is shorter than shortest
    if (arr[i].length < shortest.length) {
      // current string becomes shortest
      shortest = arr[i];
    }
  }
  // return shortest
  return shortest;
}

if (require.main === module) {
  // add your own tests in here


  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
