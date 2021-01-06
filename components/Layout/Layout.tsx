import React from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <div className="site">
      <header className="header">
        <Header />
      </header>

      {children}

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  </>
)

export default Layout
