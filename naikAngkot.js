function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var panjangRute = rute.length;
    var dataPenumpang = arrPenumpang.length;
    var output = []
    //your code here
    for(var i = 0; i < dataPenumpang; i++){
        var obj = {};
        var isStart = false;
        var posNaik = arrPenumpang[i][1]
        var posTurun = arrPenumpang[i][2]
        var jarak = -1
        for(var j = 0; j < panjangRute; j++){
            if(posNaik === rute[j]){
                isStart = true;
            }

            if (isStart ) {
                jarak++
            }
            
            if (posTurun === rute[jarak]) {
                break
            }
            obj.arrPenumpang = arrPenumpang[i][0]
            obj.naikDari = arrPenumpang[i][1]
            obj.tujuan = arrPenumpang[i][2]  
            // console.log(jarak)
        }
        obj.bayar = 2000 * jarak
        output.push(obj)
    }
    return output
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
//   console.log(naikAngkot([])); //[]