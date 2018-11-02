import Unit from '../src/unit/unit'
import unitConfig from '../src/unit/unitConfig'
import TestUnit from '../src/unit/playable/test'
import * as CONSTANTS from '../src/constants'

import chai from 'chai'
const expect = chai.expect

describe("unit initializations", () => {
    it("should create correct unit", () => {
        const testUnit = new TestUnit()
        const testUnitConfig = unitConfig[CONSTANTS.TEST_UNIT]

        expect(testUnit.name).to.be.eq(testUnitConfig.name)
    })
})