import Navbar from './navbar'
import Footer from './footer'

 
export default function Layout({ children }) {
  return (
  <div className="flex">
      <Navbar/>
      <main >{children}</main>
      </div>
  )
}