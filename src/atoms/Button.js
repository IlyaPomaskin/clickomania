// @flow
import * as React from 'react';
import cx from 'classnames';
import * as F from '../flow';

type Props = {
    children: React.Node,
    colorType?: F.ColorType,
    size?: F.Size,
    block?: boolean,
    ghost?: boolean,
    disabled?: boolean,
    onClick?: Function
};

const Button = ({ children, colorType, size, block, ghost, disabled, onClick }: Props) => <button
    className={cx('c-button', {
        [`c-button--${colorType || ''}`]: !ghost && colorType,
        [`c-button--ghost-${colorType || ''}`]: ghost && colorType,
        [`u-${size || ''}`]: size,
        'c-button--block': block,
        'c-button--ghost': ghost
    })}
    disabled={disabled}
    onClick={onClick}
>
    {children}
</button>;

Button.defaultProps = {
    colorType: '',
    size: 'medium',
    block: false,
    ghost: false,
    disabled: false,
    onClick: () => undefined
};

export default Button;
