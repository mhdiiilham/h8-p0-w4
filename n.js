function biasa(input){
    var abc = 'abcdefghijklmnopqrstuvwxyz'
    var str = ''
    for(var i = 0; i < abc.length; i++){
        for(var j = 0; j < input.length; j++){
            if(input[j] === abc[i]){
                str += input[j]
            }
        }
    }
    return str
}

console.log(biasa('hello')) //ehllo
