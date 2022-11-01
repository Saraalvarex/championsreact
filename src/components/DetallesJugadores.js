import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios'
import {NavLink} from "react-router-dom";

export default class DetallesJugadores extends Component {

    state = {
        jugador: {},
        state: false
    }

    cargarJugador = () => {
        var id = this.props.id
        var request = "/api/Jugadores/"+id
        var url = Global.url+request
        axios.get(url).then(res =>{
            this.setState({
                jugador: res.data,
                status: false
            })
        })
    }

    componentDidMount = () => {
        this.cargarJugador();
    }

  render() {
    return (
      <div>
          <h1>Detalles jugadores</h1>
          <div className="card text-center">
            <div className="card-header">
                {this.state.jugador.nombre}
            </div>
            <div className="card-body">
                <img style={{width: "100px"}} src={this.state.jugador.imagen}/>
                <h5 className="card-title">{this.state.jugador.posicion}</h5>
                <p className="card-text">Fecha nacimiento: {this.state.jugador.fechaNacimiento}.</p>
                <p className="card-text">País: {this.state.jugador.pais}.</p>
                <NavLink to={"/jugadores/"+this.state.jugador.idEquipo} className="btn btn-success">Jugadores</NavLink>
            </div>
            </div>
      </div>
    )
  }
}
