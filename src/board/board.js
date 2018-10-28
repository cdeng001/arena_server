export default class Board{
    constructor(){
        this.height = 100
        this.width = 100

        this.grid = []
        
        this.player1 = undefined
        this.player2 = undefined
    }

    flattenCoords(x, y){
        if (x < 0 || x >= this.width || y < 0 || y >= this.height){
            return null;
        }

        return x * this.width + y;
    }
    
}