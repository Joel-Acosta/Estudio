function checkCashRegister(price, cash, cid) {
    let diff = cash - price
    let values = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01]
    let index = values.findIndex(item => diff > item)
    cid = cid.reverse()
    let closed = cid.slice(index,)
    closed = closed.reduce((total, item)=>  total + item[1], 0 ).toFixed(2)
    if(diff > closed){
      return{status: "INSUFFICIENT_FUNDS", change: []}
    }else if(diff == closed){
      return {status: "CLOSED", change : cid.reverse()}
    }else{
      let change = []
    while(diff > 0.1 && closed > diff){
      for(let i = 0; i < cid.length;i++){
        if(diff >= values[i]){
          let aux = 0
          let arr = []
          while((diff / values[i]).toFixed(2) >= 1 && cid[i][1] >= values[i]){
            aux += values[i]
            diff -= values[i]
            cid[i][1] -= values[i]
          }
          arr.push(cid[i][0], aux)
          change.push(arr)
        }
      }
      
    }
    return{status: "OPEN", change}
    }
    
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], 
  ["DIME", 0], ["QUARTER", 0], 
  ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0],
   ["ONE HUNDRED", 0]]))