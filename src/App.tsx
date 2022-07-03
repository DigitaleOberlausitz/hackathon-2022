import React from 'react';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import './App.css';
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import Markdown from "./Markdown";

// @ts-ignore
import mainMd from './main.md';

function App() {
    return (
        <div className="App">
            <Markdown dynamicFileName={mainMd} modifier='main'/>
            <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}/>
        </div>
    );
}

export default App;
