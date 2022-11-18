import React, { FC } from "react"
import Markdown from "../../Markdown"
import { Link } from "react-router-dom"

import "./challenges-overview.css"
import { challenges } from "../../content/challenges"

export const ChallengesPage: FC = () => {
    const uniqueOrganisations = challenges
        .map(challenge => challenge.company)
        .filter((organisation, index, list) => list.indexOf(organisation) === index);
    return (
        <div>
            <Markdown src={require("../../content/challenges-overview.md")} />
            {uniqueOrganisations
                .map(organisation => (
                    <div key={organisation} className="challenge-overview-item">
                        <p>{organisation}</p>
                        <ul>
                            {challenges
                                .filter(challenge => challenge.company === organisation)
                                .map(challenge => (
                                    <li key={challenge.key}><Link to={`/challenge/${challenge.link}`}>{challenge.title}</Link></li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}
