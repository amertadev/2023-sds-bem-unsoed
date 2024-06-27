const partners = [
    {
        image: "https://www.bem.ft.unsoed.ac.id/wp-content/uploads/2023/09/Logo-BEM-FT.png",
        alt: "BEM FT",
    },
    {
        image: "https://media.licdn.com/dms/image/C560BAQEF2TqRjENPSQ/company-logo_200_200/0/1630670982134?e=2147483647&v=beta&t=Ar-h10fXEwUEGoFWi8EBqiFmW_kd5shLC4gKpo3vkVo",
        alt: "BEM FEB",
    },
    {
        image: "https://ugc.production.linktr.ee/Boqc8HZ0RYC7l6wh5nep_kFI9k3XfjMN4rE4P",
        alt: "BEM FAPERTA",
    },
    {
        image: "https://mediahusbandry.com/wp-content/uploads/2021/11/logo-bem.png",
        alt: "BEM FAPET",
    },
    {
        image: "https://fmipa.unsoed.ac.id/v4/wp-content/uploads/logo-bem-km-mipa-1024x1024.png",
        alt: "BEM FMIPA",
    },
];

export default function Partner() {
    return (
        <div className='space-y-4 flex flex-col justify-center items-center'>
            <div className="p-2 border bg-white rounded-lg inline-block mb-2">
                <span className="font-display opacity-70">Our Partner🤝</span>
            </div>
            <div className="flex flex-wrap justify-center gap-5 md:gap-10">
                {partners.map((partner, index) => (
                    <img
                        key={index}
                        src={partner.image}
                        alt={partner.alt}
                        className="w-auto h-24 md:h-32"
                    />
                ))}
            </div>
        </div>
    )
}
