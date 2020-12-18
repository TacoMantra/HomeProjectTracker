import React, { useState, useCallback, useEffect } from 'react';
import ScreenLayout from '../layout/ScreenLayout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { 
    Typography,
    TextField,
    Button,
    Icon,
    CircularProgress,
    Grid,
    makeStyles
} from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';
import { useForm } from 'react-hook-form';
import { fakeUserId } from '../constants';
import { useHistory } from 'react-router-dom';

type Inputs = {
    Name: string,
    Description: string
}

const useStyles = makeStyles((theme) => ({
    formInput: {
        margin: theme.spacing(1, 0)
    }
}))

const NewProjectScreen = () => {
    const { handleSubmit, register, errors } = useForm<Inputs>();
    const history = useHistory();
    const classes = useStyles();

    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = useCallback(async (data: Inputs) => {
        setIsSubmitting(true);
        const formData = {
            User: {
                Id: fakeUserId
            },
            ...data
        }
        const response = await axios({
            method: 'post',
            url: 'Project/NewProject',
            data: formData,
        })
        history.push(`projects/${response.data}`);
    }, [setIsSubmitting, history]);

    return (
        <ScreenLayout>
            <Typography
                variant={'h4'}
            >
                {'New Project'}
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    className={classes.formInput}
                    variant={'outlined'}
                    disabled={isSubmitting}
                    fullWidth
                    error={Boolean(errors.Name?.message)}
                    helperText={errors.Name?.message}
                    id={'Name'}
                    name={'Name'}
                    label={'Project Name'}
                    inputRef={register({ required: true })}
                />
                <TextField
                    className={classes.formInput}
                    disabled={isSubmitting}
                    fullWidth
                    error={Boolean(errors.Description?.message)}
                    helperText={errors.Description?.message}
                    id={'Description'}
                    name={'Description'}
                    label={'Project Description'}
                    variant={'outlined'}
                    inputRef={register({ required: true })}
                    multiline
                    rowsMax={10}
                />
                <Button
                    type={'submit'}
                    variant={'contained'}
                    color={'primary'}
                    endIcon={<TelegramIcon />}
                    disabled={isSubmitting}
                    fullWidth
                >
                    {
                    isSubmitting ?
                    <CircularProgress
                        size={28}
                        color={'inherit'}
                    />
                    : 'Launch Project'
                    }
                </Button>
            </form>
        </ScreenLayout>
    )
}

export const NewProjectScreenPath = '/newproject';

export default NewProjectScreen;
