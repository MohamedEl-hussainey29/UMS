import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserForm from './../UserForm/UserForm';


interface UserFormData{
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  phone: string;
  birthDate: string;

}

export default function AddUser() {

  const navigate = useNavigate();

  const onSubmit = async (data:UserFormData)=>{
    //api call
    try {
      const response = await axios.post('https://dummyjson.com/users/add',data)
      console.log(response)
      toast.success("User is Added Successfully");
      navigate('/dashboard/users-list')

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Something Wrong happened!!")
    }
  }
  return (
    <>
      <div className="d-flex justify-content-between mx-1">
        <h3>Add User</h3>
      </div>
      <hr />
      <UserForm onSubmit={onSubmit}/>
    </>
  )
}
