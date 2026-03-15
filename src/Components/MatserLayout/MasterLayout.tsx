import Navbar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import { useEffect, useState } from 'react'

export default function MasterLayout() {

  const [collapse, setCollapse] = useState(false)

   useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCollapse(true)
      } else {
        setCollapse(false)
      }
    }

    handleResize() // run on first load
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)

  }, [])

  return (
    <div className="layout">
      <div className={`sideBar ${collapse ? "collapsed" : ""}`}>
        <SideBar collapse={collapse} setCollapse={setCollapse}/>
      </div>
      <div className={`main-content ${collapse ? "expanded" : ""}`}>
        <Navbar/>
        <div className="page-content">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
