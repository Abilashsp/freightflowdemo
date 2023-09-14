import Navbar from './navbar'
import RightNav from './RightNav'

 
export default function Layout({ children }) {
  return (
  <div className="flex justify-between h-screen">
      <Navbar/>
      <main className='w-3/5 bg-white h-screen '>{children}</main>
      <RightNav/>
      </div>
  )
}