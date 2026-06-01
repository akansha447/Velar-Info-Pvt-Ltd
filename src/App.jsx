import React from 'react'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <section id="home" className="section"><Home/></section>
        <section id="about" className="section"><About/></section>
        <section id="services" className="section"><Services/></section>
        <section id="contact" className="section"><Contact/></section>
      </main>
      <Footer />
    </div>
  )
}
