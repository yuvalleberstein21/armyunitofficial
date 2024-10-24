import { useEffect, useState } from "react";

const texts = [
    "הנצחה לחיילים",
    "הנצחה למשפחות",
    "הנצחה לאנשים",
    "הנצחה לאנשים צפופים",
    "הנצחה לאנשים צפופים שלא קשורים לאנשים צפופים",
    "הנצחה לאנשים שלא"
];

const Footer = () => {
    const [currentText, setCurrentText] = useState("");
    const [index, setIndex] = useState(0);
    const typingSpeed = 150; // Speed of typing
    const pauseBetweenTexts = 1500; // Pause between texts

    useEffect(() => {
        let typingTimeout;
        let charIndex = 0;

        const typeText = () => {
            if (charIndex < texts[index].length) {
                setCurrentText((prev) => prev + texts[index].charAt(charIndex));
                charIndex++;
                typingTimeout = setTimeout(typeText, typingSpeed);
            } else {
                typingTimeout = setTimeout(() => {
                    setCurrentText(""); // Clear text for the next one
                    charIndex = 0; // Reset character index
                    setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to the next text
                }, pauseBetweenTexts);
            }
        };

        typeText(); // Start typing

        return () => {
            clearTimeout(typingTimeout);
        };
    }, [index]); // Rerun effect only if index changes

    return (
        <div className="footer" dir="rtl">
            <span className="static-text">חדשות ואירועים:</span>
            <div className="typing-wrapper">
                <span className="typing-text">{currentText}</span>
            </div>
        </div>
    );
}

export default Footer;