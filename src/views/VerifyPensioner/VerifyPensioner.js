/* eslint-disable */
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import pic from 'assets/images/user.png';

const VerifyPensioner = () => (
    <>
        <AppBar className="mt-4" position="static">
            <Toolbar className="h-32">
                <Typography variant="h2">
                    <div className="text-white">Verify Pensioner</div>
                </Typography>
            </Toolbar>
        </AppBar>
        <div className="flex justify-center items-center pt-16">
            <Card className="justify-center w-96">
                <CardActionArea>
                    <CardMedia component="img" height="60" image={pic} alt="green iguana" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Schedule a meeting with pensioners
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            The button below will schedule a meeting with pensioners and also notify them of the meeting details
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        size="small"
                        color="primary"
                        href="https://calendar.google.com/calendar/u/0/r/eventedit?vcon=meet&dates=now&hl=en&pli=1"
                    >
                        Schedule meeting
                    </Button>
                </CardActions>
            </Card>
        </div>
    </>
);

export default VerifyPensioner;
