import ActionProvider from "./ActionProvider"

class MessageParser {
    private actionProvider: ActionProvider
    private state: any

    constructor(actionProvider: ActionProvider, state: any) {
        this.actionProvider = actionProvider
        this.state = state
    }

    parse(message: string) {
        if (
            [
                "esse",
                "trink",
                "speis",
                "tränk",
                "catering",
                "verpflegung",
                "leibliches wohl",
                "futter",
                "trank",
                "trunk",
                "hunger",
                "durst",
                "dürst",
            ].some((particle) => message.toLocaleLowerCase().includes(particle))
        ) {
            this.actionProvider.handleFoodQuestion()
        } else if (message.toLocaleLowerCase().includes("hund")) {
            this.actionProvider.handleDogExampleQuestion()
        }
    }
}

export default MessageParser
