import SectionTitle from "../components/SectionTitle"


const AboutUs = () => {
    return (

        <div className="container mx-auto p-8" dir="rtl">
            <SectionTitle title={"יחידת הפרא"} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-10">

                {/* <!-- First Section --> */}
                <div className="order-2 lg:order-1 p-2">
                    <h2 className="text-3xl font-bold text-accent-dark mb-4">אז מי אנחנו ?</h2>
                    <p className="text-gray-800 text-xl font-light leading-relaxed">
                        היחידה מורכבת מלוחמים מקומיים תושבי הגולן, בעלי רקע קרבי משמעותי יוצאי היחידות הכי מיוחדות בצה"ל,
                        המכירים היטב את השטח, את מאפייני האזור ואת התרבות המקומית. הלוחמים בעלי עצמאות מחשבתית, יוזמה ומחויבות עמוקה לביתם, קהילתם ולרמת הגולן כולה.
                    </p>
                </div>

                <div className="order-1 lg:order-2 flex justify-center items-center">
                    <div className="bg-gradient-to-br from-blue-200 to-blue-500 rounded-lg p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300 shadow-lg">
                        <img src="../images/idf2.jpg" alt="Unit Image" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>

                {/* <!-- Second Section --> */}
                <div className="order-4 lg:order-3 p-2">
                    <h2 className="text-3xl font-bold text-accent-dark mb-4">מובילים את הכוח הלוחם ברמת הגולן</h2>
                    <p className="text-gray-800 text-xl font-light leading-relaxed">
                        היחידה מחזיקה ביכולת לתאם ולשתף פעולה עם כלל הגורמים בגזרה – יחידות צה"ל, חטיבות, אוגדות, וכן המועצות המקומיות, היישובים וכיתות הכוננות –
                        ובכך יוצרת תגובה מתואמת בין הכוחות השונים, תיאום זה תורם רבות לביטחון תושבי הגולן ומבטיח רמת מוכנות גבוהה של כלל הכוחות הפועלים בשטח.
                    </p>
                </div>

                <div className="order-3 lg:order-4 flex justify-center items-center">
                    <div className="bg-gradient-to-br from-blue-200 to-blue-500 rounded-lg p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300 shadow-lg">
                        <img src="../images/logo.jpg" alt="Coordinated Forces" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutUs