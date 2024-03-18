import './Syles/UserCard.css'

const UserCard = ({user, delateUsers, setuseredit, handleopenform}) => {


    const handleDelete = () => {
        delateUsers('/users/', user.id)
    }

    const handleEdit = () => {
        setuseredit(user)
        handleopenform()
    }

  return (
    <article>
      <h2 className='user_name'>{`${user.first_name} ${user.last_name}`}</h2>
      <hr className="user_hr"/>
      <ul>
        <li className="user_email"><span className='user_span'>Email: </span><span>{user.email}</span></li>
        <li className="user_dt"><span className='user_span'>Birthday: </span><span>{user.birthday}</span></li>
      </ul>
      <hr className="user_hr"/>
      <button className='user_delete' onClick={handleDelete} >Delete</button>
      <button className='user_edit' onClick={handleEdit}>Edit</button>
    </article>
  )
}

export default UserCard