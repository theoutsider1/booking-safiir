import React from 'react'
import logoCircle from "../../assets/logo-circle.png"
function Footer() {
    return (
        <div className='bg-[#0D2252] text-white relative'>
            <div className='absolute inset-x-0 top-[-5rem] flex items-center justify-center'>
                <img src={logoCircle} alt="Logo footer" />
            </div>
            <div className="container max-w-6xl mx-auto px-4 py-[7rem] grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                    <h3 className="text-xl font-bold">
                        <span className="text-main">
                            نحن مكتب <b> سفير</b>
                        </span>
                    </h3>
                    <p>نحن مكتب مكون من فريق متخصص في الإرشاد التربوي والإرشاد الدراسي.</p>
                    <h3 className="text-xl font-bold">
                        <span className="text-main">
                            ساعات العمل:
                        </span>
                    </h3>
                    <p>
                        من الإثنين إلى الجمعة: 10:00 – 18:00،<br />
                        السبت – الأحد: مغلق
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold">
                        <span className="text-main">
                            احصل على موعد
                        </span>
                    </h3>
                    <ul className="space-y-2">
                        <li><a href="https://safiir.ma/terms-of-sale/?lang=en" className="text-blue-500">Terms Of Sale</a></li>
                        <li><a href="https://safiir.ma/terms-of-sale-french/?lang=en" className="text-blue-500">Conditions De Vente</a></li>
                        <li><a href="https://safiir.ma/terms-of-sale-arabic/?lang=en" className="text-blue-500">شروط البيع</a></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold">
                        <span className="text-main">
                            المعلومات الرسمية:
                        </span>
                    </h3>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <span className="text-xl text-gray-600"><i className="fas fa-map-marker-alt"></i></span>
                            <span className="ml-2">العنوان : الفيلا رقم 16، شارع حسان، الشقة رقم 2، الطابق الأرضي، حي حسان، الرباط، المغرب</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-xl text-gray-600"><i className="fas fa-phone-alt"></i></span>
                            <a href="Tel:+212666779747" className="ml-2 text-blue-500">212-666-77-97-47</a>
                        </li>
                        <li className="flex items-center">
                            <span className="text-xl text-gray-600"><i className="fas fa-envelope"></i></span>
                            <span className="ml-2">Contact@safiir.ma</span>
                        </li>
                    </ul>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/safiir.ma1/" className="text-gray-600"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://mobile.twitter.com/safiir_ma" className="text-gray-600"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/safiir.ma" className="text-gray-600"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer