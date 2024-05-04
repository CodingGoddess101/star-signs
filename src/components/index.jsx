import React from 'react'


const Description = (userDescription) => {
    return (
        <p className='description'>{userDescription.description}</p>
    )
}

const Index = () => {
    return (
        <section>
            <h1 className='main-heading'>Welcome to Starsigns!</h1>
            <Description description='This app helps you find out more 
            about what starsign you are and what it means to you in terms 
            of our vast galaxy .' />

        </section>
    )
}

export default Index;