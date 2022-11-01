import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Apuestas from './components/Apuestas';
import DeleteApuesta from './components/DeleteApuesta';
import DetallesApuesta from './components/DetallesApuesta';
import DetallesJugadores from './components/DetallesJugadores';
import Equipo from './components/Equipo';
import Home from './components/Home';
import Jugadores from './components/Jugadores';
import MenuRutas from './components/Menu';
import ModificarApuesta from './components/ModificarApuesta';
import RealizarApuesta from './components/RealizarApuesta';


export default class Router extends Component {
  render() {

    function EquipoElement() {
        var {idequipo} = useParams();
        return(<Equipo id={idequipo}></Equipo>)
    }

    function JugadoresElement() {
        var {idequipo} = useParams();
        return(<Jugadores id={idequipo}></Jugadores>)
    }

    function DetallesJugadoresElement() {
      var {idjugador} = useParams();
      return (<DetallesJugadores id={idjugador}></DetallesJugadores>)
    }

    function DetallesApuestaElement(){
      var {idapuesta} = useParams();
      return (<DetallesApuesta id={idapuesta}></DetallesApuesta>)
    }

    function ModificarApuestaElement(){
      var {idapuesta} = useParams();
      return (<ModificarApuesta id={idapuesta}></ModificarApuesta>)
    }

    function DeleteApuestaElement(){
      var {idapuesta} = useParams();
      return (<DeleteApuesta id={idapuesta}></DeleteApuesta>)
    }

    return (
      <BrowserRouter>
        <MenuRutas/>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/equipo/:idequipo' element={<EquipoElement/>}/>
            <Route path='/jugadores/:idequipo' element={<JugadoresElement/>}/>
            <Route path='/detalles/:idjugador' element={<DetallesJugadoresElement/>}/>
            <Route path='/apuestas/' element={<Apuestas/>}/>
            <Route path='/realizarapuesta/' element={<RealizarApuesta/>}/>
            <Route path='/detallesapuesta/:idapuesta' element={<DetallesApuestaElement/>}/>
            <Route path='/modificarapuesta/:idapuesta' element={<ModificarApuestaElement/>}/>
            <Route path='/deleteapuesta/:idapuesta' element={<DeleteApuestaElement/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}