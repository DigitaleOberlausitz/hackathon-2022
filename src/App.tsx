import React from 'react';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import './App.css';
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import {useMarkdown} from "./useMarkdown";

// @ts-ignore
import dynamicFileName from './main.md';

function App() {
    const mdComponent = useMarkdown(dynamicFileName);
    return (
        <div className="App">
            {mdComponent}
            <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}/>
        </div>
    );
}

export default App;
