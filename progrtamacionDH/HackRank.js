function diagonalDifference(arr) {
    let principal = 0
    let secondary = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {

            if (i == j)
               { principal += arr[i][j];}
 
            if ((i + j) == (arr.length - 1))
                {secondary += arr[i][j];}
        }
    }
    return Math.abs(principal - secondary);
}
const array = [[11, 2, 4], [4 ,5, 6],[10, 8 ,-12]]; 
console.log(diagonalDifference(array,))


//------------------------------------------------------------------------------------------------
/* 
const array2 = [1, 2, 3, 4, 5, 6]

function miniMaxSum(arr) {
    let mayor = arr[0]
    let minor = arr[0]
    let total = 0
    let minimun = 0
    let maximun = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > mayor){
            mayor = arr[i]
        }
        if(arr[i] < minor){
            minor = arr[i]
        }
        
        
        total += arr[i]
    }
    minimun = total - mayor
    maximun = total - minor

    console.log(`${minimun} ${maximun}`);
    
}
 */
