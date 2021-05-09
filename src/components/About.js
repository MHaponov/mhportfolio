import React from "react"
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Image from 'material-ui-image'
import Photo from '../images/photo.png'

const styles = {
    aboutContainer: {
        paddingTop: "10px",
    },
    imgStyle: {
        borderRadius: "50%"
    },
    iconWrap: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",

    },
    eduBlock: {
        paddingBottom: "10px"
    },
    eduParagraph: {
        marginTop: "0",
        marginBottom: "0"
    }
};

export default function About() {
    return (
        <div id="about" style={styles.aboutContainer}>
            <Container style={{ marginBottom: "3%", marginTop: "3%" }}>
                <h1 style={{ fontSize: "44px" }}>About me</h1>
                <Grid container
                    justify="center"
                    spacing={4}>
                    <Grid item xs="12" sm="10" md="4">
                        <Image src={Photo} imageStyle={styles.imgStyle} />
                        <Typography align="left">
                            <h2 style={styles.iconWrap}>Brief Information</h2>
                            <ul>
                                <li>
                                    <p><b>Full Name:</b> Maksym Haponov</p>
                                </li>
                                <li>
                                    <p><b>Age:</b> 22</p>
                                </li>
                                <li>
                                    <p><b>Origin:</b> Sumy, Ukraine</p>
                                </li>
                                <li>
                                    <p><b>Specialization:</b> Informatics (Computer Science), Software Developer</p>
                                </li>
                            </ul>
                            <h2>Background in</h2>
                            <ul>
                                <li>
                                    <p><b>Programming languages:</b> C/C++, C#, Java, PHP, JavaScript, Python </p>
                                </li>
                                <li>
                                    <p><b>Databases:</b> Oracle, MySQL, SQL Server, MongoDB </p>
                                </li>
                                <li>
                                    <p><b>Operating systems:</b> Microsoft Windows, Linux (CentOS, Ubuntu)</p>
                                </li>
                            </ul>
                        </Typography>

                    </Grid>
                    <Grid item xs="12" sm="10" md="8">
                        <Typography align="left">
                            <h2 style={{paddingTop: 0, marginTop: 0}}>Personality and Qualification Highlights</h2>
                            <p>
                                <ul>
                                    <li>
                                        Educational background in Computer Science
                                    </li>
                                    <li>
                                        Strong communication and interpersonal skills
                                    </li>
                                    <li>
                                        High interest in an IT and desire to develop in that sphere
                                    </li>
                                    <li>
                                        Ability to identify and analyze professional issues arising in a business environment
                                    </li>
                                    <li>
                                        In-depth knowledge of principles and processes for providing customer services
                                    </li>
                                    <li>
                                        Able to convey information effectively
                                    </li>
                                    <li>
                                        Experience and understanding of a team-work
                                    </li>
                                    <li>
                                        Proven ability to attend school and hold a job
                                    </li>
                                    <li>
                                        Tech-savvy, willing to learn, problem-solver, flexible, adaptable, eager
                                    </li>
                                </ul>
                            </p>
                            <h2>Education</h2>
                            <div style={styles.eduBlock}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <b>Computer Application Development</b>
                                    <b>September, 2020 – Present</b></div>
                                <div>
                                    <p style={styles.eduParagraph}>Postgraduate Certificate (Co-op)</p>
                                    <p style={styles.eduParagraph}>Conestoga Collage, Waterloo, Ontario</p>
                                </div>
                                <ul>
                                    <li>
                                        GPA – First Semester 3.9, Second Semester 4.0
                                    </li>
                                    <li>
                                        Advanced web and mobile programming
                                    </li>
                                    <li>
                                        Essentials of database design and development
                                    </li>
                                    <li>
                                        Data communications and design
                                    </li>
                                    <li>
                                        System analysis and design
                                    </li>
                                </ul>
                            </div>
                            <div style={styles.eduBlock}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <b>Software and Information Systems Testing</b>
                                    <b>January, 2020 – August, 2020</b>
                                </div>
                                <div>
                                    <p style={styles.eduParagraph}>Postgraduate Certificate</p>
                                    <p style={styles.eduParagraph}>Fanshawe Collage, London, Ontario</p>
                                </div>
                                <ul>
                                    <li>
                                        GPA – 4.0
                                    </li>
                                    <li>
                                        Knowledge of Test Methodologies, Test Automation and Software Development Life Cycle
                                    </li>
                                    <li>
                                        Project Management learnings of agile and waterfall approaches
                                    </li>
                                    <li>
                                        Deep learning of coding in Java
                                    </li>
                                </ul>
                            </div>
                            <div style={styles.eduBlock}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <b>Informatics (Computer Science)</b>
                                    <b>September, 2015 – June, 2019</b>
                                </div>
                                <div>
                                    <p style={styles.eduParagraph}>Bachelor Degree</p>
                                    <p style={styles.eduParagraph}>Sumy State University, Sumy, Ukraine</p>
                                </div>
                                <ul>
                                    <li>
                                        Essential knowledge of operation systems, programming languages (C/C++, C#, Java), databases, software system design, quality assurance, network technologies, system analysis
                                    </li>
                                </ul>
                            </div>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}