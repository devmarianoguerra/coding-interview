/*write a function that accepts a string. the function should capitalize
the first letter of each word in the string */

function capitalize(string) {
  let splitted = string.split(" ");
  splitted.map((item) => {
    let capital = item[0].toUpperCase();
    let rest = item.slice(1);
    let word = capital + rest;
    console.log(word);
  });
}

capitalize("the force is with me");

/*this function has a linear runtime O(n) because it is iterating 
over every word so as the number of words in the sentence increases,
the time or effort will increase proportionally. */
