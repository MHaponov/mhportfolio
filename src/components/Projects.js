import React from 'react'

const styles = {
    projectsContainer: {
        height: "500px"
    }
}

export default function Projects() {
    return (
        <div id="my-projects" style={styles.projectsContainer}>
            <h1>My Projects</h1>
        </div>
    )
}