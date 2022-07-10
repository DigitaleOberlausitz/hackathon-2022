import {Dispatch} from "react";
import {IMessage, IMessageOptions} from "react-chatbot-kit/src/interfaces/IMessages";

type MessageCreator = (message: string, options?: IMessageOptions) => IMessage;

class ActionProvider {
    private readonly createChatbotMessage: MessageCreator;
    private readonly setState: Dispatch<any>;
    private readonly createClientMessage: MessageCreator;

    constructor(createChatbotMessage: MessageCreator, setStateFunc: Dispatch<any>, createClientMessage: MessageCreator) {
        this.createChatbotMessage = createChatbotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    handleFoodQuestion() {
        this.setState((prev: { messages: any; }) => ({
            ...prev,
            messages: [...prev.messages, this.createChatbotMessage('Speisen und Getränke werden kostenlos bereitgestellt.')]
        }));
    }
    handleDogExampleQuestion() {
        this.setState((prev: { messages: any; }) => ({
            ...prev,
            messages: [...prev.messages, this.createChatbotMessage('Hier ist ein zufälliges Bild eines Hundes.', {widget: 'dogPicture',})]
        }));
    }
}

export default ActionProvider;
