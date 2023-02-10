import React from 'react';
import './styles.navbar.css'

export const Navbar = () => {
  return (
    <div>
        <header class="container header">

<nav class="nav">
        <div class="logo">
          <h2>Cubicles.</h2>
        </div>
      
      <div class="nav_menu" id="nav_menu">
          <button class="close_btn" id="close_btn">
            <i class="ri-close-fill"></i>
          </button>

          <ul class="nav_menu_list">
            <li class="nav_menu_item">
              <a href="#" class="nav_menu_link">account</a>
            </li>
            <li class="nav_menu_item">
              <a href="#" class="nav_menu_link">about</a>
            </li>
            <li class="nav_menu_item">
              <a href="#" class="nav_menu_link">service</a>
            </li>
            <li class="nav_menu_item">
              <a href="#" class="nav_menu_link">contact</a>
            </li>
          </ul>
        </div>
        <button class="toggle_btn" id="toggle_btn">
          <i class="ri-menu-line"></i>
        </button>
      </nav>
      </header>
    </div>
  )
}

export default Navbar;
