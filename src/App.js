import React, { useState } from 'react'

import { Jutsu } from 'react-jutsu'

const App = () => {
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [call, setCall] = useState(false)
  const [password, setPassword] = useState('')

  const handleClick = event => {
    event.preventDefault()
    if (room && name) setCall(true)
  }


  return(

    <div className='container mt-5'>

      <div className='row'>
        <div className='col-md-6 mx-auto'>
          { call ? (
            <Jutsu
              roomName={room}
              displayName={name}
              password={password}
              onMeetingEnd={() => console.log('Meeting has ended')}
              loadingComponent={<p>loading ...</p>}
              errorComponent={<p>Oops, something went wrong</p>} />
          ) : (
            <form>
              <div className='form-group mb-3'>
                <label> Nombre de la sala: </label>
                <input id='room' type='text' class="form-control" placeholder='Nombre de la sala' value={room} onChange={(e) => setRoom(e.target.value)} />
              </div>
              <div className='form-group mb-3'>
                <label> Tu nombre: </label>
                <input id='name' type='text' class="form-control" placeholder='Tu nombre' value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className='form-group mb-3'>
                <label> Contraseña (opcional): </label>
                <input id='password' type='text' class="form-control" placeholder='Contraseña (opcional)' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button className='btn btn-primary' onClick={handleClick} type='submit'>
                Iniciar / unirse
              </button>
            </form>
          ) }
        </div>
      </div>
    </div>
  )
 
}

export default App