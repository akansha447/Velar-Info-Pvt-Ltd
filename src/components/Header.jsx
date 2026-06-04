import React from 'react'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">Velar Info Pvt LTD</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
