import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
//import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import imgg from '../images/head_back.jpg'
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
                        <CardMedia style={styles.cardMedia} image={imgg}>

                        </CardMedia>
                        <CardContent>
                            <h3>This portfilio website</h3>
                            <p style={styles.cardParagraph}>Portfolio is built on React.JS using Material UI</p>
                        </CardContent>
                        <CardActions style={styles.cardButton}>
                            <Button size="small" color="primary">
                                View on GitHub
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card style={styles.card}>
                        <CardMedia style={styles.cardMedia} image={imgg}>

                        </CardMedia>
                        <CardContent>
                            <h3>Augmenify website</h3>
                            <p style={styles.cardParagraph}>Description</p>
                        </CardContent>
                        <CardActions style={styles.cardButton}>
                            <Button size="small" color="primary">
                                View on GitHub
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card style={styles.card}>
                        <CardMedia style={styles.cardMedia} image={imgg}>

                        </CardMedia>
                        <CardContent>
                            <h3>Project 1</h3>
                            <p style={styles.cardParagraph}>Description</p>
                        </CardContent>
                        <CardActions style={styles.cardButton}>
                            <Button size="small" color="primary">
                                View on GitHub
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

        </Container>
    )
}