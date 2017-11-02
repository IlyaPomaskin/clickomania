// @flow
import * as React from 'react';
import cx from 'classnames';

type ChildrenProps = {
    children: React.Node
};

type ItemProps = {
    children: React.Node,
    divider?: boolean,
    onClick?: Function,
    className?: string
};

const Item = ({ children, divider, className, onClick }: ItemProps) => <div
    className={cx(className, 'c-card__item', {
        'c-card__item--divider': divider
    })}
    onClick={onClick}
>
    {children}
</div>;

Item.defaultProps = {
    divider: false,
    className: '',
    onClick: () => undefined
};

const Card = ({ children }: ChildrenProps) => <div className='c-card'>
    {children}
</div>;

const Header = ({ children }: ChildrenProps) => <header className='c-card__header'>
    {children}
</header>;

const Body = ({ children }: ChildrenProps) => <div className='c-card__body'>
    {children}
</div>;

const Footer = ({ children }: ChildrenProps) => <footer className='c-card__footer c-card__footer--block'>
    {children}
</footer>;

Card.Item = Item;
Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
