import { Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import ExplorePage from "./pages/ExplorePage"
import LikesPage from "./pages/LikesPage"

import Sidebar from "./components/Sidebar"


function App() {

  return (
    <div className='flex'>
      <Sidebar />
      <div>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/likes" element={<LikesPage />} />
        </Routes>
      </div>
    </div>
  ) 
}

export default App
