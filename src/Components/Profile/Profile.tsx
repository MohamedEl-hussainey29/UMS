import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import UserForm from "../UserForm/UserForm";
import axios from "axios";


interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  phone: string;
  birthDate: string;
  image: string;
}
export default function Profile() {

  
  const [userData , setUserData] = useState<User | null>(null)

  const authContext = useContext(AuthContext)
  const user = authContext?.userData

  const getUserData = async ()=>{
        const response = await axios.get(`https://dummyjson.com/users/${user?.id}`)
        setUserData(response?.data)
    }

  useEffect(()=>{
  if(user?.id){
    getUserData()
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[user])

  return (
    <>
          <div className="d-flex justify-content-between mx-1">
            <h3>Profile</h3>
          </div>
          <hr />
          {userData && (
  <div className="profile-card position-relative">

    <div className="profileImage">
      <img src={userData.image} alt="profile" className="profile-avatar" />
    </div>

    <UserForm defaultValues={userData} readOnly />
    
  </div>
)}
          
        </>
  )
}
