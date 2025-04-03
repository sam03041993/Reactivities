import { Grid2, Typography } from '@mui/material'
import { useParams } from 'react-router';
import { useActivities } from '../../../lib/hooks/useActivities';
import ActivityDetailHeader from './ActivityDetailHeader';
import ActivityDetailInfo from './ActivityDetailInfo';
import ActivityDetailChat from './ActivityDetailChat';
import ActivityDetailSidebar from './ActivityDetailSidebar';

export default function ActivityDetails() {
    const { id } = useParams();
    const { activity, isLoadingActivity } = useActivities(id);

    if (isLoadingActivity) return <Typography>Loading...</Typography>


    if (!activity) return <Typography>Activity not found...</Typography>

    return (
        <Grid2 container spacing={3}>
            <Grid2 size={8}>
                <ActivityDetailHeader activity={activity} />
                <ActivityDetailInfo activity={activity} />
                <ActivityDetailChat />
            </Grid2>
            <Grid2 size={4}>
                <ActivityDetailSidebar />
            </Grid2>
        </Grid2>
    )
}
