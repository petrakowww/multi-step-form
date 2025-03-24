import classNames from 'classnames';
import * as classes from './input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode;
}

export const Input = (props: InputProps) => {
    const { children, className, ...prop } = props;
    return (
        <input className={classNames(classes.input, className)} {...prop}>
            {children}
        </input>
    );
};
