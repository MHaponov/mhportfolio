import React from "react"
import Typography from '@material-ui/core/Typography'

const styles = {
    footerContainer: {
        border: "1px solid black",
        height: "50px",
        align: "center"
    }
};

export default function ContactMe() {
    return (
        <div style={styles.footerContainer}>
            <Typography color="primary"
                align="center">
                Copyright , Maksym Haponov
            </Typography>

        </div>
    )
}