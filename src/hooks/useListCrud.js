import axios from "axios"
import { useState } from "react"
const url = "http://users-crud.academlo.tech/users/"
const useListCrud = () => {

const [Users, setUsers] = useState()

const getUserList = () => {
axios.get(url)
.then(res=>setUsers(res.data))
.catch(err=>console.log(err))
}

const postUserList = data =>{
    axios.post(url, data)
    .then(()=>getUserList())
    .catch(err=>console.log(err))
}

const deleteUser = (id)=>{
    const urlDelete = `${url}${id}/` 
    axios.delete(urlDelete)
    .then(()=>getUserList())
    .catch(err=>console.log(err))
}
const updateUser = (id, data) =>{
    const urlUpdate =  `${url}${id}/`
    axios.patch(urlUpdate, data)
    .then(()=>getUserList())
    .catch(err=>console.log(err))
}

 return {Users, getUserList, postUserList, deleteUser, updateUser}
}

export default useListCrud