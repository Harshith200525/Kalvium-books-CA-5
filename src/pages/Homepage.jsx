import { useState } from "react"
import MainContent from "../components/MainContent"
import { Link } from "react-router-dom"
import store from "../redux/Store"
import "./Homepage.css"

const Homepage = () => {
  const [searchValue, setSearchValue] = useState("")
  const [name, setName] = useState(store.getState().name)

  
  // This is the search value given by the user
  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }


  return (
    <div className="main-container">
    {/* This is the navbar which has the registration button and consists of search bar */}
      <nav>
      {/* This is the logo container */}
        <div className="logo-container">
          <img src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="Kalvium Logo" />
          <h1>Kalvium Books</h1>
        </div>
        {/* This is the search bar */}
        <div className="search-container">
          <input type="text" placeholder="Search" onChange={handleChange} />
        </div>
        {/* This is the registration button container and profile display */}
        <div className="profile-container">
          {name ? <h3>You're in, {name.toUpperCase()}</h3> : <Link to={"/register"} className="register-btn" ><button>Sign up</button></Link>}
        </div>
      </nav>
      {/* This is the main books content importing as a component and giving search value as props */}
      <div>
        <MainContent searchValue={searchValue} />
      </div>
    </div>
  )
}

export default Homepage