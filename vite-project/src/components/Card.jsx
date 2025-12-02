// import React from 'react'

// const Card = () => {
//     return (
//         <div className="parent">
//             <div className="card">
//                 <img src="https://images.unsplash.com/photo-1740498276422-e9df92e4a369?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" />
//                 <h3>Kailash Bhagchandani</h3>
//                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, error quam! Error ab aspernatur quae similique consectetur fugit rem eligendi.</p>
//                 <button className='btn'>View Profile</button>
//             </div>
//         </div>
//     )
// }

// export default Card

import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.imageSrc} alt={props.name} title={props.name} />
            <h3>{props.name}</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, error quam! {props.age} Error ab aspernatur quae similique consectetur fugit rem eligendi.</p>
            <button className='btn'>View Profile</button>
        </div>
    )
}

export default Card
