import React from "react";
import { useState, useEffect} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

const initialZodiaco = {
  id: null,
  nombre: "",
  fecha: "",
  compatibilidad: "",
};

export default function CrudFormZodiaco({ agregar, actualizar, Toedit, setToedit }) {
  const [form, setForm] = useState(initialZodiaco);
  const [alerta, setAlerta] = useState(false);

  useEffect(
    ()=>{
      if(Toedit){
        setForm(Toedit)
      } else{
        setForm(initialZodiaco)
      }
    }
  ,[Toedit])

  const changeSubmit = (e) => {
    e.preventDefault();

    if(!form.nombre || !form.fecha || !form.compatibilidad){
      setAlerta(true)
    }

    if(!form.id){
      {agregar(form)}
    }else{
      {actualizar(form)}
    }
  };

  const onchange = (e) => {
    setForm({
      ...form,[e.target.name]:e.target.value
    })
  };

  const changedelete = () => {
    setForm(initialZodiaco)
  };
    
  return (
    <>
      <Form onSubmit={changeSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Zodiaco</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            placeholder="Ingrese Nombre.."
            onChange={onchange}
            value={form.nombre}
          />
          <Form.Label>Desde</Form.Label>
          <Form.Control
            type="text"
            name="fecha"
            placeholder="Ingrese Fecha Inicio.."
            onChange={onchange}
            value={form.fecha}
          />
          <Form.Label> Compatiblidad</Form.Label>
          <Form.Control
            type="text"
            name="compatibilidad"
            placeholder="Ingrese Compatibilidad.."
            onChange={onchange}
            value={form.compatibilidad}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Cargar
        </Button>
        <Button 
        variant="secondary"
        onClick={changedelete}
        >Limpiar</Button>
      </Form>
      <br />
      {alerta ? (
        <Alert key={"danger"} variant={"danger"}>
          Debe completar todos los campos!
        </Alert>
      ) : (
        ""
      )}
    </>
  );
}
