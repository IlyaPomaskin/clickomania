// @flow
import * as React from 'react';
import cx from 'classnames';

type Props = {
    children: React.Node,
    isGhost: boolean
};

const Modal = ({ children, isGhost }: Props) => <div className={cx('o-modal u-highest', {
    'o-modal--ghost': isGhost
})}
>
    {children}
</div>;

Modal.defaultProps = {
    isGhost: false
};

export default Modal;
