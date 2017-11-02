// @flow
import * as React from 'react';

type InputProps = {
    value: any,
    onChange: Function
};

type ChildrenProps = {
    children: React.Node
};

const Input = ({ value, onChange }: InputProps) => <div className='o-field'>
    <input className='c-field' value={value} onChange={onChange} />
</div>;

Input.defaultProps = {
    value: '',
    onChange: () => undefined
};

const Group = ({ children }: ChildrenProps) => <div className='c-input-group'>
    {children}
</div>;

Input.Group = Group;

export default Input;
