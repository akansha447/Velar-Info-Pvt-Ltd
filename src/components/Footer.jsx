import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Velar Info Pvt. Ltd.</div>
        <div className="small">X-20, First Floor, Naveen Shahdara, Delhi – 110032, India • sales@velarinfo.com</div>
      </div>
    </footer>
  )
}
