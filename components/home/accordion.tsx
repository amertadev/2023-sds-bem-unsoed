import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionUsage() {
    return (
        <div className='space-y-4 px-6 lg:px-48'>
            <div className="p-2 border bg-white rounded-lg inline-block mb-2">
                <span className="font-display opacity-70">Need More Help?🤔</span>
            </div>
            <Accordion className='rounded-lg'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Apakah acara ini gratis?
                </AccordionSummary>
                <AccordionDetails>
                    Ya, acara ini gratis dan terbuka untuk umum.
                </AccordionDetails>
            </Accordion>
            <Accordion className='rounded-lg'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    Kapan pendaftaran Soedirman Digital School dibuka?
                </AccordionSummary>
                <AccordionDetails>
                    Dari tanggal 14 September - 17 September 2024.
                </AccordionDetails>
            </Accordion>
            <Accordion className='rounded-lg'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    Komunikasi utama antara panitia dan pendaftar/calon pendaftar akan dilakukan dimana?
                </AccordionSummary>
                <AccordionDetails>
                    Terdapat WhatsApp Community untuk memfasilitasi pertanyaan dan komunikasi pendaftar/calon pendaftar Soedirman Digital School.
                </AccordionDetails>
            </Accordion>
            <Accordion className='rounded-lg'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4-content"
                    id="panel4-header"
                >
                    Bagaimana sistem pendaftaran tiap pelatihan?
                </AccordionSummary>
                <AccordionDetails>
                    Pendaftaran dilakukan secara online melalui website Soedirman Digital School.
                </AccordionDetails>
            </Accordion>
        </div>
    );
}