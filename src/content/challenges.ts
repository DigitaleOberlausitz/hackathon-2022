// This file contains the list of challenge objects

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
    shortDescription?: string
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
     * if the complete URL is "/challenges-overview/my-challenge-one" then the link is "my-challenge-one"
     * without any slashes.
     */
    link: string
}

export const challenges: Array<ChallengeDetails> = [
    {
        key: "zeiss1",
        title: "Simulationsframework für PLC Software",
        markdown: require("../content/challenges/zeiss-simulationsframework.md"),
        company: "ZEISS Digital Innovation",
        link: "zeiss1",
    },
    {
        key: "zeiss2",
        title: "Testdatengenerator",
        markdown: require("../content/challenges/zeiss-testdatengenerator.md"),
        company: "ZEISS Digital Innovation",
        link: "zeiss2",
    },
    {
        key: "sedna1",
        title: "Datensparsame Online-Verträge",
        markdown: require("../content/challenges/sednasoft-datensparsame-online-vertraege.md"),
        company: "SednaSoft",
        link: "sedna1",
    },
    {
        key: "doev1",
        title: "OpenData-Anwendung",
        markdown: require("../content/challenges/doev-opendata-anwendung.md"),
        company: "Digitale Oberlausitz e. V.",
        link: "doev1",
    },
    {
        key: "fmsg1",
        title: "Nachrichtenverteiler",
        markdown: require("../content/challenges/fmsg-nachrichten-verteiler.md"),
        company: "Förderverein des Montessorikinderhauses Spatzennest in Görlitz e. V.",
        link: "fmsg1",
    },
].sort((a, b) => a.company.localeCompare(b.company))
