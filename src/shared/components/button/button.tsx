import * as classes from './button.module.scss';
import classNames from 'classnames';

type ButtonVariant = 'step' | 'primary' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
    const { variant = 'primary', children, ...prop } = props;

    const buttonVariant = (variant: ButtonVariant) => {
        return classNames(classes.button, classes[`button--${variant}`]);
    };

    return (
        <button {...prop} className={buttonVariant(variant)}>
            {children}
        </button>
    );
};
