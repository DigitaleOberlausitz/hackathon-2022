import React, { FC } from "react"
import { Link, useParams } from "react-router-dom"

import "./challenge-details.css"

import { challenges } from "./challenges"
import Markdown from "../../Markdown"

export const ChallengeDetails: FC = () => {
    const { name } = useParams()

    const challenge = challenges.find((c) => c.link === name)

    if (challenge) {
        return (
            <div className="challenge-details">
                <h1>Challenge "{challenge.title}"</h1>
                <p>
                    von <strong>{challenge.company}</strong>
                </p>

                <Markdown dynamicFileName={challenge.markdown} />
            </div>
        )
    } else {
        return (
            <div>
                <p>Challenge nicht gefunden.</p>
                <Link to="/challenges">Zurück zur Übersicht</Link>
            </div>
        )
    }
}
