import React from "react"
import Grid from '@material-ui/core/Grid'
import Photo from '../images/photo.jpg'
import Background from '../images/head_back.jpg'
import { fade } from '@material-ui/core/styles/colorManipulator'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Image from 'material-ui-image'

const styles = {
    headContainer: {
        width: "100%", 
        backgroundImage: `url(${Background})`, 
        backgroundColor: fade('#000000', 0.3), 
        
    },
    customImg: {
        height: "500px"
    }
};

export default function Head() {
    return (
        <div id="home" style={styles.headContainer}>
            <Image src={Background} styleImage={styles.customImg}>
                
            </Image>
            <Grid container
                justify="center"
                alignItems="center">
                <Grid item>
                    
                    <Typography color="primary"
                        align="center">
                        <h1>Software Developer</h1>
                        <h2>Maksym Haponov</h2>
                        <p>I am coder from Ukraine. Currently studing in Canada</p>
                    </Typography>
                </Grid>
            </Grid>
            
        </div>
    )
}