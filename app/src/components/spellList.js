import React from 'react'
import Spell from "./Spell"
import { connect } from 'react-redux'


function SpellList(props){
    return (
        <>
        <h3>HERE'S THE SPELLS</h3>
        {props.spells.map(spell => {
        return <Spell key={spell.index} spell={spell}/>
        })}
        </>
    )
}
function mapStateToProps(state) {
    return {
        spells: state.spells
    }
}
export default connect(mapStateToProps, {})(SpellList)