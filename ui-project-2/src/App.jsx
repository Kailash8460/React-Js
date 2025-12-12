import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import Navbar from './components/Navbar/Navbar'

const App = () => {

  const targetUsers = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
      intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum id, adipisci nulla fugiat veritatis molestias magni ipsum voluptas distinctio iste.",
      color: "royalblue",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1543132220-3ec99c6094dc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum id, adipisci nulla fugiat veritatis molestias magni ipsum voluptas distinctio iste.",
      color: "lightseagreen",
      tag: "Underserved",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661755121828-ca64b366b504?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum id, adipisci nulla fugiat veritatis molestias magni ipsum voluptas distinctio iste.",
      color: "pink",
      tag: "Underbanked",
    },
  ];

  return (
    <div>
      {/* <Navbar /> */}
      <Section1 targetUsers={targetUsers} />
      {/* <Section2 /> */}
    </div>
  )
}

export default App
