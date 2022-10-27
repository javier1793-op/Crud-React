
import CrudApi from "./Components/crudApi";
import CrudApp from "./Components/crudApp";


function App() {
  return (
    <>
      <h1>Ejercicios Crud con  API</h1>
      <CrudApi/>
      <hr/>
      <h1>Ejercicios Crud sin API</h1>
      <CrudApp/>
    </>
  );
}

export default App;
