import React, { FC } from "react"
import Markdown from "../../Markdown"
import "./mainpage.css"

export const Main: FC = () => (
    <div id="mainpage">
        <div id="mainpage_content">
            <Markdown dynamicFileName={require("../../content/main.md")} modifier="main"/>
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
