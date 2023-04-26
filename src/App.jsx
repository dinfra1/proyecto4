
import { useEffect, useState } from 'react'
import './App.css'
import useListCrud from './hooks/useListCrud'
import UseCard from './components/UseCard'
import FormUser from './components/FormUser'

function App() {

  const [UpdateInfo, setUpdateInfo] = useState()
  const [formClose, setFormClose] = useState(true)
  const {Users, getUserList, postUserList, deleteUser, updateUser} = useListCrud()

  useEffect(() => {
    getUserList()
  }, [])

  const handleOpenForm = ()=>{
    setFormClose(false)
    setUpdateInfo()
  }
  
  return (
    <div className="App">
      <header className='app--header'>
        <button onClick={handleOpenForm} className='Butoom--app'>Create new user</button>
        </header>
      <FormUser
      postUserList={postUserList}
      UpdateInfo={UpdateInfo}
      updateUser={updateUser}
      setFormClose={setFormClose}
      formClose={formClose}
      setUpdateInfo={setUpdateInfo}
      />
<div className='user--container'>
  {
    Users?.map(user=>(
      <UseCard 
      key={user.id}
      user={user}
      deleteUser={deleteUser}
      setUpdateInfo={setUpdateInfo}
      setFormClose={setFormClose}
      />
    ))
  }
</div>
    </div>
  )
}

export default App
