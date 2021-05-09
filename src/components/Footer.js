import React from "react"
import Typography from '@material-ui/core/Typography'

const styles = {
    footerContainer: {
        backgroundColor: "#091921",
        color: "white",
        textAlign: "center",
        margin: "auto",
        padding: "15px"
    }
};

export default function ContactMe() {
    return (
        <div style={styles.footerContainer}>
            <Typography
                align="center">
                Copyright © {new Date().getFullYear} | Maksym Haponov 
            </Typography>
        </div>
    )
}