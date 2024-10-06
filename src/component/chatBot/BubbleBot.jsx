import React, { useState } from "react";
import DOMPurify from "dompurify";
import copyIcon from "../../assets/copy.svg"
import { Button } from "../Button/Button";
import "./BubbleBot.css";
import { toast } from "react-toastify";

export const BubbleBot = ({ text, author, time }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Tentukan kelas berdasarkan penulis pesan
    const bubbleClass =
        author === "user" ? "user-message bubble" : "bot-message bubble";

    const handleCopyClick = async () => {
        try {
        await navigator.clipboard.writeText(text);
        toast.success("Berhasil menyalin pesan", {
            position: "top-center",
        });
        } catch (err) {
        toast.error("Gagal menyalin pesan", {
            position: "top-center",
        });
        }
    };
    return(
        <div
        className={`d-flex flex-column ${
            author === "user" ? "align-self-center" : "align-self-start"
        }`}
        >
            <div
                id="bubbleBot"
                className="d-flex flex-row align-items-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {isHovered && (
                <Button
                    onClick={handleCopyClick}
                    className={`m-2 p-0 ${author === "user" ? "order-0" : "order-1"}`}
                    style={{ height: "fit-content" }}
                >
                    <img src={copyIcon} width={24} height={24} alt="Copy" />
                </Button>
                )}
                <div className={bubbleClass}>
                <p
                    className="text-black m-0"
                    style={{ width: "20rem", padding: "1rem 1.5rem" }}
                    dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(text).replace(/\n/g, "<br />"),
                    }}
                />
                </div>
            </div>
            <span
                className={`text-royal-blue fs-4 mt-1 ${
                author === "user" ? "text-end" : "text-start"
                }`}
            >
                <small>{time}</small>
            </span>
        </div>
    )
}