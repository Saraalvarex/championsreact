import React, { Component } from 'react'
import axios from 'axios'
import {NavLink} from "react-router-dom";
import Global from '../Global';

export default class Apuestas extends Component {

    state = {
        apuestas: [],
        status: false
    }

    cargarApuestas = () => {
        var request = "/api/Apuestas/"
        var url = Global.url+request
        axios.get(url).then(res=>{
            this.setState({
                apuestas: res.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.cargarApuestas();
    }
    
  render() {
    return (
      <div>
          <NavLink to="/realizarapuesta/" className="btn btn-danger">Realizar apuesta</NavLink>
          <h4>Local: , Visitante</h4>
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">Usuario</th>
              <th scope="col">Resultado</th>
              <th scope="col">Fecha</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
                this.state.apuestas.map((apuesta, index) => {
                    return(<tr key={index}>
                        <td>{apuesta.usuario}</td>
                        <td>{apuesta.resultado}</td>
                        <td>{apuesta.fecha}</td>
                        <td>
                          <NavLink className="btn btn-outline-info" to={"/detallesapuesta/"+apuesta.idApuesta}>Details</NavLink>
                          <NavLink className="btn btn-outline-warning" to={"/modificarapuesta/"+apuesta.idApuesta}>Modify</NavLink>
                          <NavLink className="btn btn-outline-danger" to={"/deleteapuesta/"+apuesta.idApuesta}>Delete</NavLink>
                        </td>
                    </tr>)
                })
            }
          </tbody>
        </table>
        <hr />
      </div>
    )
  }
}
