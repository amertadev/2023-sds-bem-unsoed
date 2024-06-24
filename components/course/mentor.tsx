import { Divider } from "@tremor/react";
import { Twitter } from "../shared/icons";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Mentor() {
    return (
        <div className="w-full lg:w-fit px-6 lg:px-0">
            <div className="p-2 border bg-white rounded-lg inline-block mb-2">
                <span className="font-display opacity-70">Mentor🧑‍🏫</span>
            </div>
            <div className="flex flex-col gap-2 rounded-lg border bg-background p-6 shadow-lg">
                <div>
                    <img src="/assets/ignasius.jpg" alt="header ignasius" className="h-20 md:h-24 w-full lg:max-w-2xl object-cover rounded-lg" />
                    <img src="/assets/ignasius.png" alt="ignasius" className="w-20 md:w-24 rounded-full ring-2 md:ring-4 ring-white relative z-10 -mt-10 mx-auto md:ml-6" />
                    <div className="px-2 mt-3 md:-mt-11 flex justify-center md:justify-end gap-2">
                        <a href="https://instagram.com/ignasiusryan" target="_blank" rel="noreferrer">
                            <InstagramLogoIcon className="h-5 w-5 text-pink-500 hover:text-pink-700" />
                        </a>
                        <a href="https://twitter.com/ignasiusryan" target="_blank" rel="noreferrer">
                            <Twitter className="h-5 w-5 text-tremor-brand hover:text-tremor-brand-emphasis" />
                        </a>
                        <a href="https://www.linkedin.com/in/ignasiusryanhasim/" target="_blank" rel="noreferrer">
                            <LinkedInLogoIcon className="h-5 w-5 text-tremor-brand hover:text-tremor-brand-emphasis" />
                        </a>
                    </div>
                </div>
                <div className="md:ml-6 md:mt-6 flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-1">
                        <h3 className="font-bold text-xl md:text-2xl text-tremor-content-strong">Ignasius Ryan Hasim</h3>
                        <svg className="w-[21px] md:w-6 mt-[2px] md:mt-1" id="Layer_1" enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path id="Verified" clip-rule="evenodd" d="m15.7 10.7c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-3.3 3.3-1.3-1.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2 2c.4.4 1 .4 1.4 0zm-3.7-9.7c-1.2 0-2.3.5-3 1.4-.3.3-.4.4-.5.6-.1 0-.1 0-.1 0-.1 0-.2 0-.4 0h-1c-1 0-2 .4-2.8 1.2-.7.8-1.1 1.8-1.1 2.8v1 .4s-.1 0-.1.1c-.2.1-.3.2-.6.5-.9.7-1.4 1.8-1.4 3s.5 2.3 1.4 3c.3.2.4.4.6.5 0 0 .1.1.1.1v.4 1c0 1 .4 2 1.2 2.8.7.7 1.7 1.1 2.7 1.1h1 .4s0 .1.1.1c.1.1.3.3.5.6.7.9 1.8 1.4 3 1.4s2.3-.5 3-1.4c.2-.3.4-.4.5-.6 0 0 .1-.1.1-.1h.4 1c1 0 2-.4 2.8-1.2s1.2-1.8 1.2-2.8v-1c0-.2 0-.3 0-.4s.1 0 .1-.1c.1-.1.3-.3.6-.5.9-.7 1.4-1.8 1.4-3s-.5-2.3-1.4-3c-.3-.2-.4-.4-.6-.5 0 0-.1-.1-.1-.1 0-.1 0-.2 0-.4v-.9c0-1-.4-2-1.2-2.8-.8-.7-1.8-1.1-2.8-1.1h-1c-.2 0-.3 0-.4 0s0-.1-.1-.1c-.1-.1-.3-.3-.5-.6-.7-.9-1.8-1.4-3-1.4z" fill="#1089ff" fill-rule="evenodd" /></svg>
                    </div>
                    <p className="text-tremor-content">@ignasiusryan</p>
                    <p className="text-tremor-content-strong">VP Business at Halodoc</p>
                </div>
                <Divider className="my-2 md:px-6" />
                <p className="text-tremor-content text-justify md:px-6 max-w-2xl">
                    Ignasius merupakan seorang profesional yang berpengalaman di bidang Business Development dan Business Strategy. Saat ini, Ignasius menjabat sebagai VP Business di Halodoc. Ignasius juga merupakan lulusan dari Universitas Indonesia dengan gelar Sarjana Teknik Industri. Ignasius memiliki pengalaman kerja di perusahaan-perusahaan ternama seperti Gojek, Traveloka, dan BCG. Ignasius juga memiliki pengalaman sebagai mentor di bidang Business Development dan Business Strategy.
                </p>
            </div>
        </div>
    )
}
