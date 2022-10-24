import React from 'react'
import Table from "react-bootstrap/Table";
import CrudRow from "./crudRow";

export default function CrudTableZodiaco({zodiaco}){
    let indice=1
  return(
    <>
    <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Fecha Inicio</th>
                  <th>Compatiblidad</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                
                {zodiaco.map(el=><CrudRow 
                    nombre={el.nombre}
                    fecha={el.fecha}
                    compatibilidad={el.compatibilidad}
                    indice={indice++}  /> )}

             </tbody>
            </Table>
    </>
  )
}