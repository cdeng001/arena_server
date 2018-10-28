import Player from '../src/player/player';

import chai from 'chai';
const expect = chai.expect;

describe('player initialization', () => {
    const playerName = "Player 1"
    const socketId = "asd"

    it("should create a valid player object", () => {
        const player = new Player({
            name: playerName,
            socket: socketId
        })

        expect(player).to.be.an.instanceof(Player)
        expect(player.name).to.be.a("string").that.is.eq(playerName)
        expect(player.socket).to.be.a("string").that.is.eq(socketId)
    })

    it("should error without a socket id", () => {
        const player = new Player();

        expect(player).to.be.an.instanceof(Error)
        expect(player.message).to.eq("Unable to initialize character without socket ID.")
    })

    it("should default a player name", () => {
        const player = new Player({
            socket: socketId
        })

        expect(player).to.be.an.instanceof(Player)
        expect(player.name).to.be.a("string").that.is.eq("Anon")
        expect(player.socket).to.be.a("string").that.is.eq(socketId)
    })
})