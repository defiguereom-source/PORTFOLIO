const production1 = [
  { toy: 'car', quantity: 3 },
  { toy: 'doll', quantity: 2 },
  { toy: 'ball', quantity: 2 }
];

function manufactureGifts(gifts){
    let array = [];

    for (let i of gifts){   
        if(i.quantity > 0){
            
            for(let j = 0;j < i.quantity;j++){
                array.push(i.toy)
            }

        }
    }

    return array;
}

console.log(manufactureGifts(production1));
