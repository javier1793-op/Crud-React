import React from 'react'
import Table from "react-bootstrap/Table";
import CrudRow from "./crudRow";

export default function CrudTableZodiaco({zodiaco, eliminar, setToedit}){
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
                    db={el}
                    indice={indice++} 
                    key={el.id} 
                    Toedit={setToedit} 
                    eliminar={eliminar} /> )}

             </tbody>
            </Table>
    </>
  )
}