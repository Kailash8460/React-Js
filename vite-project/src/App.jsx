// function Glossary(props) {
//   return (
//     <dl>
//       {props.items.map(item => (
//         <React.Fragment key={item.id}>
//           <dt>{item.term}</dt>
//           <dd>{item.description}</dd>
//         </React.Fragment>
//       ))}
//     </dl>
//   );
// }

// import React from 'react'

// const App = () => {
//   return (
//     <>
//       <div id='parent1'>
//         <h1 id='child1.1'> This is my first react app 1.1</h1>
//         <h2 id='child1.2'> This is done using ReactJS 1.2</h2>
//       </div>
//       <div id='parent2'>
//         <h1 id='child2.1'> This is my first react app 2.1</h1>
//         <h2 id='child2.2'> This is done using ReactJS 2.2</h2>
//       </div>
//     </>
//   )
// }

// export default App

import React from 'react'
import Card from './components/Card'
import Navbar from './components/NavBar'

const App = () => {
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
