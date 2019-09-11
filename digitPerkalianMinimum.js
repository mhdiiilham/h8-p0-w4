function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var tampung = []
    var sumDigit = []
    for(var i = 1; i < 10; i++){ //keknya line 6 - 12 masih bisa di "sederhanakan" :(
        if(angka % i === 0){
        var faktor = i
        var hasilBagi = angka / faktor
        var faktorStr = faktor.toString()
        var hbStr = hasilBagi.toString();
        var digit = faktorStr+hbStr
        tampung.push(digit)
        }
    }
    for(var j = 0; j < tampung.length; j++){
        sumDigit.push(tampung[j].length)
    }
    var temp = sumDigit[0]
    for(var nana = 0; nana < sumDigit.length; nana++){
        if(sumDigit[nana] < temp){
            temp = sumDigit[nana]
        }
    }
    return temp
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2