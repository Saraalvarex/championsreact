import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import { NavLink } from "react-router-dom";
import { Navigate } from 'react-router-dom';

export default class DeleteApuesta extends Component {
    state = {
        statusGet: false,
        statusDelete: false,
        apuesta: {}
    }

    cargarApuesta = () => {
        var id = this.props.id
        var request = "/api/Apuestas/"+id
        var url = Global.url+request
        axios.get(url).then(res =>{
            this.setState({
                apuesta: res.data,
                statusGet: false
            })
        })
    }

    deleteApuesta = ()=>{
        var id = this.props.id
        var request = "/api/Apuestas/"+id
        var url = Global.url+request
        axios.delete(url).then(res=>{
            this.setState({
                statusDelete: true
            })
        })
    }

    componentDidMount = () => {
        this.cargarApuesta();
    }

  render() {
    if (this.state.statusDelete==true){
        return (<Navigate to="/apuestas"/>)
      }
    return (
      <div>
          <h1>Eliminar apuesta</h1>
          <div className="card text-center">
            <div className="card-header">
                Apuesta nº {this.state.apuesta.idApuesta}
            </div>
            <div className="card-body">
                <h5 className="card-title">Usuario: {this.state.apuesta.usuario}</h5>
                <p className="card-text">Fecha: {this.state.apuesta.fecha}.</p>
                <p className="card-text">Resultado: {this.state.apuesta.resultado}.</p>
                <button className='btn btn-danger' onClick={this.deleteApuesta}>
                    Eliminar
                </button>
                <NavLink to="/apuestas/" className="btn btn-success">Volver</NavLink>
            </div>
            </div>
      </div>
    )
  }
}
