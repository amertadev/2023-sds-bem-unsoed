type Testimonial = {
    name: string;
    text: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Hanif Ramadhan",
        text: "Pelatihan ini membuka mata saya tentang potensi data. Keterampilan analisis yang saya pelajari sangat berharga untuk karier saya. Instrukturnya luar biasa!",
        image: "/assets/hanif.png",
    },
    {
        name: "Arga Aryanta",
        text: "Materi komprehensif dan latihan praktis membantu saya menguasai tools penting. Sekarang saya lebih percaya diri menghadapi proyek analisis data di kantor.",
        image: "https://media.licdn.com/dms/image/C5603AQH2h9XE8ysKtA/profile-displayphoto-shrink_800_800/0/1663483813920?e=1724889600&v=beta&t=pS26gOaxVAIZgr-19HV_Kc98lADoHBBiUVzHCmzOJho",
    },
    {
        name: "Isna Febriyana",
        text: "Investasi terbaik untuk pengembangan diri! Saya bisa langsung menerapkan ilmu yang didapat. Pelatihan ini benar-benar mengubah cara saya melihat dan mengolah data.",
        image: "/assets/isna.png",
    },
];

export default function TestiDA() {
    return (
        <div className='space-y-4 px-6 lg:px-52'>
            <div className="p-2 border bg-white rounded-lg inline-block mb-2">
                <span className="font-display opacity-70">Testimonials👩‍💻</span>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 w-full">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="text-sm w-fit flex flex-col gap-4 rounded-lg border bg-background p-6 shadow-lg">
                        <p className="text-justify text-tremor-content">{testimonial.text}</p>
                        <div className="flex items-center">
                            <img src={testimonial.image} alt={`testi-${index}`} className="h-11 w-11 border object-cover rounded-full" />
                            <div className="ml-4">
                                <p className="font-medium leading-tight">{testimonial.name}</p>
                                <p className="text-tremor-content leading-tight">Best Student</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
