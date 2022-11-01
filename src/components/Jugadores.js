import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios'
import {NavLink} from "react-router-dom";
export default class Jugadores extends Component {

    state = {
        jugadores: [],
        status: false
    }

    cargarJugadores = () => {
        var id = this.props.id;
        console.log(id)
        var request = "/api/Jugadores/JugadoresEquipo/"+id
        var url = Global.url+request;
        axios.get(url).then(res => {
            console.log(res.data)
            this.setState({
                jugadores: res.data
            })
        })
    }

    componentDidMount = () => {
        this.cargarJugadores();
    }

  render() {
    return (
      <div>
          <h4>Jugadores</h4>
      <table className="table table-primary table-hover">
        {" "}
        {/* Añade al className color con table-primary, secondary, success, danger, warning
      info, ligth y dark 😎  */}
        {/* Si quieres que resalten tonalidades distintas añade también al className:
          table-striped  --> Las filas resaltan
          table-striped-columns  --> Si lo prefieres en columnas 
          table-hover  --> Si quieres que resalten on mouse over
      */}
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Imagen</th>
            <th scope="col">Detalles</th>
          </tr>
        </thead>
        <tbody>
            {
                this.state.jugadores.map((jugador, index) => {
                    return(<tr key={index}>
                        <th scope="row">{jugador.nombre}</th>
                        <td><img style={{width: "100px"}} src={jugador.imagen}/></td>
                        <td><NavLink className="btn btn-danger" to={"/detalles/"+jugador.idJugador}>Detalles</NavLink></td>
                    </tr>
                    )
                })
            }
          
        </tbody>
      </table>
      <hr /></div>
    )
  }
}
