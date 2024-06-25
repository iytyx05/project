import React from "react"
import {Route, Routes} from "react-router-dom"
import HomePage from "../homePage/HomePage";
import DoctorPage from "../pages/DoctorPage";
import UslugPage from "../pages/UslugPage";


const MainRoutes = () => {
  const PUBLIC_POUTES = [
    { id: 1, link: "/home", element: <HomePage /> },
    { id: 2, link: "/doctor", element: <DoctorPage /> },
    { id: 3, link: "/service", element: <UslugPage /> },
  ];
  return (
    <Routes>
      {PUBLIC_POUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
    </Routes>
  )
}

export default MainRoutes
