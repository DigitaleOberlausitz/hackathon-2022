import React, {useEffect, useState} from "react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

export const useMarkdown = function (dynamicFileName) {
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
    return loading
        ? ''
        : <ReactMarkdown
            children={error ? `# Error loading resource\n\n\`\`\`\n${error}\n\`\`\`` : data}
            plugins={[remarkGfm]}
        />;
};
