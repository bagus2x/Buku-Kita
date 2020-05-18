import React from 'react';
import './List.css';
import { useRef } from 'react';
import { useState } from 'react';
export const Item = (props) => {
    const { variant, className, children, effect } = props;
    let types = variant ? variant.split(' ') : [];
    const itemRef = useRef(null);
    const [toggle, setToggle] = useState(true);

    return React.createElement(types[0] ? types[0] : 'div', {
        ...props,
        effect: undefined,
        ref: itemRef,
        onClick: (e) => {
            setToggle(!toggle);
            if (props.onClick) props.onClick(e);
        },
        className: `item${types[1] ? ' ' + types[1] : ' circle'}${toggle ? ' active' : ''}${className ? ' ' + className : ''}${effect ? ' effect' : ''}`
    }, children);
};

const List = (props) => {
    const { className, children, type } = props;

    return React.createElement(type ? type : 'div', {
        ...props,
        className: `list-group${className ? ' ' + className : ''}`
    }, children);
};

export default List;
