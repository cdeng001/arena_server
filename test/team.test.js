import Team from '../src/team/team'
import Unit from '../src/unit/unit'
import {TEAM_MAX_COUNT} from '../src/constants'

import chai from 'chai'
const expect = chai.expect

describe("team initialization", () => {
    const fullTeam = [
        new Unit(0),
        new Unit(1),
        new Unit(2),
        new Unit(3),
        new Unit(4),
    ]
    const notFullTeam = [
        new Unit(0),
        new Unit(1),
        new Unit(2),
    ]
    const nonUnitTeam = [
        {},{},{},{},{},
    ]

    it("should add units to the team", () => {
        const team = new Team(fullTeam)

        expect(team.max).to.eq(5)
        expect(team.units).to.eq(fullTeam)
    })

    it("should return Error for undefined/non-Array argument", () => {
        let team = new Team()
        expect(team).to.be.an.instanceOf(Error)
        expect(team.message).to.be.a("string").that.is.eq("Must pass in Array to Team constructor.")

        team = new Team({})
        expect(team).to.be.an.instanceOf(Error)
        expect(team.message).to.be.a("string").that.is.eq("Must pass in Array to Team constructor.")
    })

    it("should return Error if array doesn't have enough Units", () => {
        let team = new Team(notFullTeam)
        expect(team).to.be.an.instanceOf(Error)
        expect(team.message).to.be.a("string").that.is.eq(`Must pass in ${TEAM_MAX_COUNT} Units to constructor.`)
    })

    it("should return Error if elements in array are not Unit", () => {
        let team = new Team(nonUnitTeam)
        expect(team).to.be.an.instanceOf(Error)
        expect(team.message).to.be.a("string").that.is.eq("All elements in Array must be Units.")
    })
})