import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from'./card.jsx'
import ExampleNavbarTwo from './navbar'

function App() {
  const [count, setCount] = useState(0)

  let obj={

  }
  return (
    <>
    <ExampleNavbarTwo/>
    <h1 className='text-4xl  font-bold  rounded-xl p-6 m-5'>welcome To Our Showroom</h1>
    <Card username='Farwa' img='https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200'/>
    <Card username='Ume'img='https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fHww&w=1000&q=80' />
    <Card username='Fatima' img='https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200'/>


       
         </>
  )
}

export default App
