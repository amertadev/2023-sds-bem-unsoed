import { RiCheckboxCircleFill } from '@remixicon/react';
import { Divider, List, ListItem } from '@tremor/react';

const features = [
    {
        id: 1,
        name: <>Mahasiswa aktif S1/Vokasi Universitas Jenderal Soedirman dan <span className="font-medium">terbuka untuk Umum</span></>,
    },
    {
        id: 2,
        name: 'Mengerjakan tugas pretest, upload twibbon, dan mengisi form pendaftaran',
    },
    {
        id: 3,
        name: 'Memiliki minat belajar tentang penggunaan Microsoft Office',
        alt: 'Tertarik untuk belajar cara mengolah dan memahami data',
        other: 'Memiliki minat dalam dunia pemasaran online'
    },
    {
        id: 4,
        name: 'Bersedia mengikuti praktek dasar Microsoft Word, Excel, dan PowerPoint',
        alt: 'Bersedia belajar dasar-dasar analisis data menggunakan Spreadsheet dan Looker Studio',
        other: 'Bersedia belajar tentang berbagai platform media sosial untuk pemasaran'
    },
    {
        id: 5,
        name: 'Memiliki akses ke perangkat komputer untuk mengerjakan tugas',
        alt: 'Memiliki keingintahuan tentang cara membuat visualisasi data',
        other: 'Tertarik untuk belajar membuat konten digital'
    },
];

export default function Course() {
    return (
        <div className="px-6 lg:max-w-[75rem] lg:mx-auto">
            <div className="p-2 border bg-white rounded-lg inline-block mb-2">
                <span className="font-display opacity-70">Learning Path📚</span>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-1/3 rounded-tremor-default border border-tremor-border bg-white p-6">
                    <div className="flex gap-2 h-20 w-full">
                        <img src="/assets/ignasius.svg" alt="Office" className="w-[72px] object-cover mb-2 rounded-lg" />
                        <img src="https://images.unsplash.com/photo-1632239776255-0a7f24814df2" alt="Office" className="w-full object-cover mb-2 rounded-lg" />
                    </div>
                    <div className="flex items-start justify-between space-x-6">
                        <h3 className="font-semibold text-2xl text-tremor-content-strong">
                            Microsoft Office
                        </h3>
                        <p className="flex items-baseline">
                            <span className="font-semibold text-tremor-content-strong">
                                Gratis✨
                            </span>
                        </p>
                    </div>
                    <List className="mt-4 divide-y-0 text-tremor-content-emphasis">
                        {features.map((item, index) => (
                            <ListItem
                                key={item.id}
                                className="justify-start space-x-2 py-2.5"
                            >
                                <RiCheckboxCircleFill
                                    className={`h-5 w-5 shrink-0 ${index < 2 ? 'text-tremor-brand' : 'text-yellow-500'
                                        }`}
                                    aria-hidden={true}
                                />
                                <span>{item.name}</span>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <a
                        href="#"
                        className="block w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand py-2.5 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis"
                    >
                        Daftar Sekarang
                    </a>
                </div>
                <div className="lg:w-1/3 rounded-tremor-default border border-tremor-border bg-white p-6">
                    <div className="flex gap-2 h-20 w-full">
                        <img src="/assets/bima.svg" alt="Data Analyst" className="w-[72px] object-cover mb-2 rounded-lg" />
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="Data Analyst" className="w-full object-cover mb-2 rounded-lg" />
                    </div>
                    <div className="flex items-start justify-between space-x-6">
                        <h3 className="font-semibold text-2xl text-tremor-content-strong">
                            Data Analyst
                        </h3>
                        <p className="flex items-baseline">
                            <span className="font-semibold text-tremor-content-strong">
                                Gratis✨
                            </span>
                        </p>
                    </div>
                    <List className="mt-4 divide-y-0 text-tremor-content-emphasis">
                        {features.map((item, index) => (
                            <ListItem
                                key={item.id}
                                className="justify-start space-x-2 py-2.5"
                            >
                                <RiCheckboxCircleFill
                                    className={`h-5 w-5 shrink-0 ${index < 2 ? 'text-tremor-brand' : 'text-yellow-500'
                                        }`}
                                    aria-hidden={true}
                                />
                                <span>{index < 2 ? item.name : (index >= 2 && index <= 4 ? item.alt : item.name)}</span>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <a
                        href="#"
                        className="block w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand py-2.5 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis"
                    >
                        Daftar Sekarang
                    </a>
                </div>
                <div className="lg:w-1/3 rounded-tremor-default border border-tremor-border bg-white p-6">
                    <div className="flex gap-2 h-20 w-full">
                        <img src="/assets/agusleo.svg" alt="Market" className="w-[72px] object-cover mb-2 rounded-lg" />
                        <img src="https://images.unsplash.com/photo-1535303311164-664fc9ec6532" alt="Market" className="w-full object-cover mb-2 rounded-lg" />
                    </div>
                    <div className="flex items-start justify-between space-x-6">
                        <h3 className="font-semibold text-2xl text-tremor-content-strong">
                            Digital Marketing
                        </h3>
                        <p className="flex items-baseline">
                            <span className="font-semibold text-tremor-content-strong">
                                Gratis✨
                            </span>
                        </p>
                    </div>
                    <List className="mt-4 mb-[63px] divide-y-0 text-tremor-content-emphasis">
                        {features.map((item, index) => (
                            <ListItem
                                key={item.id}
                                className="justify-start space-x-2 py-2.5"
                            >
                                <RiCheckboxCircleFill
                                    className={`h-5 w-5 shrink-0 ${index < 2 ? 'text-tremor-brand' : 'text-yellow-500'
                                        }`}
                                    aria-hidden={true}
                                />
                                <span>{index < 2 ? item.name : (index >= 2 && index <= 4 ? item.other : item.name)}</span>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <a
                        href="#"
                        className="block w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand py-2.5 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis"
                    >
                        Daftar Sekarang
                    </a>
                </div>
            </div>
        </div>
    );
}