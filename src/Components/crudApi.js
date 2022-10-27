import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import CrudFormZodiaco from "./crudFormZodiaco";
import CrudTableZodiaco from "./crudTableZodiaco";


export default function CrudApi() {
    
    const [zodiaco,setZodiaco]= useState([])
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
