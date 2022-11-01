import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import {NavLink} from "react-router-dom";

export default class DetallesApuesta extends Component {

    state = {
        apuesta: {},
        state: false
    }

    cargarApuesta = () => {
        var id = this.props.id
        var request = "/api/Apuestas/"+id
        var url = Global.url+request
        axios.get(url).then(res =>{
            this.setState({
                apuesta: res.data,
                status: false
            })
        })
    }

    componentDidMount = () => {
        this.cargarApuesta();
    }

  render() {
    return (
      <div>
          <h1>Detalles apuesta</h1>
          <div className="card text-center">
            <div className="card-header">
                Apuesta nº {this.state.apuesta.idApuesta}
            </div>
            <div className="card-body">
                <h5 className="card-title">Usuario: {this.state.apuesta.usuario}</h5>
                <p className="card-text">Fecha: {this.state.apuesta.fecha}.</p>
                <p className="card-text">Resultado: {this.state.apuesta.resultado}.</p>
                <NavLink to="/apuestas/" className="btn btn-success">Apuestas</NavLink>
            </div>
            </div>
      </div>
    )
  }
}
