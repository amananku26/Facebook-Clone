import "./App.css";
import Feed from "./Components/Feed";
import Header from "./Components/Header";
import Login from "./Components/Login/Login";
import Sidebar from "./Components/Sidebar";
import Widgets from "./Components/Widgets";
import { useSelector,useDispatch } from "react-redux"


function App() {
    var data = useSelector((state) => state.PostData.UserData)
    const user = data
    return (
        <div className="app">
            {
            ! user ? (
                <div>
                    <Login/>
                </div>
            ) : (
                <>
                    <Header/>
                    <div className="app__body">
                        <Sidebar/>
                        <Feed/>
                        <Widgets/>
                    </div>
                </>
            )
        } </div>
    );
}

export default App;
