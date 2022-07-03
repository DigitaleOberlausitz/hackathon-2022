import React from 'react';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import './App.css';
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import {useMarkdown} from "./useMarkdown";
import {Page} from 'react-onsenui';

// @ts-ignore
import dynamicFileName from './main.md';

function App() {
    const mdComponent = useMarkdown(dynamicFileName);
    return (
        <Page>
            {mdComponent}
            <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}/>
        </Page>
    );
}

export default App;
