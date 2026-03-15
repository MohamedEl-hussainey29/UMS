/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaTasks, FaUsers } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { AuthContext } from "../../Context/AuthContext";
import LastVisitsChart from "../Charts/LastVisitsChart";
import NewUsersPieChart from "../Charts/NewUserPieChart";


export default function Home() {

  const {userData}:any = useContext(AuthContext)
  return (
    <>
      <div className="container">
        <div className="row my-3 mx-1 fst-italic">
          <h2>Hello, <span className="text-warning">{userData?.firstName}</span>!</h2>
        </div>
        <div className="row my-3 g-4 justify-content-around px-3">
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10 header-item rounded-2 p-3">
            <div className="d-flex align-items-center gap-3">
              <FaUsers size={50} className="text-danger"/>
              <div className="header-content">
                <h3>1.5K</h3>
                <small className="text-muted">Total Users</small>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10 header-item rounded-2 p-3">
            <div className="d-flex align-items-center gap-3">
              <AiOutlineUsergroupAdd size={50} className="text-warning"/>
              <div className="header-content">
                <h3>30</h3>
                <small className="text-muted">New Users</small>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10 header-item rounded-2 p-3">
            <div className="d-flex align-items-center gap-3">
              <FaTasks size={50} className="text-primary"/>
              <div className="header-content">
                <h3>950</h3>
                <small className="text-muted">Tasks</small>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-10 header-item rounded-2 p-3">
            <div className="d-flex align-items-center gap-3">
              <TbReportSearch size={50} className="text-success"/>
              <div className="header-content">
                <h3>47</h3>
                <small className="text-muted">Reports</small>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row mt-4 g-4">
          <div className="col-lg-6 col-12 d-flex">
  <div className="dashboard-card p-3 w-100 h-100">
    <NewUsersPieChart />
  </div>
</div>

<div className="col-lg-6 col-12 d-flex">
  <div className="dashboard-card p-3 w-100 h-100">
    <LastVisitsChart />
  </div>
</div>

        </div>
      </div>
    </>
  )
}
