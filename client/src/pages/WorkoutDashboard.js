import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import WorkoutButtons from '../components/WorkoutButtons/WorkoutButtons'
import NavBar from '../components/NavBar/NavBar'
import { makeStyles } from '@material-ui/core/styles';
import WOD from '../components/WOD/WOD'
import Logo from '../components/Logo/Logo'
import WorkoutFitmoodji from '../components/WorkoutFitmoodji/WorkoutFitmoodji'

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: "#B8C0DB",
        height: "130vh"
    },
}));

function WorkoutDashboard() {

    const classes = useStyles();

    return (
            <Container maxWidth="sm" className={classes.background}>
                <Logo />
                <WOD />
                <WorkoutButtons />
                <br></br>
                <WorkoutFitmoodji />
                <NavBar />
            </Container>
    );
}
export default WorkoutDashboard;
