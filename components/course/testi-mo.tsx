export default function TestiMO() {
    return (
        <div className='space-y-4 px-6 lg:px-52'>
            <div className="p-2 border bg-white rounded-lg inline-block mb-2">
                <span className="font-display opacity-70">Testimonials👩‍💻</span>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-10">
                <div className="flex flex-col gap-2 rounded-lg border bg-background p-6 shadow-lg">
                    <img src="/assets/testi-1.jpg" alt="testi-1" className="h-20 md:h-24 w-full lg:max-w-2xl object-cover rounded-lg" />
                    <div className="md:ml-6 md:mt-6 flex flex-col items-center md:items-start">
                        <h3 className="font-bold text-xl md:text-2xl text-tremor-content-strong">Amanda</h3>
                        <p className="text-tremor-content">Saya sangat senang bisa mengikuti Microsoft Office bersama Soedirman Digital School. Materi yang disampaikan sangat mudah dipahami dan bermanfaat. Terima kasih!</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 rounded-lg border bg-background p-6 shadow-lg">
                    <img src="/assets/testi-2.jpg" alt="testi-2" className="h-20 md:h-24 w-full lg:max-w-2xl object-cover rounded-lg" />
                    <div className="md:ml-6 md:mt-6 flex flex-col items-center md:items-start">
                        <h3 className="font-bold text-xl md:text-2xl text-tremor-content-strong">Budi</h3>
                        <p className="text-tremor-content">Saya sangat senang bisa mengikuti Microsoft Office bersama Soedirman Digital School. Materi yang disampaikan sangat mudah dipahami dan bermanfaat. Terima kasih!</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 rounded-lg border bg-background p-6 shadow-lg">
                    <img src="/assets/testi-3.jpg" alt="testi-3" className="h-20 md:h-24 w-full lg:max-w-2xl object-cover rounded-lg" />
                    <div className="md:ml-6 md:mt-6 flex flex-col items-center md:items-start">
                        <h3 className="font-bold text-xl md:text-2xl text-tremor-content-strong">Citra</h3>
                        <p className="text-tremor-content">Saya sangat senang bisa mengikuti Microsoft Office bersama Soedirman Digital School. Materi yang disampaikan sangat mudah dipahami dan bermanfaat. Terima kasih!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}