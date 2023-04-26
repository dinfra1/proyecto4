import { useForm } from "react-hook-form"
import dafaultDate from "../utils/dafaultDate"
import { useEffect } from "react"
import "./styles/useform.css"

const FormUser = ({postUserList, UpdateInfo, updateUser, setUpdateInfo, setFormClose, formClose}) => {
    
    const {register, handleSubmit, reset} = useForm()

    useEffect(() => {
      reset(UpdateInfo)

    }, [UpdateInfo])
    


    const submit= data =>{
        if(UpdateInfo){
          updateUser(UpdateInfo.id, data)
          setUpdateInfo()
        }else{
          postUserList(data)
        }
        
        reset(dafaultDate)
    }

    const handleExit = (data)=>{
        setFormClose(true)
        reset(dafaultDate)
        setUpdateInfo(data)
    }

  return (
    <div className = {`form--container ${formClose && 'close'}`}>
       <form className="form" onSubmit={handleSubmit(submit)}>
      <div className="header--title">
          <h3 className="form--title">{UpdateInfo ? 'Update information of User' : 'Create new User '}</h3>
          <span onClick={handleExit} className="form--exit"><i className='bx bx-window-close'></i></span>
        </div>
      <div className="form--item">
        <label className="form--label" htmlFor="email">Email</label>
        <input className="form--input" {...register('email')}type="email" id="email" placeholder="Enter your email" />
      </div>
      <div className="form--item">
        <label className="form--label" htmlFor="password">Password</label>
        <input className="form--input"{...register('password')} type="password" id="password" placeholder="Enter your password" />
      </div> 
      <div className="form--item">
        <label className="form--label" htmlFor="first_name">First Name</label>
        <input className="form--input" {...register('first_name')} type="text" id="first_name" placeholder="Enter your first name" />
      </div> 
      <div className="form--item">
        <label className="form--label" placeholder="" htmlFor="last_name">Last Name</label>
        <input className="form--input" {...register('last_name')} type="text" id="last_name" placeholder="Enter your last name" />
      </div>
      <div className="form--item">
        <label className="form--label" htmlFor="birthday">Birthday</label>
        <input className="form--input" {...register('birthday')} type="date" id="birthday" placeholder="" />
      </div>
      <button onClick={handleExit} className="btn">{UpdateInfo ? 'Update' : 'Create'}</button>
    </form>
    </div>
  )
}

export default FormUser