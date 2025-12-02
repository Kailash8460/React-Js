// import React from 'react'
// import Card from './components/Card/Card'
// import Navbar from './components/Navbar/Navbar'
// import './app.css';
// import './index.css';

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="parent">
// <Card
//   name="Kailash Bhagchandani"
//   age={30}
//   imageSrc="https://images.unsplash.com/photo-1740498276422-e9df92e4a369?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" />
// <Card
//   name="Garon Windsmith"
//   age={25}
//   imageSrc="https://images.unsplash.com/photo-1583900985737-6d0495555783?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" />
// <Card
//   name="Brandon Lisa"
//   age={28}
//   imageSrc="https://images.unsplash.com/photo-1652715256588-fe197c55a326?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8" />
// <Card
//   name="Emily Johnson"
//   age={22}
//   imageSrc="https://plus.unsplash.com/premium_photo-1664474515281-7fc50ac83da4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" />
// <Card
//   name="Anthony Trassy"
//   age={35}
//   imageSrc="https://images.unsplash.com/photo-1596337635980-8d2243ea07fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D" />
// <Card
//   name="Sarah Williams"
//   age={27}
//   imageSrc="https://images.unsplash.com/photo-1527736947477-2790e28f3443?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" />
//       </div>
//     </div>
//   )
// }

// export default App

import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
import initCursorTilt from './cursor'

import './index.css'
import './app.css'

const App = () => {

  useEffect(() => {
    initCursorTilt()
  }, [])

  return (
    <div>
      <Navbar />

      <div className="parent">
        <Card
          name="Kailash Bhagchandani"
          age={30}
          imageSrc="https://images.unsplash.com/photo-1740498276422-e9df92e4a369?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" />
        <Card
          name="Garon Windsmith"
          age={25}
          imageSrc="https://images.unsplash.com/photo-1583900985737-6d0495555783?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" />
        <Card
          name="Brandon Lisa"
          age={28}
          imageSrc="https://images.unsplash.com/photo-1652715256588-fe197c55a326?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8" />
        <Card
          name="Emily Johnson"
          age={22}
          imageSrc="https://plus.unsplash.com/premium_photo-1664474515281-7fc50ac83da4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" />
        <Card
          name="Anthony Trassy"
          age={35}
          imageSrc="https://images.unsplash.com/photo-1596337635980-8d2243ea07fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D" />
        <Card
          name="Sarah Williams"
          age={27}
          imageSrc="https://images.unsplash.com/photo-1527736947477-2790e28f3443?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" />
      </div>
    </div>
  )
}

export default App
