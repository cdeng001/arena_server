import Board from '../src/board/board';

import chai from 'chai';
const expect = chai.expect;

describe('board initialization', () => {
    it("should create an empty board", () => {
        const board = new Board();
        
        expect(board.grid).to.be.a('array');
        expect(board.player1).to.eq(undefined);
        expect(board.player2).to.eq(undefined);
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