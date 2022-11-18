import React, { FC, useEffect, useState } from "react"
import "react-chatbot-kit/build/main.css"
import "./App.css"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

/**
 * Render Markdown from a file
 * @param $ The properties
 * @param {string} $.src The result of calling `require` on an *.md file
 * @param {string} $.modifier A modifier to append to the class name
 */
const Markdown: FC<{ src: string; modifier?: string }> = ({src, modifier}) => {
    const [data, setData] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        fetch(src)
            .then((r) => r.text())
            .then((t) => {
                setData(t)
                setLoading(false)
            })
            .catch((e) => {
                setError(e)
                setLoading(false)
            })
    }, [src])
    return (
        <div className={`Markdown${modifier ? `--${modifier}` : ""}`}>
            {loading ? (
                ""
            ) : (
                <ReactMarkdown
                    children={error ? `# Error loading resource\n\n\`\`\`\n${error}\n\`\`\`` : data}
                    // @ts-ignore
                    plugins={[remarkGfm]}
                />
            )}
        </div>
    )
}

export default Markdown
