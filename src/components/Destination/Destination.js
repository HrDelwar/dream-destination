import { Avatar, Button, CardActions, Container, Grid, IconButton, List, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Map from '../Map/Map';
import PickForm from '../PickForm/PickForm';
import { ridesItems } from './destinationDate';
import { useParams } from 'react-router';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PeopleIcon from '@material-ui/icons/People';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@material-ui/lab';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: '#707070',
        color: '#fff',
        '& .MuiListItemIcon-root': {
            color: '#fff'
        },
        alignItems: 'flex-start',
    },
    item: {
        '& .MuiAvatar-img': {
            height: "auto"
        },
        '& .MuiAvatar-square': {
            width: 80,
            height: 80
        },
        '& .MuiCardActions-root': {
            backgroundColor: '#a198984f',
            margin: '20px 0',
            borderRadius: '4px'
        },
    },
    column: {
        paddingRight: "1rem",
        [theme.breakpoints.down('sm')]: {
            padding: '0',
        },
    }
}));

const Destination = () => {
    document.body.style.cssText = `background:#fff;`;

    const { ridesType } = useParams();
    const ridesTypes = ridesItems.filter(ridesItem => ridesItem.name === ridesType);
    const classes = useStyles()

    const [destinationInfo, setDestinationInfo] = useState({});
    const [isPicked, setIsPicked] = useState(false);
    console.log(destinationInfo);
    return (
        <Container style={{ marginTop: '2rem' }}>
            <Grid container>
                <Grid item xs={12} sm={12} md={4} className={classes.column}>
                    {isPicked ?
                        <>

                            <Timeline className={classes.root} >
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>{destinationInfo.pickFrom}</TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{ minHeight: "40px" }}>
                                    <TimelineSeparator>
                                        <TimelineDot />
                                    </TimelineSeparator>
                                    <TimelineContent>{destinationInfo.pickTo}</TimelineContent>
                                </TimelineItem>
                                <Typography style={{margin:"0 auto"}} align="center">{`${moment(destinationInfo.date).format('dddd')}, ${moment(destinationInfo.date).format('LL')} ${moment(destinationInfo.time, "HH:mm").format("hh:mm A")}`}</Typography>
                            </Timeline>

                            <List component="ul" aria-label="contacts" className={classes.item}>
                                {
                                    ridesTypes.map(ridesItem => (
                                        <CardActions key={ridesItem.id}>
                                            <Avatar alt={ridesItem.name} src={ridesItem.image} variant="square" />
                                            <Button size="small" color="primary" style={{ textTransform: 'capitalize' }}>
                                                {ridesItem.name}
                                            </Button>
                                            <IconButton size="small" color="primary">
                                                <PeopleIcon />
                                                {ridesItem.capability}
                                            </IconButton>
                                            <IconButton size="small" color="primary">
                                                <AttachMoneyIcon />
                                                {ridesItem.demand}
                                            </IconButton>
                                        </CardActions>
                                    ))
                                }
                            </List>
                        </>
                        :
                        <PickForm setDestinationInfo={setDestinationInfo} setIsPicked={setIsPicked} />}
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <Map destinationInfo={destinationInfo} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Destination;