import React, { FC } from "react"
import Markdown from "../Markdown"
import Chatbot from "react-chatbot-kit"
import config from "../chatbot/config"
import MessageParser from "../chatbot/MessageParser"
import ActionProvider from "../chatbot/ActionProvider"
import "./main.css"

// @ts-ignore
import mainMd from "./main.md"

export const MainPage: FC = () => (
    <div className="mainpage">
        <Markdown dynamicFileName={mainMd} modifier="main" />
        <Chatbot
            config={config}
            headerText="Unterhaltung mit Bottina Robowitz"
            placeholderText="Nachricht an Bottina..."
            messageParser={MessageParser}
            actionProvider={ActionProvider}
        />
    </div>
)
