import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Grid from "@material-ui/core/Grid";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <div className="content">
            <Home />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
