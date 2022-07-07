import "./App.css";
import BasicUserCard from "./components/BasicUserCard/BasicUserCard";
import Search from "./components/Search/Search";

function App() {
    return (
        <div className="App">
            <div>
                <h1 className="main-heading">Rick and Morty Search</h1>
            </div>
            <Search />
            <BasicUserCard />
        </div>
    );
}

export default App;
