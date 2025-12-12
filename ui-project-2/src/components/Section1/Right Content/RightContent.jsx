import React from 'react'
import Card from './Card'
import styles from './RightContent.module.css'

const RightContent = (props) => {
    return (
        <div id={styles['right-content']} className='h-full rounded-4xl overflow-x-auto flex flex-nowrap gap-10 p-6 w-2/3'>
            {props.targetUsers.map(function (user, index) {
                return (
                    <Card key={index} id={index} img={user.img} intro={user.intro} color={user.color} tag={user.tag} />
                )
            })}
        </div>
    )
}

export default RightContent
