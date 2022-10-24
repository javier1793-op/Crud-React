import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


export default function CrudFormZodiaco({ nombre }) {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Zodiaco</Form.Label>
          <Form.Control type="text" placeholder="Ingrese Nombre.." />
          <Form.Label>Desde</Form.Label>
          <Form.Control type="text" placeholder="Ingrese Fecha Inicio" />
          <Form.Label> Compatiblidad</Form.Label>
          <Form.Select>
            {nombre.map((el) => (
              <option>{el.nombre} </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Cargar
        </Button>
      </Form>

    </>
  );
}
