import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
//import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import PortfolioScreen from '../images/portfolio_screen.jpg'
import AugmenifyScreen from '../images/augmenify_screen.jpg'
import PopupMealScreen from '../images/popupmeals_screen.png'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

const styles = {
    projectsContainer: {
        height: "auto",
        paddingBottom: "60px"
    },
    card: {
        minWidth: "350px",
        maxWidth: "350px"
    },
    cardParagraph: {
        textAlign: "left",
        minHeight: "50px"
    },
    cardMedia: {
        height: "200px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    cardButton: {
        justifyContent: "center"
    }
}

export default function Projects() {
    return (
        <Container id="my-projects" style={styles.projectsContainer}>
            <h1 style={{paddingBottom: "20px"}}>My Projects</h1>
            <Grid container
                direction="row"
                spacing={3}
                justify="center">
                <Grid item>
                    <Card style={styles.card}>
                        <CardMedia style={styles.cardMedia} image={PortfolioScreen}>

                        </CardMedia>
                        <CardContent>
                            <h3>Portfilio Webpage</h3>
                            <p style={styles.cardParagraph}>The website is built on React.JS using Material UI. This is fully developed by me from scratch, using some external dependencies and utilizing some of common code and approaches.</p>
                        </CardContent>
                        <CardActions style={styles.cardButton}>
                            <Button size="small" color="primary" href="https://github.com/MHaponov/mhportfolio">
                                View on GitHub
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card style={styles.card}>
                        <CardMedia style={styles.cardMedia} image={PopupMealScreen}>

                        </CardMedia>
                        <CardContent>
                            <h3>Popup Meals Project</h3>
                            <p style={styles.cardParagraph}>School project for Mobile Application Development course that involved a stack of different technologies. It uses Firebase as a main database; to manage the meals menu (database), our team has developed React Native mobile app. To order a food customer would access one of available application: Progressive Web App or SMS bot. Besides, we used PayPal to allow financial transactions.</p>
                        </CardContent>
                        <CardActions style={styles.cardButton}>
                            <Button size="small" color="primary" href="https://github.com/MHaponov">
                                View on GitHub
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card style={styles.card}>
                        <CardMedia style={styles.cardMedia} image={AugmenifyScreen}>

                        </CardMedia>
                        <CardContent>
                            <h3>Augmenify Project</h3>
                            <p style={styles.cardParagraph}>This project was developed as part of System Development Project course. Our team had to find a client, communicate throughout the project and deliver product to them. The project is website of Augmenify company that do AI- and Web-related development. We used React.JS for the front-end, Strapi headless CMS for the back-end, and MongoDB as the NoSQL Database.</p>
                        </CardContent>
                        <CardActions style={styles.cardButton}>
                            <Button size="small" color="primary" href="https://github.com/MHaponov/Augmenify">
                                View on GitHub
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

        </Container>
    )
}