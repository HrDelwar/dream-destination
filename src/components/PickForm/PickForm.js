import { makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: '16px 0',
        },
        '& input[type="submit"]': {
            background: '#444644',
            color: '#fff',
            cursor: 'pointer'
        },
    },

}));


const PickForm = ({ setDestinationInfo, setIsPicked }) => {
    const classes = useStyles();

    const { handleSubmit, control, errors, } = useForm();
    const onSubmit = data => {
        setIsPicked(true);
        setDestinationInfo(data);
    }
    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} className={classes.root}>
            <Controller as={TextField} required fullWidth type="text" name="pickFrom" control={control} id="outlined-basic" label="Pick From" defaultValue="Sylhet" variant="outlined"
                error={errors.pickFrom && errors.pickFrom.message}
                helperText={errors.pickFrom && errors.pickFrom.message}
                rules={{
                    required: {
                        value: true,
                        message: 'You must specify a your location'
                    },
                }}
            />
            <Controller as={TextField} required fullWidth type="text" name="pickTo" control={control} id="outlined-basic" label="Pick To" defaultValue="Dhaka" variant="outlined"
                error={errors.pickTo && errors.pickTo.message}
                helperText={errors.pickTo && errors.pickTo.message}
                rules={{
                    required: {
                        value: true,
                        message: 'You must specify destination location'
                    },
                }}
            />

            <Controller as={TextField} required fullWidth type="date" name="date" control={control} id="outlined-basic" variant="outlined"
               error={errors.date && errors.date.message}
               helperText={errors.date && errors.date.message}
               rules={{
                    required: {
                        value: true,
                        message: 'You must specify Date'
                    },
                }}
            />
            <Controller as={TextField} required fullWidth type="time" name="time" control={control} id="outlined-basic" variant="outlined"
               error={errors.time && errors.time.message}
               helperText={errors.time && errors.time.message}
               rules={{
                    required: {
                        value: true,
                        message: 'You must specify time'
                    },
                }}
            />
            <TextField fullWidth type="submit" value="Search" variant="outlined" />
        </form>
    );
}
export default PickForm;