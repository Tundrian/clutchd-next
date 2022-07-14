import Navbar from '../navigation/Navbar'

const Main = ({children}) => {
  return (
    <div className="min-h-screen max-h-screen">
        <Navbar />
        { children }
    </div>
  )
}
export default Main