import React, { FC } from "react"
import Markdown from "../Markdown"
import Chatbot from "react-chatbot-kit"
import config from "../chatbot/config"
import MessageParser from "../chatbot/MessageParser"
import ActionProvider from "../chatbot/ActionProvider"
import "./main.css"

// @ts-ignore
import mainMd from "./main.md"

const enableChatBox = false

export const MainPage: FC = () => (
    <div className="mainpage">
        <Markdown dynamicFileName={mainMd} modifier="main" />

        {enableChatBox && (
            <Chatbot
                config={config}
                headerText="Unterhaltung mit Bottina Robowitz"
                placeholderText="Nachricht an Bottina..."
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            />
        )}
    </div>
)
