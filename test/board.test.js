import Board from '../src/board/board'
import Player from '../src/player/player'

import chai from 'chai'
const expect = chai.expect

describe('board initialization', () => {
    it("should create an empty board", () => {
        const board = new Board();
        
        expect(board.grid).to.be.an('array').that.is.empty;
        expect(board.spectators).to.be.an('array').that.is.empty;
        expect(board.player1).to.be.undefined;
        expect(board.player2).to.be.undefined;
        expect(board.height).to.eq(100);
        expect(board.width).to.eq(100);
    })
})

describe('board flattenCoords', () => {
    const board = new Board();

    it("should return correct flattened value", () => {
        expect(board.flattenCoords(0,0)).to.eq(0);
        expect(board.flattenCoords(board.width-1, board.height-1)).to.eq(9999);
        expect(board.flattenCoords(12, 32)).to.eq(1232);
    })

    it("should return null when out of bounds", () => {
        expect(board.flattenCoords(-1,0)).to.eq(null);
        expect(board.flattenCoords(0,-1)).to.eq(null);
        expect(board.flattenCoords(board.width,0)).to.eq(null);
        expect(board.flattenCoords(0,board.height)).to.eq(null);
    })
})

describe('board addPlayer', () => {
    const player = new Player({
        socket: "example socket id"
    })
    const secondPlayer = new Player({
        socket: ""
    })

    it("should add player 1 if open", () => {
        const board = new Board()

        expect(board.addPlayer(player)).to.be.true
        expect(board.player1).to.be.eq(player)
    });

    it("should add player 2 if open and player 1 exists", () => {
        const board = new Board()

        board.addPlayer(player)
        expect(board.addPlayer(secondPlayer)).to.be.true
        expect(board.player2).to.be.eq(secondPlayer)
    })

    it("should return false if not Player instance", () => {
        const board = new Board()

        expect(board.addPlayer({})).to.be.false
        expect(board.player1).to.be.undefined
    })

    it("should return false if both players are set", () => {
        const board = new Board()
        const thirdPlayer = new Player({
            socket: ""
        })

        expect(board.addPlayer(player)).to.be.true
        expect(board.addPlayer(secondPlayer)).to.be.true
        expect(board.addPlayer(thirdPlayer)).to.be.false
    })
})