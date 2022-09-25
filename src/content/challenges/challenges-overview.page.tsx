import React, { FC } from "react"
import Markdown from "../../Markdown"
import { Link } from "react-router-dom"

import "./challenges-overview.css"

// @ts-ignore
import markdown from "./challenges-overview.md"

import { challenges } from "./challenges"

export const ChallengesPage: FC = () => {
    return (
        <div>
            <Markdown dynamicFileName={markdown} />
            {challenges.map((challenge) => (
                <div key={challenge.key} className="challenge-overview-item">
                    <p>
                        {challenge.company} - {challenge.title}
                    </p>
                    <Link to={`/challenge/${challenge.link}`}>Link</Link>
                </div>
            ))}
        </div>
    )
}
