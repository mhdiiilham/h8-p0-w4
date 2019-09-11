function checkAB(num) { //Ada masalah di test case ke-5
    // you can only write your code here!
    var posA = 0
    var posB = 0
    for(var i = 0; i < num.length; i++){
        if(num[i] === 'a'){
            posA = i
        } else if(num[i] === 'b'){
            posB = i
        }
    }
    var jarak = 0
    if(posA > posB){
        jarak = posA - posB
    } else if(posA < posB){
        jarak = posB - posA
    }
    if(jarak >= 3){
        return true
    } else {
        return false
    }
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false