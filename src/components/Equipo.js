import React, { Component } from 'react'
import axios from 'axios'
import {NavLink} from "react-router-dom";
import Global from '../Global';

export default class Equipo extends Component {

    state = {
        equipo: {},
        state: false
    }

    cargarEquipo = () => {
        var id = this.props.id;
        var request = "/api/Equipos/"+id
        var url = Global.url+request;
        axios.get(url).then(res => {
            this.setState({
                equipo: res.data
            })
        })
    }

    componentDidMount = () => {
        this.cargarEquipo();
    }

    componentDidUpdate = (oldProps) => {
        if (this.props.id!=oldProps.id){
            this.cargarEquipo();
        }
    }

  render() {

    return (
      <div>
        <h5>Equipo</h5>
        <div className="card text-center">
        <div className="card-header">
            {
                this.state.equipo.nombre
            }
        </div>
        <div class="card-body">
            <img style={{width: "150px"}} src={this.state.equipo.imagen}/>
            <h5 className="card-title">Champions: {this.state.equipo.champions}</h5>
            <p className="card-text">{this.state.equipo.descripcion}</p>
            <NavLink to={"/jugadores/"+this.state.equipo.idEquipo} className="btn btn btn-success">Jugadores</NavLink>
            <NavLink to="/" className="btn btn btn-primary">Volver</NavLink>
        </div>
        </div>
        </div>
    )
  }
}
