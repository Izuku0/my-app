import React from 'react';
import './styles.home.css';
import { Link } from 'react-router-dom';
import './signup';

export const Home = () => {
  return (
    <div>
         <section class="wrapper">
      <div class="container">
        <div class="grid-cols-2">
          <div class="grid-item-1">
            <h1 class="main-heading">
              Welcome to <span>Cubicle.</span>
              <br />
              Book your personal workspace now!
            </h1>
            <p class="info-text">
              Book and Cancel Anytime.
            </p>

            <div class="btn_wrapper">
              <a></a>
              <Link to='/signup' ><button class="btn view_more_btn">
                Sign Up<i class="ri-arrow-right-line"></i>
              </button></Link>
              

              <Link to='/signup'><button class="btn documentation_btn">Sign In</button></Link>
              
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="wrapper">
      <div class="container" data-aos="fade-up" data-aos-duration="1000">
        <div class="grid-cols-3">
          <div class="grid-col-item">
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div class="featured_info">
              <span>lorem3</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                ratione facilis animi voluptas exercitationem molestiae.
              </p>
            </div>
          </div>
          <div class="grid-col-item">
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div class="featured_info">
              <span>lorem2</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                ipsum esse corrupti. Quo, labore debitis!
              </p>
            </div>
          </div>

          <div class="grid-col-item">
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <div class="featured_info">
              <span>lorem1</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                nostrum voluptate totam ipsa corrupti vero!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Home;
