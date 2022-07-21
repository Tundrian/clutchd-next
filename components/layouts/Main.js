import Navbar from '../navigation/Navbar'
import Footer from './Footer'

const Main = ({children}) => {
  return (
    <div className="min-h-screen max-h-screen">
        <Navbar />
        { children }
        <Footer />
    </div>
  )
}
export default Main