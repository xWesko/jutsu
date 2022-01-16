import React, { useState } from 'react'

import { Jutsu } from 'react-jutsu';

const App = () => {
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [call, setCall] = useState(false)
  const [password, setPassword] = useState('')

  const handleClick = event => {
    event.preventDefault()
    if (room && name) setCall(true)
  }



  if( call ) {
    return (

      <div className='container mt-5'>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mx-auto'>
            <h2>Conferencia: {room}</h2>
            <Jutsu
              roomName={room}
              containerStyles={{width: '100%',height: '80vh' }}
              displayName={name}
              password={password}
              onMeetingEnd={ () => setCall(false) }
              loadingComponent={<p>loading ...</p>}
              errorComponent={<p>Oops, something went wrong</p>} 
            />
          </div>
        </div>
      </div>
    
    )
  } else {
    return(
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-6 col-xxl-5 mx-auto'>
              <form>
                <div className='form-group mb-3'>
                  <label> Nombre de la sala: </label>
                  <input id='room' type='text' className="form-control" placeholder='Nombre de la sala' value={room} onChange={(e) => setRoom(e.target.value)} />
                </div>
                <div className='form-group mb-3'>
                  <label> Tu nombre: </label>
                  <input id='name' type='text' className="form-control" placeholder='Tu nombre' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='form-group mb-3'>
                  <label> Contraseña (opcional): </label>
                  <input id='password' type='text' className="form-control" placeholder='Contraseña (opcional)' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='btn btn-primary' onClick={handleClick} type='submit'>
                  Iniciar / unirse
                </button>
              </form>
          </div>
        </div>
      </div>
    )
  }
 
}

export default App