/*check to see if two provided strings are anagrams of 
each other*/

function anagram(str1, str2) {
  const regex = new RegExp(/[^\w]/g);

  let cleanedStr1 = str1.replace(regex, "");
  let cleanedStr2 = str2.replace(regex, "");

  const map1 = {};
  const map2 = {};

  for (letter of cleanedStr1) {
    if (map1[letter]) {
      map1[letter] = map1[letter] + 1;
    } else {
      map1[letter] = 1;
    }

    //console.log("Map 1: ", map1);
  }

  for (letter of cleanedStr2) {
    if (map2[letter]) {
      map2[letter] = map2[letter] + 1;
    } else {
      map2[letter] = 1;
    }

    //console.log("Map 2", map2);
  }

  for (let count in map1) {
    if (map1[count] === map2[count] && map2[count] === map1[count]) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

anagram("debit card", "bad credit");
