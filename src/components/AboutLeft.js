import React from "react"
import Grid from '@material-ui/core/Grid'
import Photo from '../images/photo.jpg'
import Image from 'material-ui-image'

export default function About() {
    return (
        <div>
            <Image 
                src={Photo}
            />
            <Grid container direction="column">
                <Grid item >
                    <h1>About me</h1>
                    <p>test</p>
                </Grid>
                <Grid item>
                    <h1>About me</h1>
                    <p>test</p>
                </Grid>
                
            </Grid>
            
            
        </div>
    )
}