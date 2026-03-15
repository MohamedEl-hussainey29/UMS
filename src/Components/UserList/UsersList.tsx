import axios from "axios";
import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


interface User{
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;

}
export default function UsersList() {

  const [users , setUsers] = useState<User[]>([]);
  const [userId, setUserId] = useState<number | null>(null)
  const [userData, setUserData] = useState<User | null>(null)

  const navigate = useNavigate()

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (user:User) =>{
    setShow(true);
    setUserId(user.id)
    setUserData(user)
  } 

  const deleteUser = async()=>{
    try {
      await axios.delete(`https://dummyjson.com/users/${userId}`)
      handleClose()
      toast.success("User is deleted Successfully")
      getUsers()
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong!")
    }
  }

  const getUsers = async()=>{
    try {
      const response = await axios.get('https://dummyjson.com/users')
      setUsers(response?.data?.users || null)
    } catch (error) {
      console.log(error)
    }
  }

  const moveToAddUser = ()=>{
    navigate('/dashboard/add-user')

  }
  const moveToUpdateUser = (id:number)=>{
  navigate(`/dashboard/update-user/${id}`)
}

  useEffect(()=>{
    getUsers()
  },[])
  
  return (
    <div>
      <div className="d-flex justify-content-between m-2">
        <h3>Users List</h3>
        <button onClick={moveToAddUser} className="btn btn-warning text-white">Add New User</button>
      </div>
      <hr />
      <div className="table-responsive">
        <Table className="text-nowrap">
          <thead>
            <tr className="text-center">
              <th className="text-secondary">#</th>
              <th className="text-secondary">Avatar</th>
              <th className="text-secondary">First Name</th>
              <th className="text-secondary">Last Name</th>
              <th className="text-secondary">Email</th>
              <th className="text-secondary">Phone</th>
              <th className="text-secondary">Birth Date</th>
              <th className="text-secondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) =>(
              <tr key={user?.id} className="text-center">
              <td>{user?.id}</td>
              <td><img src={user?.image} alt="img" className="w-25"  style={{ minWidth: "60px" }}/></td>
              <td>{user?.firstName}</td>
              <td>{user?.lastName}</td>
              <td>{user?.email}</td>
              <td>{user?.phone}</td>
              <td>{user?.birthDate}</td>
              <td>
                <FiEdit onClick={()=>moveToUpdateUser(user.id)} className="text-warning mx-2" size={25}/>
                <FaRegTrashAlt onClick={()=>handleShow(user)} className="text-danger mx-2" size={25}/>
              </td>
            </tr>
            ))}
            
          </tbody>
        </Table>
      </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm delete {userData?.firstName} {userData?.lastName} !</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to continue? </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={deleteUser}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
