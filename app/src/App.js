import React, {useEffect} from 'react';
import SpellList from './components/spellList'
import { connect } from "react-redux"
import { fetchSpells } from './store/actions/spellsActions'

import './App.css';

function App({ fetchSpells, loadingSpells, errorMessage}) {
  useEffect(() => {
    fetchSpells()
  }, [fetchSpells])
  return (
    <div className="App">
      <h1>Welcome to the worlds 104,000th DnD Spell List!</h1>
      <h2>We now have ALL 319 spells!</h2>
      {!loadingSpells ? <SpellList/> : <div>....Searching in SpellBook</div>}
      {errorMessage !== "" ? <div>{errorMessage}</div> : null}
      

    </div>
  );
}
function mapStateToProps(state){
  return {
    loadingSpells: state.loadingSpells,
    errorMessage: state.errorMessage
    
  }
}
export default connect(mapStateToProps, { fetchSpells })(App);
