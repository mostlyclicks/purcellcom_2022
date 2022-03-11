import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div style={{border:'1px solid red'}}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout