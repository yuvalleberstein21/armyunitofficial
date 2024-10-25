

const Contact = () => {
    return (
        <div className="mx-auto h-[500px] relative" dir="rtl">
            {/* Background Image */}
            <img
                src="./images/idf3.webp"
                alt="image idf comando"
                className="object-cover bg-center w-full h-full bg-no-repeat opacity-90"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-800 bg-opacity-50"></div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-4 text-white">
                <h2 className="text-4xl font-bold">פרטי יצירת קשר</h2>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 p-6">
                    {/* Card 1: Hours of Operation */}
                    <div className="bg-primary bg-opacity-30 p-2 rounded-lg shadow-md text-center">
                        <h3 className="text-xl font-semibold text-secondary">שעות פעילות</h3>
                        <p className="text-lg">ראשון - חמישי: 9:00 - 17:00</p>
                        <p className="text-lg">שישי: 9:00 - 13:00</p>
                        <p className="text-lg">שבת: סגור</p>
                    </div>

                    {/* Card 2: Phone Number */}
                    <div className="bg-white bg-opacity-30 p-4 rounded-lg shadow-md text-center">
                        <h3 className="text-xl font-semibold text-secondary">טלפון</h3>
                        <p className="text-lg text-ellipsis overflow-hidden">052-1234567</p>
                    </div>

                    {/* Card 3: Email */}
                    <div className="bg-white bg-opacity-30 p-4 rounded-lg shadow-md text-center">
                        <h3 className="text-xl font-semibold text-secondary">אימייל</h3>
                        <p className="text-lg text-ellipsis overflow-hidden">info@idf.com</p>
                    </div>

                    {/* Card 4: Address */}
                    <div className="bg-white bg-opacity-30 p-4 rounded-lg shadow-md text-center">
                        <h3 className="text-xl font-semibold text-secondary">כתובת</h3>
                        <p className="text-lg text-ellipsis overflow-hidden">תל אביב, ישראל</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact