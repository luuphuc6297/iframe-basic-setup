import "./App.css";
import React from "react";
function App() {
    React.useEffect(() => {
        window.addEventListener("message", (event) => {
            console.log('event___', event?.origin)
            if (event.origin === "http://localhost:3001") {
                console.log("event.data", event.data);
            }
        });
    }, []);

    return <div className='App-1'>App-1</div>;
}

export default App;
