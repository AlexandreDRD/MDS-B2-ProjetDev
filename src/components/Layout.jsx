import '../Styles/variables.css'
import '../App.css'
import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

function Layout () {
  return (
    <div className='App'>
      <Header />
      <main className='content'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
