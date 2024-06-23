import * as React from 'react';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import TimelineContent from '@mui/lab/TimelineContent';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import GroupsIcon from '@mui/icons-material/Groups';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import CampaignIcon from '@mui/icons-material/Campaign';
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

export default function CustomizedTimeline() {
    return (
        <Timeline position="alternate">
            <div className="w-fit mx-auto p-2 border bg-white rounded-lg inline-block mb-2">
                <span className="font-display opacity-70">Start Timeline📌</span>
            </div>
            <TimelineItem sx={{ '&:before': { display: 'none' }}}>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    14/09/2024 - 17/09/2024
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'grey.main' }} />
                    <TimelineDot color="grey">
                        <HowToRegIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography marginTop={2} fontStyle={"italic"} fontWeight={600}>
                        Open Registration
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    21/09/2024
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    <TimelineDot color="secondary">
                        <GroupsIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'warning.main' }} />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography marginTop={2} fontStyle={"italic"} fontWeight={600}>
                        Technical Meeting
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    22/09/2024 - 23/09/2024
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'warning.main' }} />
                    <TimelineDot color="warning">
                        <HistoryEduIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography marginTop={2} fontStyle={"italic"} fontWeight={600}>
                        Pre-Test
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    27/09/2024
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                    <TimelineDot color="primary">
                        <CampaignIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'error.main' }} />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography marginTop={2} fontStyle={"italic"} fontWeight={600}>
                        Participant Announcement
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    05/10/2024 - 30/11/2024
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'error.main' }} />
                    <TimelineDot color="error">
                        <LocalLibraryIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'success.main' }} />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography marginTop={2} fontStyle={"italic"} fontWeight={600}>
                        Academy
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    07/12/2024
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'success.main' }} />
                    <TimelineDot color="success">
                        <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'success.main' }} />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography marginTop={2} fontStyle={"italic"} fontWeight={600}>
                        Graduation
                    </Typography>
                    <Typography fontSize={12} color={"primary.main"}>
                        <a href="/best-student" className='hover:text-blue-900'>+ Best Student Announcement</a>
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <div className="w-fit mx-auto p-2 border bg-white rounded-lg inline-block mt-2">
                <span className="font-display opacity-70">Finish Timeline✅</span>
            </div>
        </Timeline>
    );
}