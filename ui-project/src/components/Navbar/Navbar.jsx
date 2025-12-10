import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-center items-center gap-12'>
            <img className='h-30 w-30 rounded-full object-cover' src='https://www.postoast.com/wp-content/uploads/2020/03/Shirley-Setia.jpg' alt='Women Potrait' />
            <div className='flex-col space-y-1.5' >
                <p className='text-4xl font-bold text-gray-700' >PRESENTATION DESIGN</p>
                <p className='text-4xl text-gray-600' >Для заказа пишите в tg: @SashaS45</p>
            </div>
        </div>
    )
}

export default Navbar
