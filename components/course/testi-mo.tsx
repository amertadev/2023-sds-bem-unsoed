export default function TestiMO() {
    return (
        <div className='space-y-4 px-6 lg:px-52'>
            <div className="p-2 border bg-white rounded-lg inline-block mb-2">
                <span className="font-display opacity-70">Testimonials👩‍💻</span>
            </div>
            <div className="flex gap-4">
                <div className="flex gap-2 rounded-lg border bg-background p-6 shadow-lg">
                    <img src="/assets/fitri.png" alt="testi-1" className="h-12 w-12 object-cover rounded-full" />
                    <div>
                        <p className="font-bold text-tremor-content-strong">Fitriana Nurbaiti</p>
                        <p className="text-tremor-content">Saya sangat senang bisa mengikuti Microsoft Office bersama Soedirman Digital School. Materi yang disampaikan sangat mudah dipahami dan bermanfaat. Terima kasih!</p>
                    </div>
                </div>
                <div className="flex gap-2 rounded-lg border bg-background p-6 shadow-lg">
                    <img src="/assets/isna.png" alt="testi-1" className="h-12 w-12 object-cover rounded-full" />
                    <div>
                        <p className="font-bold text-tremor-content-strong">Isna Febriyana</p>
                        <p className="text-tremor-content">Saya sangat senang bisa mengikuti Microsoft Office bersama Soedirman Digital School. Materi yang disampaikan sangat mudah dipahami dan bermanfaat. Terima kasih!</p>
                    </div>
                </div>
                <div className="flex gap-2 rounded-lg border bg-background p-6 shadow-lg">
                    <img src="/assets/regita.png" alt="testi-1" className="h-12 w-12 object-cover rounded-full" />
                    <div>
                        <p className="font-bold text-tremor-content-strong">Regita Rahman</p>
                        <p className="text-tremor-content">Saya sangat senang bisa mengikuti Microsoft Office bersama Soedirman Digital School. Materi yang disampaikan sangat mudah dipahami dan bermanfaat. Terima kasih!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}