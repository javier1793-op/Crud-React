import React from "react";
import Button from "react-bootstrap/Button";
import {FiEdit,FiTrash2 } from "react-icons/fi";

export default function CrudRow({nombre, fecha, compatibilidad, indice}) {
    
  return (
    <>
    <tr>
       <td>{indice} </td>
      <td>{nombre} </td>
      <td>{fecha} </td>
      <td>{compatibilidad} </td>
      <td>
        <Button variant="success"><FiEdit /></Button>{" "}
        <Button variant="danger"> <FiTrash2/> </Button>{" "}
      </td>  
    </tr>
     
    </>
  );
}
