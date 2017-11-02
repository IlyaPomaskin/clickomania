// @flow
import * as React from 'react';
import cx from 'classnames';

type Props = {
    children: React.Node,
    type?: 'vertical' | 'horizontal'
};

type ChildrenProps = {
    children: React.Node
};

const Centered = ({ children, type }: Props) => <div className='u-center-block'>
    <div className={cx('u-center-block__content', {
        'u-center-block__content--vertical': type === 'vertical',
        'u-center-block__content--horizontal': type === 'horizontal'
    })}
    >
        {children}
    </div>
</div>;

Centered.defaultProps = {
    type: ''
};

const Text = ({ children }: ChildrenProps) => <div className='u-centered'>
    {children}
</div>;

Centered.Text = Text;

export default Centered;
