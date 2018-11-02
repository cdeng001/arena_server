import Unit from '../unit/unit'
import {TEAM_MAX_COUNT} from '../constants'

export default class Team{
    constructor(units){
        this.max = TEAM_MAX_COUNT

        if( !(units instanceof Array) ){
            return new Error("Must pass in Array to Team constructor.")
        }

        if( units.length !== this.max ){
            return new Error(`Must pass in ${this.max} Units to constructor.`)
        }

        let allUnits = true
        units.forEach(unit => {
            //logical XOR
            if( !(unit.isPrototypeOf(Unit)) ? !(unit instanceof Unit) : (unit instanceof Unit)){
                allUnits = false
            }
        });
        if( !allUnits ){
            return new Error("All elements in Array must be Units.")
        }

        this.units = units
    }

    allUnitsDead(){
        let allDead = true
        for(let i=0; i<this.units.length; i++){
            let unit = this.units[i]
            if( !unit.isDead() ){
                allDead = false
                break
            }
        }
        return allDead;
    }
}