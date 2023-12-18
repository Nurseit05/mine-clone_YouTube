import { Link } from "react-router-dom";
import { Typography, Card, Box, CardMedia, CardContent } from "@mui/material";

import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelTitle, demoChannelUrl } from "../utils/constants";

const ChannelCard = ({video: {id: {videoId}, snippet}}) => {
    return (
        <Card sx={{
                width: { xs: '100%', sn: '358px', md: '320px' },
                boxShadow: 'none', borderRadius: 'none'
            }}
        >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
                <CardMedia
                    image={snippet?.thumbnails?.high?.url} 
                    alt={snippet?.title}
                    sx={{width: {xs: '100%', sn: '358px', md: '320px' }, height: 180}}
                />
            </Link>
            <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
                    <Typography
                        variant="subtitlel" fontWeight={'bold'} color={'#FFF'}
                    >
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0,60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
                    <Typography
                        variant="subtitlel" fontWeight={'bold'} color={'gray'}
                    >
                        {snippet?.snippetTitle || demoChannelTitle}
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    );
};

export default ChannelCard;