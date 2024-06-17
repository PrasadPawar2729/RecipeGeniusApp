import React from 'react'
// import Navbar from '../../'
import Banner from '../../components/Banner'
import Navbar from '../../components/Navbar'
import Container from '../../components/Container'
import { Sections } from '../Section/Section'




const Home = () => {
  const [filter, setFilter] = React.useState()
  return (
    <>
     <Navbar filter={filter} setFilter={setFilter}/>
      <Banner />
      <Sections/>
      <Container filter={filter} setFilter={setFilter}/>
    </>
  
  )
}

export default Home