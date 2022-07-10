import React from 'react';
import {createChatBotMessage} from 'react-chatbot-kit';
import DogPicture from "../DogPicture";

const config = {
    initialMessages: [createChatBotMessage(`Hallo, wie kann ich helfen?`)],
    botName: "Bottina Robowitz",
    customComponents: {
        botAvatar: () => <div className="react-chatbot-kit-chat-bot-avatar">
            <div className="react-chatbot-kit-chat-bot-avatar-container">
                <p className="react-chatbot-kit-chat-bot-avatar-letter">🤖</p>
            </div>
        </div>,
    },
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
