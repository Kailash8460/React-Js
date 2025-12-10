import React from 'react'
import BgText from '../Texts/BgText'
import IconText from '../Texts/IconText'

const CardHeader = (props) => {
    return (
        <div className='flex items-center justify-between' >
            <BgText headerTitle={props.cardTitle} backgroundColor={props.backgroundColor} textColor={props.textColor} />
            <IconText icon={props.icon} text={props.text} />
        </div>
    )
}

export default CardHeader
