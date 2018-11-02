import unitConfig from './unitConfig'

export default class Unit{
    constructor(uid){
        if(uid < 0 || uid > unitConfig.length){
            return new Error("Invaild Unit Id is out of bounds.")
        }
        this.uid = uid

        //populate general data about a character
        const unitData = unitConfig[uid]
        this.name = unitData.name
        this.healthBase = unitData.healthBase
        this.manaBase = unitData.manaBase
        this.strength = unitData.strength
        this.intelligence = unitData.intelligence
        this.dexterity = unitData.dexterity
        this.movement = unitData.movement

        this.currentHealth = this.healthBase
        this.currentMana = this.manaBase
        this.bonusStrength = 0
        this.bonusIntelligence = 0
        this.bonusDexterity = 0
        this.bonusMovement = 0
    }

    isDead(){
        return this.currentHealth <= 0
    }
}