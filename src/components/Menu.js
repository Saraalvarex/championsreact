import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "../Global";
import axios from 'axios'

export default class MenuRutas extends Component {

    state = {
        equipos: [],
        status: false
    }

    cargarSelect = () => {
        var request = "/api/Equipos"
        
        var url = Global.url+request;
        axios.get(url).then(res=>{
            console.log(res.data)
            this.setState({
                equipos: res.data
            })
        })
    }

    componentDidMount = () => {
        this.cargarSelect();
    }

  render() {
    return (    
      <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
      {/* navbar-dark bg-dark o custom -> style={{backgroundColor: "#e3f2fd"}} pero dejando className="navbar navbar-expand-lg" */}
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Champions
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/apuestas/">
                  Apuestas
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Equipos
                </NavLink>
                <ul className="dropdown-menu">
                  {
                      this.state.equipos.map((equipo, index) => {
                        return (<li key={index}>
                            <NavLink to={"/equipo/"+equipo.idEquipo}>{equipo.nombre}</NavLink>
                        </li>)
                      })
                  }
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
