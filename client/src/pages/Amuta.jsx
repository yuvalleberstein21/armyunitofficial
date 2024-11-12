import { FaArrowDown } from "react-icons/fa";

const Amuta = () => {
    return (
        <div className="relative h-[570px] lg:h-[450px] md:h-[450px] mt-0 lg:mt-10 md:mt-10 mx-auto" dir="rtl">
            {/* <!-- Background Image --> */}
            <img
                src="./images/idf3.webp"
                alt="IDF Commando Image"
                className="object-cover w-full h-full bg-center bg-no-repeat opacity-80"
            />

            {/* <!-- Dark Overlay with Gradient --> */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800 to-transparent opacity-90"></div>

            {/* <!-- Content Overlay --> */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 lg:px-8 space-y-6">
                {/* <!-- Main Heading --> */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-accent-light drop-shadow-lg">
                    עמותת פרא
                </h1>

                {/* <!-- Mission Statement --> */}
                <p className="bg-primary bg-opacity-40 p-4 md:p-6 rounded-lg shadow-lg max-w-2xl text-lg leading-relaxed drop-shadow-md">
                    עמותת פרא מזמינה אתכם לקחת חלק משמעותי במימוש החזון והמטרה של היחידה - הגנה על תושבי רמת הגולן מפני איומי הטרור הגוברים באיזורנו ע"י הבטחת עצמאותה היחידתית של היחידה ומימון צרכיה המבצעיים והלוגיסטיים כדי להבטיח שהלוחמים יוכלו לפעול בצורה מיטבית בכל מצב.
                    במציאות הביטחונית המורכבת של רמת הגולן, חשוב להבין כי כל אירוע עשוי להתממש בכל רגע, וההכנה המוקדמת עם משאבים מתאימים היא קריטית להצלחת היחידה.
                </p>
                <span
                    className="bg-accent-light cursor-pointer flex justify-between gap-2 text-slate-900 px-8 py-3 text-lg rounded-full font-semibold hover:bg-accent-dark hover:text-white transition-colors duration-300 shadow-md"
                >
                    תחומי העמותה
                    <FaArrowDown size={15} className="mt-1" />
                </span>
            </div>
        </div>
    )
}

export default Amuta;