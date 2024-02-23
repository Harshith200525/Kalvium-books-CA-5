import { Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage"
import Registration from "../pages/Registration"

const AllRoutes = () => {
  // Making the routes
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Registration />} />
    </Routes>
  )
}

export default AllRoutes