import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";
import {makeStyles} from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
    comboBox: {
        display: "flex",
        width: 400,
        color: "white"
    }
})

// Drop down showing list of airports to be chosen
function AirportsDropDown() {
    const styles = useStyles()

    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;


    // Fetch airport list using remote url
    const fetchAirports = async (active) => {
        const response = await fetch('http://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json');
        const airports = await response.json();

        if (active) {
            setOptions(airports)
        }
    }

    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }
        fetchAirports(active)

        return () => {
            active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <Autocomplete
            id="airport-selection-dropdown"
            autoHighlight
            className={styles.comboBox}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            getOptionSelected={(option, value) => option.name === value.name}
            getOptionLabel={(option) => option.name + "," + option.country}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Chose an airport"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20}/> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
            //Render airport name,country and code in suggestions
            renderOption={(option) => (
                <React.Fragment>
                    {option.name} , {option.country} [{option.code}]
                </React.Fragment>
            )}
        />
    )
}


export default AirportsDropDown;