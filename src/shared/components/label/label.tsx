import classNames from 'classnames';
import * as classes from './label.module.scss';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode;
}

export const Label = (props: LabelProps) => {
    const { children, className, ...prop } = props;
    return (
        <label {...prop} className={classNames(classes.label, className)}>
            {children}
        </label>
    );
};
