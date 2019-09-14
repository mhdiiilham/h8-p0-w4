function changeMe(arr) {
    // you can only write your code here!
    var obj = {}
    var tahun =  2019
    for(var i = 0; i < arr.length; i++){
        if (arr.length < 1){
            console.log("")
        }
        obj.firstName = arr[i][0]
        obj.lastName = arr[i][1]
        obj.gender = arr[i][2]
        if(arr[i][3] < 2019){
            obj.age = tahun - arr[i][3]
        } else if(arr[i][3] > 2019 || arr.length < 4){
            obj.age = 'Invalid Birth Year'
        }
        console.log(obj)
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""