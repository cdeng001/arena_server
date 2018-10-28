import Player from '../player/player';

export default class Board{
    constructor(){
        this.height = 100
        this.width = 100

        this.grid = []
        
        this.player1 = undefined
        this.player2 = undefined

        this.team1 = undefined
        this.team2 = undefined

        this.spectators = []
    }

    flattenCoords(x, y){
        if (x < 0 || x >= this.width || y < 0 || y >= this.height){
            return null;
        }

        return x * this.width + y;
    }
    
    addPlayer(player){
        if(player instanceof Player){
            if(this.player1 === undefined){
                this.player1 = player
                return true
            }

            if(this.player2 === undefined){
                this.player2 = player
                return true
            }
        }
        return false
    }
}