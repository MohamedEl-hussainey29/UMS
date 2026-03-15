/* eslint-disable @typescript-eslint/no-explicit-any */
import { CgProfile } from "react-icons/cg";
import { HiOutlineUsers } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import { LuArrowLeftFromLine, LuLogOut } from "react-icons/lu";
import { TiUserAddOutline } from "react-icons/ti";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function SideBar({ collapse, setCollapse }:any) {
    const { userData }: any = useContext(AuthContext);

    const togglecollapse = () => {
        setCollapse(!collapse);
    }

    const handleMenuClick = () => {
        if (window.innerWidth < 768) {
            setCollapse(true)
        }
    }

    return (
        <div className="sidebarContainer vh-100">
            <Sidebar collapsed={collapse} className="vh-100">
            <LuArrowLeftFromLine onClick={togglecollapse} size={25} className={`mx-3 my-2 toggleIcon ${collapse ? "collapsed" : ""}`} />
            <div className="text-center my-2">
                <img src={userData?.image} alt="profile" className="rounded-circle w-50"/>
                <h5 className="my-1">{userData?.firstName}</h5>
                <h6 className="text-warning">Admin</h6>
            </div>
            <Menu className="text-center">
                <MenuItem icon={<IoHomeOutline />} component={<NavLink to="/dashboard" end />} onClick={handleMenuClick}> Home</MenuItem>
                <MenuItem icon={<HiOutlineUsers />} component={<NavLink to="/dashboard/users-list" />} onClick={handleMenuClick}> Users</MenuItem>
                <MenuItem icon={<TiUserAddOutline />} component={<NavLink to="/dashboard/add-user" />} onClick={handleMenuClick}> Add User</MenuItem>
                <MenuItem icon={<CgProfile  />} component={<NavLink to="/dashboard/profile" />} onClick={handleMenuClick}> Profile</MenuItem>
                <MenuItem icon={<LuLogOut />} component={<NavLink to="/" />}> Logout</MenuItem>

            </Menu>
        </Sidebar>
    </div>
  )
}
