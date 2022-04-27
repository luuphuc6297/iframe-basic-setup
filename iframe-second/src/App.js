import "./App.css";
import React from "react";
function App() {
    const loadIframe = () => {
        const iframe = document.getElementsByTagName("iframe")[0];
        iframe.contentWindow.postMessage({ userId: 1 }, "http://localhost:3000");
    };
    return (
        <div className='App'>
            App-2
            <iframe
                onLoad={loadIframe}
                id='app-2'
                src='http://localhost:3000'
                title='app-2'
                style={{ display: "none" }}
            ></iframe>
        </div>
    );
}

export default App;
