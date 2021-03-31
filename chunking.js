/*given an array and chunk size, divide the array
into many subarrays where each subarrya is of length size */

function chunk(arr, size) {
  let chunked = [];
  let index = 0;

  while (index < arr.length) {
    let sliced = arr.slice(index, index + size);
    chunked.push(sliced);
    index = index + size;
    console.log("Index: ", index, "Length: ", arr.length);
  }

  console.log(chunked);
}

chunk([1, 2, 3, 4, 5, 6], 3);

/*Time Complexity
The time complexity of this function is linear time (O)n
because 

*/
