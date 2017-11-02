// @flow
import * as React from 'react';
import cx from 'classnames';

type Props = {
    color: string,
    onClick: Function
};

const Cell = ({ color, onClick }: Props) => <div
    className={cx('cell', {
        'cell--empty': !color,
        [`cell--color-${color || ''}`]: color
    })}
    onClick={onClick}
/>;

export default Cell;
