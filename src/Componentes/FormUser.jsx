import { useEffect } from "react"
import { useForm } from "react-hook-form"
import './Syles/FormUser.css'

const FormUser = ({createUsers, useredit, updateUsers, setuseredit, formisclose, setformisclose}) => {

    const { handleSubmit, register, reset } = useForm()

    useEffect(() => {
        reset(useredit)
    }, [useredit])

    const submit = data => {
      if(useredit){
        updateUsers('/users/', useredit.id, data)
        setuseredit()
      } else {
        createUsers('/users/', data)
      }
      setformisclose(true)  

        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        })
    }


    const handleformclose = () => {
      setformisclose(true)
      reset({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: ''
    })
      setuseredit()

    }
  
    return (
    <div className={`form_container ${formisclose && 'form_close'}`}> 
       <form className="form" onSubmit={handleSubmit(submit)}>
        <header className="form_header">
          <h2 className="form_title"> User Form</h2>
          <div className="form_exit" onClick={handleformclose}> x </div>
        </header>
      <label className="form_label">
        <span className="form_field">Email</span>
        <input className="form_input" {...register('email')} type="email" />
      </label>
      <label className="form_label">
        <span className="form_field">Password</span>
        <input className="form_input" {...register('password')} type="password" />
      </label>
      <label className="form_label">
        <span className="form_field">First Name</span>
        <input className="form_input" {...register('first_name')} type="text" />
      </label>
      <label className="form_label">
        <span className="form_field">Last name</span>
        <input className="form_input" {...register('last_name')} type="text" />
      </label>
      <label className="form_label">
        <span className="form_field">birthday</span>
        <input className="form_input" {...register('birthday')} type="date" />
      </label>
      <button className="form_btn">Submit</button>
    </form>
    </div>
  )
}

export default FormUser
