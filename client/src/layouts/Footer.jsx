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
    const [index, setIndex] = useState(0);
    const changeInterval = 5000; // Change text every 3 seconds

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, changeInterval);

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);

    return (
        <div className="footer" dir="rtl">
            <span className="static-text">חדשות ואירועים:</span>
            <div className="typing-wrapper">
                <span className="typing-text">{texts[index]}</span>
            </div>
        </div>
    );
};

export default Footer;