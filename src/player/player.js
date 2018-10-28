export default class Player{
    constructor({name = "Anon", socket = null} = {}){
        if (socket === null){
            return new Error("Unable to initialize character without socket ID.");
        }

        this.name = name
        this.socket = socket
    }
}