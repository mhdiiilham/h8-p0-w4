function urutkanAbjad(str) {
    // you can only write your code here!
    var abc = 'abcdefghijklmnopqrstuvwxyz'
    var output = ''
    for(var i = 0; i < abc.length; i++){
        for(var j = 0; j < str.length; j++){
            if(str[j] === abc[i]){
                output += str[j]
            }
        }
    }
    return output
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'