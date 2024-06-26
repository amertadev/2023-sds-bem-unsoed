import { Divider } from "@tremor/react";
import { Twitter } from "../shared/icons";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const mentorDA = {
    name: "Bima Putra Pratama",
    username: "@bimaputra",
    job: "Senior Analytics Engineer at Partipost",
    bio: "Bima Putra Pratama adalah seorang profesional yang berpengalaman di bidang Data Analytics dan Data Engineering dengan pengalaman lebih dari 5 tahun di industri teknologi. Saat ini, Bima menjabat sebagai Senior Analytics Engineer di Partipost. Bima juga merupakan lulusan dari Universitas Indonesia dengan gelar Sarjana Teknik Informatika. Bima memiliki pengalaman kerja di perusahaan-perusahaan ternama seperti Gojek, Traveloka, dan BCG.",
    imageHeader: "/assets/bima.jpg",
    imageProfile: "/assets/bima.png",
    socialMedia: [
        {
            platform: "instagram",
            link: "https://instagram.com/bimaputrapratama"
        },
        {
            platform: "twitter",
            link: "https://twitter.com/bimaputrapratama"
        },
        {
            platform: "linkedin",
            link: "https://www.linkedin.com/in/bima-p-pratama/"
        }
    ]
};

export default function MentorDA() {
    return (
        <div className="w-full lg:w-fit px-6 lg:px-0">
            <div className="p-2 border bg-white rounded-lg inline-block mb-2">
                <span className="font-display opacity-70">Mentor🧑‍🏫</span>
            </div>
            <div className="flex flex-col gap-2 rounded-lg border bg-background p-6 shadow-lg">
                <div>
                    <img src={mentorDA.imageHeader} alt="header ignasius" className="h-20 md:h-24 w-full lg:max-w-2xl object-cover rounded-lg" />
                    <img src={mentorDA.imageProfile} alt="ignasius" className="w-20 md:w-24 rounded-full ring-2 md:ring-4 ring-white relative z-10 -mt-10 mx-auto md:ml-6" />
                    <div className="px-2 mt-3 md:-mt-11 flex justify-center md:justify-end gap-2">
                        {mentorDA.socialMedia.map((social, index) => (
                            <a key={index} href={social.link} target="_blank" rel="noreferrer">
                                {social.platform === "instagram" && <InstagramLogoIcon className="h-5 w-5 text-pink-500 hover:text-pink-700" />}
                                {social.platform === "twitter" && <Twitter className="h-5 w-5 text-tremor-brand hover:text-tremor-brand-emphasis" />}
                                {social.platform === "linkedin" && <LinkedInLogoIcon className="h-5 w-5 text-tremor-brand hover:text-tremor-brand-emphasis" />}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="md:ml-6 md:mt-6 flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-1">
                        <h3 className="font-bold text-xl md:text-2xl text-tremor-content-strong">{mentorDA.name}</h3>
                        <svg className="h-fit w-[21px] md:w-6 mt-[2px] md:mt-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"></polygon><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"></polygon>
                        </svg>
                    </div>
                    <p className="text-tremor-content">{mentorDA.username}</p>
                    <p className="text-tremor-content-strong">{mentorDA.job}</p>
                </div>
                <Divider className="my-2 md:px-6" />
                <p className="text-tremor-content text-justify md:px-6 max-w-2xl">
                    {mentorDA.bio}
                </p>
            </div>
        </div>
    )
}