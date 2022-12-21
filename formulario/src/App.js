import { useState } from "react";
import Button from "./componentes/Button.jsx";
import Header from "./componentes/Header.jsx";
import Input from "./componentes/Input.jsx";


function App() {
  const [estadoUsuario, setEstadoUsuario] = useState('');
  const [estadoPassword, setEstadoPassword] = useState('');
  const RenderBoton = () => {if (estadoUsuario === 'usuariovalido' && estadoPassword === '252525'){
    return <Button></Button>
  }

}
  return (
    <div className="App">
      <Header titulo="Componentes y estados"></Header>
      <Input
          estadoUsuario={estadoUsuario}
          setEstadoUsuario={setEstadoUsuario}
          estadoPassword={estadoPassword}
          setEstadoPassword={setEstadoPassword}
        ></Input>
        <RenderBoton></RenderBoton>

    </div>
  );
}

export default App;
