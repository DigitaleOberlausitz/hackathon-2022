import React, { FC } from "react"
import Markdown from "../../Markdown"

// @ts-ignore
import mainMd from "./main.md"

import "./mainpage.css"

export const MainPage: FC = () => (
    <div id="mainpage">
        <div id="mainpage_content">
            <Markdown dynamicFileName={mainMd} modifier="main" />
        </div>
        <div id="mainpage_poster">
            <a
                target="_blank"
                rel="noreferrer"
                href="https://raw.githubusercontent.com/DigitaleOberlausitz/grafiken/master/Plakate/hackathon/2022/poster-hackathon-A3-web.png"
            >
                <img
                    alt="Poster zum Hackathon mit den wesentlichen Informationen nochmal grafisch aufbereitet"
                    src="https://raw.githubusercontent.com/DigitaleOberlausitz/grafiken/master/Plakate/hackathon/2022/poster-hackathon-A3-web.png"
                />
            </a>
        </div>
    </div>
)
