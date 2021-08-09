





let sockMerchant = (numberOfSocks : number, array : any) => {
    

let pair = 0;
    array.sort();

    for(let i = 1; i < numberOfSocks; i++)
    {
       if(array[i - 1] === array[i])
        {
            pair++;
            i++;
        }
    }

    return pair;
}


const result = sockMerchant(3, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
console.log(result);