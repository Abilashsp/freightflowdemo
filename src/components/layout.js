import Navbar from './navbar'
import RightNav from './RightNav'

 
export default function Layout({ children }) {
  return (
  <div className="flex justify-between">
      <Navbar/>
      <main className='w-3/5 bg-white'>{children}</main>
      <RightNav/>
      </div>
  )
}