import StyledButton from "../../Components/Button";
import SideDrawer from "../../Components/SideDrawer";


const Home = () => {

  return (
    <div className="App">
      <header className="App-header">
        WIP - RPGToolChest main page
        <StyledButton variant="contained" label="test" onClick={() => console.log('test')} />
      </header>
      <body>
        <SideDrawer />
      </body>
    </div>
  )
}

export default Home;