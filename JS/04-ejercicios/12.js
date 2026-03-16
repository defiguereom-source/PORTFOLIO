console.log("sirve");

function drawGift(size, symbol) {
    
    let result = '';
    
    if (size < 2){ 
        return result = '';
    }
    else if(symbol != "+")
    {
        for (let i = 0; i < size; i++) {

            let line = '';

            for (let j = 0; j < size; j++) {

                if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
                    line += symbol;
                } else {
                    line += ' ';
                }

            }

            result += line;

            if (i < size - 1) {
                result += '\n';
            }
        }
    }
    else
    {
        result = '';
    }

    return result;
}

console.log(drawGift(1,'2')) 
