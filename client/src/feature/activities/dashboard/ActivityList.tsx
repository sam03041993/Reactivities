import { Box } from '@mui/material'
import React from 'react'
import ActivityCard from './ActivityCard'

type Props = {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityList({ activities, selectActivity, deleteActivity }: Props) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {activities.map(x => (
                <ActivityCard key={x.id} activity={x} selectActivity={selectActivity} deleteActivity={deleteActivity} />
            ))}
        </Box>
    )
}
