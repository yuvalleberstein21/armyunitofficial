import { useEffect, useState } from "react";

const texts = [
    "משפט ראשון",
    "משפט שני",
    "משפט שלישי",
    "משפט רביעי",
    "משפט חמישי",
    "משפט שישי ואחרון לכבוד עמותת הלוחמים בצה״ל"
];

const Footer = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    useEffect(() => {
        if (charIndex < texts[currentTextIndex].length) {
            const typingInterval = setInterval(() => {
                setDisplayText((prev) => prev + texts[currentTextIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 100); // Typing speed

            return () => clearInterval(typingInterval);
        } else {
            const pauseInterval = setTimeout(() => {
                // Move to the next text after 3 seconds of pausing
                setDisplayText("");
                setCharIndex(0);
                setCurrentTextIndex((prev) => (prev + 1) % texts.length);
            }, 3000);

            return () => clearTimeout(pauseInterval);
        }
    }, [charIndex, currentTextIndex]);



    return (
        <div className="footer flex lg:flex-row " dir="rtl">
            <span className="static-text text-gray-300 lg:text-right">חדשות ואירועים:</span>
            <div className="typing-wrapper w-2/4 lg:w-3/4 lg:text-right">
                <span className="typing-text">{displayText}</span>
            </div>
        </div>
    );
};

export default Footer;