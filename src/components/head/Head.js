import React from "react"
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {useRef} from "react"

const styles = {
    headContainer: {
        backgroundColor: "black",
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
    },
    bg: {
        position: "absolute",
        width: "100%",
        height: "110vh",
        objectFit: "cover",
        top: "0",
        left: "0",
        backgroundPosition: "center",
        backgroundSize: "cover",
        zIndex: "1",
        filter: "Brightness(60%)"
    }
};

export default function Head() {
    const videoRef = useRef();
    const setPlayBack = () => {
        videoRef.current.playbackRate = 0.8;
    };
    return (
        <div style={styles.headContainer}>
            <Grid container
                justify="center"
                alignItems="center"
                justifyContent="center"
                style={{ zIndex: "15" }}>
                <Grid item>
                    <Typography style={{ color: "white", zIndex: "15", marginBottom: "20vh" }}
                        align="center">
                        <h1 style={{fontSize:"44px"}}>Software Developer</h1>
                        <p style={{fontSize:"26px", maxWidth:"600px"}}>My name is Maksym Haponov. I am a programmer from Ukraine.</p>
                    </Typography>
                </Grid>
            </Grid>
            <video ref={videoRef} autoPlay loop muted onCanPlay={() => setPlayBack()} style={styles.bg}>
                <source src={process.env.PUBLIC_URL + '/video.mp4'} type="video/mp4" />
            </video>
        </div>
    )
}