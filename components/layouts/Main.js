import Navbar from '../navigation/Navbar'

const Main = ({children}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-400 to-sky-800">
        <Navbar />
        { children }
    </div>
  )
}
export default Main