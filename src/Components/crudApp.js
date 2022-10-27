import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import CrudFormZodiaco from "./crudFormZodiaco";
import CrudTableZodiaco from "./crudTableZodiaco";


const zodiacos = [
  {
    id: 1,
    nombre: "Aries",
    fecha: "18 Abril",
    compatibilidad: "Geminis",
  },
  {
    id: 2,
    nombre: "Tauro",
    fecha: "13 Mayo",
    compatibilidad: "Cancer",
  },
  {
    id: 3,
    nombre: "Geminis",
    fecha: "21 Junio",
    compatibilidad: "Libra",
  },
  {
    id: 4,
    nombre: "Cancer",
    fecha: "20 Julio",
    compatibilidad: "Tauro",
  },
  {
    id: 5,
    nombre: "Leo",
    fecha: "20 Agosto",
    compatibilidad: "Aries",
  },
  {
    id: 6,
    nombre: "Virgo",
    fecha: "16 Septiembre",
    compatibilidad: "Sagitario",
  },
  {
    id: 7,
    nombre: "Virgo",
    fecha: "16 Septiembre",
    compatibilidad: "Tauro",
  },
  {
    id: 8,
    nombre: "Libra",
    fecha: "30 Octubre",
    compatibilidad: "Geminis",
  },
  {
    id: 9,
    nombre: "Escorpio",
    fecha: "23 Noviembre",
    compatibilidad: "Cancer",
  },
  {
    id: 10,
    nombre: "Ofiuco",
    fecha: "29 Nomviembre",
    compatibilidad: "Piscis",
  }
  
];

export default function CrudApp() {
    
    const [zodiaco,setZodiaco]= useState(zodiacos)
    const [toedit,setToedit]= useState(null)

  const addZodiaco=(data)=>{
    data.id=Date.now()
    setZodiaco([...zodiaco,data])
  }

  const updateZodicaco=(data)=>{
   let temporal= zodiaco.map(el=>(el.id === data.id? data: el))
   setZodiaco(temporal)
  }
 
  const deleteZodiaco=(id)=>{
    let temporal= zodiaco.filter(el=>(el.id !== id))
    setZodiaco(temporal)
  }
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <CrudFormZodiaco agregar={addZodiaco} actualizar={updateZodicaco} Toedit={toedit} setToedit={setToedit} />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <h2>Zodiacos</h2>
            <CrudTableZodiaco zodiaco={zodiaco} setToedit={setToedit} eliminar={deleteZodiaco} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
