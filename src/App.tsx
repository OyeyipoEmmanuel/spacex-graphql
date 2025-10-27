import Navbar from "./component/Navbar/Navbar"
import Header from "./feature/Header/Header"
import MapLaunches from "./feature/Launches/MapLaunches"

function App() {


  return (
    <>
      <Navbar />
      <Header />

      {/* Map */}
      <div className="bg-[#030F24] md:px-16 px-6 pt-16 min-h-fit">
        <MapLaunches/>
      </div>
    </>
  )
}

export default App
