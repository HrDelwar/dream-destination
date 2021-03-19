import React from 'react';
import car from '../../images/car.png';
import bus from '../../images/bus.png';
import train from '../../images/train.png';
import bike from '../../images/bike.png';
import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import bg from '../../images/bg.png';



const ridesItems = [
    { name: "Bike", photo: bike, },
    { name: "Car", photo: car },
    { name: "Bus", photo: bus },
    { name: "Train", photo: train },
];


const useStyles = makeStyles({
    root: {
        marginTop: '2rem',
        minHeight: 'calc(100vh - 200px)',
        display: 'flex',
        alignItems: 'center',
        '& a': {
            textDecoration: 'none'
        },
        '& .MuiCard-root' : {
            background:'#484340c9',
            color:'#fff'
        }
    },
    media: {
        padding: '20px 0',
        height: 150,
        width: 'auto',
        margin: '0 auto'
    },
});

const Home = () => {
    document.body.style.cssText = `background:url(${bg}) no-repeat 0% 0%/ cover; height:100vh`;

    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container spacing="4">
                {
                    ridesItems.map(item => (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Link to={`/destination/${item.name}`}>
                                <Card key={item.name} >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            className={classes.media}
                                            src={item.photo}
                                            title={item.name}
                                        />
                                        <CardContent>
                                            <Typography align="center" gutterBottom variant="h5" component="h2">
                                                {item.name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default Home;