import React from "react";
import Button from "react-bootstrap/Button";
import {FiEdit,FiTrash2 } from "react-icons/fi";

export default function CrudRow({db, indice, Toedit, eliminar}) {
    const {nombre, fecha, compatibilidad, id}=db
  return (
    <>
    <tr>
       <td>{indice} </td>
      <td>{nombre} </td>
      <td>{fecha} </td>
      <td>{compatibilidad} </td>
      <td>
        <Button variant="success" onClick={()=>{Toedit(db)} } ><FiEdit /></Button>{" "}
        <Button variant="danger"onClick={()=>{eliminar(id)}}> <FiTrash2/> </Button>{" "}
      </td>  
    </tr>
     
    </>
  );
}
