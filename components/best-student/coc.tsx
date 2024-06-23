"use client"
import { Righteous } from 'next/font/google'
import { MutableRefObject, useRef } from 'react'
import html2canvas from 'html2canvas'

const righteous = Righteous({
    subsets: ['latin'],
    weight: '400'
})

export async function Coc() {
    const bsOfficeRef = useRef(null)
    const bsDataRef = useRef(null)
    const bsMarketRef = useRef(null)

    const handleDownload = async (ref: MutableRefObject<null>, filename: string) => {
        if (ref.current) {
            const canvas = await html2canvas(ref.current)
            const image = canvas.toDataURL("image/png")
            const link = document.createElement('a')
            link.href = image
            link.download = filename
            link.click()
        }
    }
    return (
        <div className="flex flex-col lg:flex-row gap-4 w-full mx-auto">
            <div className="w-fit flex flex-col gap-4">
                <div id='bs-office' ref={bsOfficeRef} className="border rounded-md shadow-xl p-4 flex flex-col text-[#3a3c67]/90">
                    <div className="flex justify-between">
                        <img src="/assets/logo.svg" alt="logo" width={200} />
                        <h2 className="text-sm font-bold font-display leading-tight text-end">Microsoft<br />Office</h2>
                    </div>
                    <div className="flex gap-10 -mt-8">
                        <div className="flex flex-col justify-center items-center ml-4">
                            <h1 className={`text-4xl ${righteous.className}`}>N</h1>
                            <h1 className={`text-4xl ${righteous.className}`}>A</h1>
                            <h1 className={`text-4xl ${righteous.className}`}>U</h1>
                            <h1 className={`text-4xl ${righteous.className}`}>F</h1>
                            <h1 className={`text-4xl ${righteous.className}`}>A</h1>
                            <h1 className={`text-4xl ${righteous.className}`}>L</h1>
                        </div>
                        <img src="/assets/naufal.png" alt="naufal" className='w-64 md:w-72' />
                    </div>
                    <div className="flex flex-col w-full font-display">
                        <div className="flex justify-between items-center px-4 py-2 bg-[#3a3c67]/80 text-white rounded-t-lg border-b-2 border-white">
                            <h2 className="text-xl tracking-widest font-bold">FAPERTA</h2>
                            <div className="h-8 w-[1.5px] bg-white"></div>
                            <h2 className="text-xl font-medium">A1C024019</h2>
                            <div className="h-8 w-[2px] bg-white"></div>
                            <div className="flex flex-col">
                                <h3 className='text-xs opacity-80 leading-tight'>Instagram :</h3>
                                <a className='text-sm leading-tight' href="https://www.instagram.com/naufalh1d/" target="_blank">@naufalh1d</a>
                            </div>
                        </div>
                        <div className="text-[10px] md:text-xs text-center rounded-b-lg bg-[#3a3c67] text-white font-default tracking-tighter py-2">
                            Congratulations for being the <strong className='text-yellow-500'>Best Student of Microsoft Office!</strong><br />Keep up the good work and keep learning!
                        </div>
                    </div>
                </div>
                <button onClick={() => handleDownload(bsOfficeRef, 'bs-office.png')} className='bg-blue-700 hover:bg-blue-500 text-white rounded-md px-4 py-2'>Download</button>
            </div>
            <div className="w-fit flex flex-col gap-4">
                <div id='bs-data' ref={bsDataRef} className="border rounded-md shadow-xl p-4 flex flex-col text-[#3a3c67]/90">
                    <div className="flex justify-between">
                        <img src="/assets/logo.svg" alt="logo" width={200} />
                        <h2 className="text-sm font-bold font-display leading-tight text-end">Data<br />Analyst</h2>
                    </div>
                    <div className="flex gap-10 -mt-8">
                        <div className="flex flex-col justify-center items-center ml-4">
                            <h1 className={`text-4xl ${righteous.className}`}>H</h1>
                            <h1 className={`text-4xl ${righteous.className}`}>A</h1>
                            <h1 className={`text-4xl ${righteous.className}`}>N</h1>
                            <h1 className={`text-4xl ${righteous.className}`}>I</h1>
                            <h1 className={`text-4xl ${righteous.className}`}>F</h1>
                        </div>
                        <img src="/assets/hanif.png" alt="hanif" className='w-64 md:w-72' />
                    </div>
                    <div className="flex flex-col w-full font-display">
                        <div className="flex justify-between items-center px-4 py-2 bg-[#3a3c67]/80 text-white rounded-t-lg border-b-2 border-white">
                            <h2 className="text-xl tracking-widest font-bold">FMIPA</h2>
                            <div className="h-8 w-[1.5px] bg-white"></div>
                            <h2 className="text-xl font-medium">K1B024080</h2>
                            <div className="h-8 w-[2px] bg-white"></div>
                            <div className="flex flex-col">
                                <h3 className='text-xs opacity-80 leading-tight'>Instagram :</h3>
                                <a className='text-sm leading-tight' href="https://www.instagram.com/hanifh1nif/" target="_blank">@hanifh1nif</a>
                            </div>
                        </div>
                        <div className="text-[10px] md:text-xs text-center rounded-b-lg bg-[#3a3c67] text-white font-default tracking-tighter py-2">
                            Congratulations for being the <strong className='text-yellow-500'>Best Student of Data Analyst!</strong> <br />Keep up the good work and keep learning!
                        </div>
                    </div>
                </div>
                <button onClick={() => handleDownload(bsDataRef, 'bs-data.png')} className='bg-blue-700 hover:bg-blue-500 text-white rounded-md px-4 py-2'>Download</button>
            </div>
            <div className="w-fit flex flex-col gap-4">
                <div id='bs-market' ref={bsMarketRef} className="border rounded-md shadow-xl p-4 flex flex-col text-[#3a3c67]/90">
                    <div className="flex justify-between">
                        <img src="/assets/logo.svg" alt="logo" width={200} />
                        <h2 className="text-sm font-bold font-display leading-tight text-end">Digital<br />Marketing</h2>
                    </div>
                    <div className="flex gap-10 -mt-8">
                        <div className="flex flex-col justify-center items-center ml-4">
                            <h1 className={`text-4xl ${righteous.className}`}>D</h1>
                            <h1 className={`text-4xl ${righteous.className}`}>I</h1>
                            <h1 className={`text-4xl ${righteous.className}`}>N</h1>
                            <h1 className={`text-4xl ${righteous.className}`}>D</h1>
                            <h1 className={`text-4xl ${righteous.className}`}>A</h1>
                        </div>
                        <img src="/assets/dinda.png" alt="dinda" className='w-64 md:w-72' />
                    </div>
                    <div className="flex flex-col w-full font-display">
                        <div className="flex justify-between items-center px-4 py-2 bg-[#3a3c67]/80 text-white rounded-t-lg border-b-2 border-white">
                            <h2 className="text-xl tracking-widest font-bold">FEB</h2>
                            <div className="h-8 w-[1.5px] bg-white"></div>
                            <h2 className="text-xl font-medium">C0A024041</h2>
                            <div className="h-8 w-[2px] bg-white"></div>
                            <div className="flex flex-col">
                                <h3 className='text-xs opacity-80 leading-tight'>Instagram :</h3>
                                <a className='text-sm leading-tight' href="https://www.instagram.com/dindah1n/" target="_blank">@dindah1n</a>
                            </div>
                        </div>
                        <div className="text-[10px] md:text-xs text-center rounded-b-lg bg-[#3a3c67] text-white font-default tracking-tighter py-2">
                            Congratulations for being the <strong className='text-yellow-500'>Best Student of Digital Marketing!</strong> <br />Keep up the good work and keep learning!
                        </div>
                    </div>
                </div>
                <button onClick={() => handleDownload(bsMarketRef, 'bs-market.png')} className='bg-blue-700 hover:bg-blue-500 text-white rounded-md px-4 py-2'>Download</button>
            </div>
        </div>
    )
}
