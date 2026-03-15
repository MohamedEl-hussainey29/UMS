import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import UserForm from "../UserForm/UserForm";


interface UserData{
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  phone: string;
  birthDate: string;

}

export default function UpdateUser() {

    const {id} = useParams();
    const [userData , setUserData] = useState<UserData | null>(null)

    const getUserData = async ()=>{
        const response = await axios.get(`https://dummyjson.com/users/${id}`)
        setUserData(response?.data)
    }


  const onSubmit = async (data:UserData)=>{
    //api call
    try {
      const response = await axios.put(`https://dummyjson.com/users/${id}`,data)
      console.log(response)
      toast.success("User is updated Successfully");

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Something Wrong happened!!")
    }
  }

    useEffect(()=>{
        getUserData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <>
      <div className="d-flex justify-content-between mx-1">
        <h3>Update User</h3>
      </div>
      <hr />
      {userData &&
        <UserForm onSubmit={onSubmit} defaultValues={userData}/>
      }
      
    </>
  );
}