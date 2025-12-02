// import React from 'react'
// import './card.css';

// const Card = (props) => {
//     return (
//         <div className="card">
//             <img src={props.imageSrc} alt={props.name} title={props.name} />
//             <h3>{props.name}</h3>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, error quam! {props.age} Error ab aspernatur quae similique consectetur fugit rem eligendi.</p>
//             <button className='btn'>View Profile</button>
//         </div>
//     )
// }

// export default Card

import React from 'react'
import './card.css'

const Card = (props) => {
    return (
        <div className="card">

            <div className="img-wrap">
                <img src={props.imageSrc} alt={props.name} title={props.name} />
            </div>

            <h3>{props.name}</h3>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore molestias, laboriosam ratione quae aspernatur fugit.
                Age: {props.age}
            </p>

            <div className="accent"></div>

            <button className="btn">View Profile</button>
        </div>
    );
};

export default Card;
