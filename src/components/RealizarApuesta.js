import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios'
import {Navigate} from 'react-router-dom';

export default class RealizarApuesta extends Component {

    id = React.createRef();
    user = React.createRef();
    resu = React.createRef();
    fecha = React.createRef();

    state = {
        mensaje: "",
        status: false
    }
    //EN axios EL METODO POST RECIBE DOS PARAMENTROS
    //1) URL DEL API
    //2) OBJETO JSON PARA EL API
    insertarApuesta = (e)=> {
        e.preventDefault();
        var request = "/api/Apuestas/"
        var url = Global.url+request
        var id = parseInt(this.id.current.value);
        var user = this.user.current.value;
        var resu = this.resu.current.value;
        var fecha = this.fecha.current.value;

        var data = {
            idApuesta: id,
            usuario: user,
            resultado: resu,
            fecha: fecha
        }

        axios.post(url, data).then(res=>{
            this.setState({
                mensaje: "Insertado!",
                status: true
            });
        });
    }

  render() {
      if(this.state.status==true){
        return(<Navigate to="/apuestas"/>)
      }
    return (
      <div>
          <form className="">
          <label>ID APUESTA</label>
          <input
            ref={this.id}
            type="number"
            className="form-control"
            defaultValue=""
          />
         <label>USUARIO</label>
          <input
            ref={this.user}
            className="form-control"
            defaultValue=""
          />
          <label>RESULTADO</label>
          <input
            ref={this.resu}
            className="form-control"
            defaultValue=""
          />
          <label>Fecha</label>
          <input
            ref={this.fecha}
            className="form-control"
            defaultValue="defaultValue en los PUT para poder modificar"
          />
          <hr></hr>
          <button className='btn btn-info' onClick={this.insertarApuesta}>
                Nueva apuesta
            </button>
        </form>
      </div>
    )
  }
}
