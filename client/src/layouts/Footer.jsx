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
        <div className="footer" dir="rtl">
            <span className="static-text w-1/3 lg:px-8 text-gray-300">חדשות ואירועים:</span>
            <div className="typing-wrapper w-2/3">
                <span className="typing-text">{displayText}</span>
            </div>
        </div>
    );
};

export default Footer;