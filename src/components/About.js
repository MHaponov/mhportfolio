import React from "react"
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const styles = {
    aboutContainer: {
        border: "1px solid black",
        height: "500px"
    }
};

export default function About() {
    return (
        <div id="about" style={styles.aboutContainer}>
            
            <h1>About me</h1>
            <p>Paragraph</p>
        </div>
    )
}