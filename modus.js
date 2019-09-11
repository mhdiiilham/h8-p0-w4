function cariModus(arr) {
  // you can only write your code here!
  var freq = []
  for(var i = 0; i < arr.length; i++){
      var hitung  = 0
      for(var j = 0; j < arr.length; j++){
          if(arr[i] === arr[j]){
              hitung += 1
          }
      }
      if(hitung === arr.length){
          return -1
      } 
      freq.push(hitung)
  }
  var max = 1;
  var index = -1;
  for(var i = 0; i < freq.length; i++){
      if(freq[i] > max){
          index = i
          max = freq[i]
      }
  }
  if(max === 1){
      return -1
  }
  var modus = arr[index]
  return modus
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1