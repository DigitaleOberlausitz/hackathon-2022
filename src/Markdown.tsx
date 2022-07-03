import React, {FC, useEffect, useState} from 'react';
import 'react-chatbot-kit/build/main.css'
import './App.css';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Markdown: FC<{ dynamicFileName: string, modifier?: string }> = ({dynamicFileName, modifier}) => {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(dynamicFileName)
            .then(r => r.text())
            .then(t => {
                setData(t);
                setLoading(false);
            })
            .catch(e => {
                setError(e);
                setLoading(false);
            });
    }, [dynamicFileName]);
    return <div className={`Markdown${modifier ? `--${modifier}` : ''}`}>
        {loading
            ? ''
            : <ReactMarkdown
                children={error ? `# Error loading resource\n\n\`\`\`\n${error}\n\`\`\`` : data}
                // @ts-ignore
                plugins={[remarkGfm]}
            />
        }
    </div>;
};

export default Markdown;
