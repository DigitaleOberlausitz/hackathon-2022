import React from 'react';
import {createChatBotMessage} from 'react-chatbot-kit';
import DogPicture from "../DogPicture";

const config = {
    initialMessages: [createChatBotMessage(`Hello world`)],
    botName: "Bottina Robowitz",
    customStyles: {
        botMessageBox: {
            backgroundColor: 'hsl(184deg 32% 40%)'
        },
        chatButton: {
            backgroundColor: 'hsl(184deg 32% 40%)'
        },
    },
    widgets: [
        {widgetName: 'dogPicture', widgetFunc: (props) => <DogPicture {...props} />, props: {}, mapStateToProps: [],}
    ],
};

export default config;
