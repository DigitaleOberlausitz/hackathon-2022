// This file contains the list of challenge objects

// @ts-ignore
import zeiss1 from "./challenges/zeiss-simulationsframework.md"
// @ts-ignore
import zeiss2 from "./challenges/zeiss-testdatengenerator.md"

export type ChallengeDetails = {
    /**
     * unique identifier for the challenge
     */
    key: string
    /**
     * the title of the challenge to be used in the overview
     */
    title: string
    /**
     * a short description of the challenge to be used in the overview.
     * Can be markdown.
     */
    shortDescription: string
    /**
     * markdown file name (see Markdown.tsx)
     */
    markdown: string
    /**
     * Company name of the challenge provider
     */
    company: string
    /**
     * unique link part used as URL param.
     * Example:
     * if the complete URL is "/challenges/my-challenge-one" then the link is "my-challenge-one"
     * without any slashes.
     */
    link: string
}

export const challenges: Array<ChallengeDetails> = [
    {
        key: zeiss1,
        title: "Simulationsframework für PLC Software",
        shortDescription: "",
        markdown: zeiss1,
        company: "ZEISS Digital Innovation",
        link: "zeiss1",
    },
    {
        key: zeiss2,
        title: "Testdatengenerator",
        shortDescription: "",
        markdown: zeiss2,
        company: "ZEISS Digital Innovation",
        link: "zeiss2",
    },
].sort((a, b) => a.company.localeCompare(b.company))
