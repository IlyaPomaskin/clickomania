// @flow
import * as React from 'react';
import * as F from '../flow';

const sizeMap = {
    super: 1,
    xlarge: 2,
    large: 3,
    medium: 4,
    small: 5,
    xsmall: 6
};

type Props = {
    children: React.Node,
    size?: F.Size
};

const Heading = ({ children, size = 'super' }: Props) => React.createElement(
    `h${sizeMap[size]}`,
    { className: 'c-heading' },
    children
);

Heading.defaultProps = {
    size: 'super'
};

export default Heading;
