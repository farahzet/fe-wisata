import React, { useState } from "react";
import useAutoScroll from "../Hooks/useAutoScroll";
import { Button } from "../Button/Button";
import sendIcon from "../../assets/send.svg"
import carebotLogo from "../../assets/botIcon.svg";
import arrowDown from "../../assets/arrow-down-2.svg";
import deleteIcon from "../../assets/delete-icon-red.svg";
import "./ChatBot.css";
import useShortcutKeyboard from "../Hooks/useShortcutKeyboard";
import axios from "axios";
import { BubbleBot } from "./BubbleBot";
// import { prompt } from "../../Utils/ChatAI";


export const Chatbot = () => {
    const [question, setQuestion] = useState("");
    const [loading, setLoading] = useState(false);
    const [menu, setMenu] = useState(false);
    const [historyChats, setHistoryChats] = useState([]);
    const { bottomRef, scrollToBottom } = useAutoScroll();
    const { shortcutInputBot } = useShortcutKeyboard("k");

    const handleClearChat = () => {
        setMenu(false);
        setHistoryChats([]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (question.trim() && !loading) {
        await generateAnswer();
        }
    };

    const onEnter = (e) => {
        if (e.key === "Enter") {
        e.preventDefault();
        if (question.trim() && !loading) {
            generateAnswer();
        }
        }
    };

    async function generateAnswer() {
        setLoading(true);
        const combinedMessage = `${prompt}\nUser: ${question}\nAI:`;

        try {
        // Call API
        const response = await axios({
            url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
            import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
            }`,
            method: "post",
            data: {
            contents: [{ parts: [{ text: combinedMessage }] }],
            },
        });

        // Log the entire API response
        console.log("API Response:", response.data);

        const aiResponse =
            response.data.candidates && response.data.candidates.length > 0
            ? response.data.candidates[0]?.content?.parts[0]?.text ||
                "Maaf, saya tidak dapat menemukan jawaban untuk pertanyaan Anda saat ini. Untuk informasi lebih lanjut, silakan hubungi admin sekolah kami."
            : "Maaf, saya tidak dapat menemukan jawaban untuk pertanyaan Anda saat ini. Untuk informasi lebih lanjut, silakan hubungi admin sekolah kami."; // Default message

        // Log the extracted response
        console.log("Extracted AI Response:", aiResponse);

        // Simulate a delay before updating the chat history
        setTimeout(() => {
            // Update chat history with user input and bot response
            setHistoryChats((prevChats) => [
            ...prevChats,
            { author: "user", content: question, date: new Date(), type: "text" },
            {
                author: "bot",
                content: aiResponse,
                date: new Date(),
                type: "text",
            }, // Change type to "text" for simplicity
            ]);

            // Reset the question input field
            setQuestion("");
            scrollToBottom();
            setLoading(false);
        }, 1000); // 1000 milliseconds = 1 second delay
        } catch (error) {
        console.error("API Error:", error);

        // Simulate a delay for error response
        setTimeout(() => {
            setHistoryChats((prevChats) => [
            ...prevChats,
            {
                author: "bot",
                content:
                "Maaf, saya tidak dapat menemukan jawaban untuk pertanyaan Anda saat ini. Untuk informasi lebih lanjut, silakan hubungi admin sekolah kami",
                date: new Date(),
                type: "text",
            },
            ]);

            // Reset the question input field
            setQuestion("");
            scrollToBottom();
            setLoading(false);
        }, 1000); // 1000 milliseconds = 1 second delay
        }
    }

    return(
        <div className="chatbot-container pt-5 bg-white">
            <div className="chatbot-header">
                <div className="header-content">
                <img src={carebotLogo} alt="Carebot Logo" className="carebot-logo" />
                <span className="carebot-title">Sobat Bot</span>
                </div>
                <button
                type="button"
                className="close-btn"
                onClick={() => setMenu(!menu)}
                >
                <img src={arrowDown} alt="Toggle Menu" className="close-btn" />
                </button>
                {menu && (
                <Button
                    type="button"
                    className="position-absolute delete-menu text-danger bg-white border fw-semibold"
                    onClick={handleClearChat}
                >
                    <div className="d-flex flex-row gap-5 justify-content-between grey-hover px-2 py-1 rounded-3">
                    <p>Clear Chat</p>
                    <img src={deleteIcon} width={24} height={24} alt="Delete" />
                    </div>
                </Button>
                )}
            </div>
            <div className={`chat-history py-5 px-3 position-relative`}>
                {historyChats.map((message, index) => {
                const date = new Date(message.date);
                const hours = date.getHours().toString().padStart(2, "0");
                const minutes = date.getMinutes().toString().padStart(2, "0");
                return (
                    <React.Fragment key={index}>
                    <BubbleBot
                        author={message.author}
                        text={message.content} // Pass content as text
                        date={message.date}
                        type={message.type}
                        status={message.status}
                        time={`${hours}:${minutes}`}
                    />
                    </React.Fragment>
                );
                })}
                <div className="py-5" ref={bottomRef} />
                {loading && <span className="loader mx-auto"></span>}
            </div>

            <form className="user-input" onSubmit={handleSubmit}>
                <div className="position-relative w-100">
                <input
                    ref={shortcutInputBot}
                    name="Input-bot"
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyDown={onEnter}
                    placeholder="Ask something..."
                    className="form-control input-field rounded-5 border-0 w-100 pe-5 bg-neutral-200"
                />
                <button
                    type="submit"
                    disabled={loading || !question}
                    style={{ right: loading ? "10px" : "30px" }}
                    className="send-button"
                >
                    {loading ? (
                    <div
                        className="spinner-border spinner-border-sm text-secondary"
                        role="status"
                    >
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    ) : (
                    <img
                        src={sendIcon}
                        alt="Send"
                        className="send-icon position-absolute"
                    />
                    )}
                </button>
                </div>
            </form>
        </div>
    )
}