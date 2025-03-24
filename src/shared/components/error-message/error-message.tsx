import * as classes from './error-message.module.scss';
import { FieldError } from 'react-hook-form';

interface ErrorMessageProps {
    message?: string;
    error?: FieldError;
}

export const ErrorMessage = ({ message, error }: ErrorMessageProps) => {
    if (!error || !message) {
        return null;
    }

    return <p className={classes.error}>{message}</p>;
};
