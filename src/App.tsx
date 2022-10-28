import './App.css';
import Chessboard from "./components/Chessboard/Chessboard";
import React, {Component} from "react";

// function App(){
//   return (
//     <div id="app">
//       <Chessboard/>
//     </div>
//   );
// }
//
// export default App;

class App extends Component {
    state = {
        boardRows: []
    };

    async componentDidMount() {
        const response = await fetch('http://localhost:8080/loadBoard');
        const body = await response.json();
        this.setState({boardRows: body});
    }

    render() {
        const {boardRows} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <div className="App-intro">
                        <h2>Clients</h2>
                        {boardRows}
                    </div>
                </header>
            </div>
        );
    }
}
export default App;