type Testimonial = {
    name: string;
    text: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Dinda Aulia",
        text: "Pelatihan ini membuka wawasan saya tentang dunia digital. Strategi yang dipelajari langsung meningkatkan engagement online bisnis saya. Sangat worth it!",
        image: "/assets/dinda.png",
    },
    {
        name: "Luthfi Emilulfata",
        text: "Dari SEO hingga social media ads, materinya lengkap dan up-to-date. Kini saya lebih percaya diri mengelola kampanye digital untuk klien-klien saya.",
        image: "https://media.licdn.com/dms/image/D4E03AQHIjBbUtX8Kow/profile-displayphoto-shrink_800_800/0/1694940647706?e=1724889600&v=beta&t=J_1ZkTllPi_yoxd-IWyqlQKeufwlB6MbBtkqQlQNIgk",
    },
    {
        name: "Fitriana Nurbaiti",
        text: "Instrukturnya ahli dan materi mudah dipahami. Dalam sebulan, traffic website kami meningkat 50%! Pelatihan ini benar-benar game changer untuk bisnis kami.",
        image: "/assets/fitri.png",
    },
];

export default function TestiDM() {
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
