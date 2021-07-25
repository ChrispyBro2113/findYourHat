const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
    construct(hatAndHoles, field){
        this._field = field;
        this._hatAndHoles = hatAndHoles;
    }

    playGame(){
        let x = 0;
        let y = 0;
        this.print();

        while (this._hatAndHoles[y][x] === pathCharacter || this._hatAndHoles[y][x] === fieldCharacter){
            const direction = prompt('Which direction would you like to move? Please enter N for North, S for South, E for East, or W for West. \n');
            
            if(direction.toLowerCase() === 'n'){
                if( y === 0){
                    console.log('You cannot move any further North. Please choose another direction');
                }else{
                    y -= 1;
                }
            }else if(direction.toLowerCase() === 's'){
                if(y >= this._field.length){
                    console.log('You cannot move any further South. Please choose another direction');
                }else{
                    y += 1;
                }
            }else if(direction.toLowerCase() === 'w'){
                if(x === 0){
                    console.log('You cannot move any further West. Please choose another direction')
                }else{
                    x -= 1;
                }
            }else if(direction.toLowerCase() === 'e'){
                if(x >= this._field[y].length){
                    console.log('You cannot move any further East. Please choose another direction');
                }else{
                    x += 1;
                }
            }else{
                console.log('Invalid entry. Please enter N, S, E, or W');
            }

            if(this._hatAndHoles[y][x] == hat){
                console.log('You found the hat! You Win!');
            }else if(this._hatAndHoles[y][x] === hole){
                console.log('You fell in a hole. Game Over');
            }else{
                this._field[y][x] = pathCharacter;
                this.print(this._field);
            }
        }
    }

    print(){
        for(let row of this.field){
            console.log(row.join(' '));
        }
    }
}