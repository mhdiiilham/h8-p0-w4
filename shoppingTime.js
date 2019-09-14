function shoppingTime(memberId, money) {
    // you can only write your code here!
    if(memberId !== '' && money > 50000){
        var obj = {}
        var purchased = []
        var uang  = money
        var totalBelanja = 0
        if(uang >= 1500000){
            purchased.push('Sepatu Stacattu')
            uang -= 1500000
            totalBelanja += 1500000
        }
        if(uang >= 500000){
            purchased.push('Baju Zoro')
            uang -= 500000
            totalBelanja += 500000
        }
        if(uang >= 250000){
            purchased.push('Baju H&N')
            uang -= 250000
            totalBelanja += 250000
        }
        if(uang >= 175000){
            purchased.push('Sweater Uniklooh')
            uang -= 175000
            totalBelanja += 175000
        }
        if(uang >= 50000){
            purchased.push('Casing Handphone')
            uang -= 50000
            totalBelanja += 50000
        }
        obj.memberId = memberId
        obj.money = money
        obj.listPurchased = purchased
        obj.changeMoney = uang
        return(obj)
    }
    
    else if(!memberId){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja.'
    }
    
    else if(money < 50000){
        return 'Mohon maaf, uang tidak cukup.'
    }


  }

  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
//   //{ memberId: '82Ku8Ma742',
//   // money: 170000,
//   // listPurchased:
//   //  [ 'Casing Handphone' ],
//   // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja