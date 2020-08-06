import React, {useState} from 'react';
import './App.css';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/styles";
import AirportsDropDown from "./AirportsDropDown";

const useStyles = makeStyles({
    container: {
        background: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)',
        backgroundColor: '#d53369',
        backgroundImage: 'linear-gradient(to right, #cbad6d, #d53369)'
    },
    button: {
        background: 'linear-gradient(to top left, #993366 0%, #ff6666 100%)',
        border: 0,
        borderRadius: 6,
        height: 40,
        padding: '0 30px',
    }
})

function AirportsChooser() {
    // Airport selection mode is initially false
    const [selectionMode, setSelectionMode] = useState(false);

    const styles = useStyles()
    return (
        <Grid
            container
            spacing={0}
            align={"center"}
            justify={"center"}
            direction={"column"}
            className={styles.container}
        >
            {/*Airport chooser button*/}
            {!selectionMode &&
            <Button variant="contained" color="primary"
                    className={styles.button}
                    onClick={() => {
                        setSelectionMode(true)
                    }}>
                Airport Chooser
            </Button>}

            {/*Render airport selection dropdown*/}
            {selectionMode && <AirportsDropDown/>}
        </Grid>
    );
}

export default AirportsChooser;
