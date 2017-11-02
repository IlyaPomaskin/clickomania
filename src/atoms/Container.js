// @flow
import * as React from 'react';
import cx from 'classnames';
import * as F from '../flow';

type Props = {
    children: React.Node,
    size?: F.Size
};

const Container = ({ children, size }: Props) => <div
    className={cx('c-text', 'o-container', {
        [`o-container--${size || ''}`]: size
    })}
>
    {children}
</div>;

Container.defaultProps = {
    size: ''
};

export default Container;
