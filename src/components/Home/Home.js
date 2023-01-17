import React, { useContext } from 'react'
import Main from './Main/Main'
import Sidebar from './Sidebar/Sidebar'
import './css/home.css'
import { store } from '../../App'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const {token} = useContext(store)
  const navigate = useNavigate()
  if(!token){
    navigate('/login')
  }


  return (
    <div className='home'>
      <div className='main'>
        <Main />
        <Sidebar />
      </div>
    </div>
  )
}

export default Home