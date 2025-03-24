import classNames from 'classnames';
import * as classes from './input.module.scss';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps) => {
    const { className, ...prop } = props;
    return <input className={classNames(classes.input, className)} {...prop} />;
};
