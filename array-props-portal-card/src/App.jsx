import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
import initCursorTilt from './cursor'

import './index.css'
import './app.css'

const App = () => {
  useEffect(() => { initCursorTilt(); }, [])

  return (
    <div>
      <Navbar />

      <div className="parent">
        <Card
          company="Amazon"
          posted="5 days ago"
          title="Senior UI/UX Designer"
          tags={["Part-Time", "Senior Level"]}
          salary="$120/hr"
          location="Mumbai, India"
          logo="https://images.unsplash.com/photo-1649734926695-1b1664e98842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW1hem9ufGVufDB8MHwwfHx8Mg%3D%3D"
        />
        <Card
          company="Google"
          posted="30 days ago"
          title="Graphic Designer"
          tags={["Part-Time", "Flexible Schedule"]}
          salary="$150-220k"
          location="Kochi, India"
          logo="https://images.unsplash.com/photo-1649006865574-8d077cefec17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvb2dsZXxlbnwwfDB8MHx8fDI%3D"
        />
        <Card
          company="Dribble"
          posted="18 days ago"
          title="Senior Motion Designer"
          tags={["Contract", "Remote"]}
          salary="$85/hr"
          location="Chennai, India"
          logo="https://images.unsplash.com/photo-1649091245826-6f9a6e2b9268?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHJpYmJsZXxlbnwwfDB8MHx8fDI%3D"
        />
        <Card
          company="Figma"
          posted="5 days ago"
          title="UX Designer"
          tags={["Full-Time", "In office"]}
          salary="$200-250k"
          location="Bangalore, India"
          logo="https://images.unsplash.com/photo-1658204212985-e0126040f88f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmlnbWF8ZW58MHwwfDB8fHwy"
        />
        <Card
          company="Lark"
          posted="5 days ago"
          title="Junior UI/UX Designer"
          tags={["Contract", "Remote"]}
          salary="$100/hr"
          location="Delhi, India"
          logo="https://images.unsplash.com/photo-1662027008658-b615840c7deb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OTB8fHxlbnwwfHx8fHw%3D"
        />
        <Card
          company="Pinterest"
          posted="5 days ago"
          title="Graphic Designer"
          tags={["Full-Time", "Flexible Schedule"]}
          salary="$85-120k"
          location="Kerala, India"
          logo="https://images.unsplash.com/photo-1649091246451-158538654e49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjUwfHx8ZW58MHx8fHx8"
        />
      </div>
    </div>
  )
}

export default App
