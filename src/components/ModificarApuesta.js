import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Navigate } from 'react-router-dom';

export default class ModificarApuesta extends Component {
    idapuesta = React.createRef();
    usuario = React.createRef();
    resultado = React.createRef();
    fecha = React.createRef();

    state = {
        statusGet: false,
        statusPut: false,
        apuesta: {}
    }

    cargarInputs = () => {
        var id = this.props.id
        var request = "/api/Apuestas/"+id
        var url = Global.url+request
        axios.get(url).then(res=>{
            this.setState({
                statusGet: true,
                apuesta: res.data
            });
        });
    }

    modificarApuesta = (e) =>{
    e.preventDefault();
    var id = this.props.id
    var request = "/api/Apuestas/"+id
    var url = Global.url+request
    
       var idap = this.idapuesta.current.value;
       var user = this.usuario.current.value;
       var resu = this.resultado.current.value;
       var fecha = this.fecha.current.value;

       var data = {
            idApuesta: idap,
            usuario: user,
            resultado: resu,
            fecha: fecha
       }
       
       axios.put(url, data).then(res=> {
            this.setState({
                statusPut: true
            })
       })
    }

    componentDidMount = () => {
        this.cargarInputs()
    }
  render() {
    if (this.state.statusPut==true){
        return (<Navigate to="/apuestas"/>)
      }
    return (
      <div>
          <form className="">
          <label>ID APUESTA</label>
          <input
            ref={this.idapuesta}
            type="number"
            className="form-control"
            defaultValue={this.state.apuesta.idApuesta}
          disabled/>
         <label>USUARIO</label>
          <input
            ref={this.usuario}
            className="form-control"
            defaultValue={this.state.apuesta.usuario}
          />
          <label>RESULTADO</label>
          <input
            ref={this.resultado}
            className="form-control"
            defaultValue={this.state.apuesta.resultado}
          />
          <label>Fecha</label>
          <input
            ref={this.fecha}
            className="form-control"
            defaultValue={this.state.apuesta.fecha}
          />
           {/* "defaultValue en los PUT para poder modificar" */}
          <hr></hr>
          <button className='btn btn-info' onClick={this.modificarApuesta}>
                Modificar
            </button>
        </form>
      </div>
    )
  }
}
