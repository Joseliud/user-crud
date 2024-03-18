import { useEffect, useState } from 'react'
import './App.css'
import useCurd from './Hook/useCurd'
import FormUser from './Componentes/FormUser'
import UserCard from './Componentes/UserCard'

function App() {

  const [formisclose, setformisclose] = useState(true)

  const [useredit, setuseredit] = useState()

  const BASEURL = 'https://users-crud.academlo.tech'
  const [ users, getUsers, createUsers, delateUsers, updateUsers] = useCurd(BASEURL)

  useEffect(() => {
    getUsers('/users/')
  }, [])

  const handleopenform = () => {
    setformisclose(false)
  }

  return (
    <div className='app'>
    <header className='app_header'>
    <h1 className='app_title'>User Crud</h1>
    <button onClick={handleopenform} className='form_btn'>Create new user</button>
    </header>
    <FormUser
      createUsers={createUsers}
      useredit={useredit}
      updateUsers={updateUsers}
      formisclose={formisclose}
      setformisclose={setformisclose}
      setuseredit={setuseredit}

    />
     <div>
      {
        users?.map(user => (
          <UserCard 
          key={user.id}
          user={user}
          delateUsers={delateUsers}
          setuseredit={setuseredit}
          updateUsers={updateUsers}
          useredit={useredit}
          handleopenform={handleopenform}
          />
        ))
      }
    </div>
  </div>    
  )
}

export default App
