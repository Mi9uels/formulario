
const Input = ({estadoUsuario, setEstadoUsuario, estadoPassword, setEstadoPassword}) => {

    return (
      <div>
          <form className='userForm'>
            <label>Usuario</label>
            <input type="text" placeholder="Ingresa tu usuario" value={estadoUsuario} onChange={(event)=>setEstadoUsuario(event.target.value)}></input>
            <label>Contraseña</label>
            <input type="password" placeholder="Ingresa tu contraseña" value={estadoPassword} onChange={(event)=>setEstadoPassword(event.target.value)}></input>
          </form>
      </div>
    )
  }
  
  export default Input