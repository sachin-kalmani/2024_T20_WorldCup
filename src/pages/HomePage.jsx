import React from 'react'

const HomePage = () => {
  return (
    <div className='absolute left-[15%]  w-[80%] p-10 text-[#000]'>
      <h1 className='font-bold text-[40px] drop-shadow-md text-[#3E3232]'>ICC Men's <br /> T20 World Cup, 2024</h1>
      <div>
        <p className='font-medium m-5 drop-shadow tracking-wide leading-6'>The ICC T20 Men's World Cup Dashboard is a simple, data-driven tool designed to display comprehensive details about past matches from the T20 World Cup. This dashboard presents match data in a straightforward format, providing users with easy access to historical information.</p>
        <h1 className='font-semibold text-[22px] m-5 drop-shadow-sm tracking-wide'>Key Features:</h1>
        <p className='font-medium m-5 px-5 tracking-wide leading-6 drop-shadow-sm'>
        <span className='font-semibold text-[18px] mr-1'>Match Details:</span> Lists detailed information about each match, including dates, teams, scores, and outcomes.
        </p>
        <p className='font-medium m-5  px-5 tracking-wide leading-6 drop-shadow-sm'>
        <span className='font-semibold text-[18px] mr-1'>User-Friendly Interface :</span> Offers a clean and intuitive layout for easy navigation and quick retrieval of match data.
        </p>
        <h1 className='font-semibold text-[22px] m-5 pt-5 drop-shadow-sm tracking-wide'>Tech Stack :</h1>
        <h1 className='font-medium mt-5 px-10  tracking-wide text-[18px]'>React Js</h1>
        <p className='font-medium mt-5 px-10  tracking-wide'>In this Project React Js is used to create seamless and interactive front-end.Using its components-based architecture for simple ,modular and maintainable codebase, </p>
        <h1 className='font-medium mt-5 px-10  tracking-wide text-[18px]'>Java Spring Boot</h1>
        <p className='font-medium mt-5 px-10  tracking-wide'>In this Project Spring Boot serves as the backbone of the server-side logic and API development.It manages data processing, handles business logic, and facilitates communication between the front-end and the database. Its robust ecosystem and built-in tools streamline development and deployment, ensuring a reliable and scalable back-end.</p>
        <h1 className='font-medium mt-5 px-10  tracking-wide text-[18px]'>MySQL</h1>
        <p className='font-medium mt-5 px-10  tracking-wide'> MySQL is employed to store and manage the extensive dataset of T20 World Cup match details.</p>
      </div>
    </div>
  )
}

export default HomePage