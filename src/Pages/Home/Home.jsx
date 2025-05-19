import React from 'react'
import Profile from "../../assets/selvam.jpg";
import { Link } from 'react-router';
import { RiArrowRightLine } from 'react-icons/ri';
import './home.css'

const Home = () => {
  return (
    <section className="home-container grid">
        <img src={Profile} alt="" className="home-img" />

        <div className="home-content">
            <h1 className="home-title"><span>I'm Selvam Gopal</span><br />Web Developer</h1>

            <p className="home-description">
                Hi, I'm a passionate Front-End Developer focused on crafting clean, user-friendly interfaces and responsive web experiences. I specialize in modern JavaScript frameworks like React, and I love turning creative ideas into functional, interactive websites.
            </p>

            <Link to='/about' className='button'>More About Me
            <span className='button-icon'><RiArrowRightLine /></span>
            </Link>

        </div>

        <div className="color-block"></div>
    </section>
  )
}

export default Home
