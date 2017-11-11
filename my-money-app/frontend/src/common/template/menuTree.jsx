import React from 'react'

export default props => (
    <li className="treeview">
        <a href>
            <i className={`fa fa-${props.icon}`}/> <span> {props.label}</span>
            <i className="fa fa-angle-left pull-right"></i>
        </a>
        <lu className="treeview-menu">
            {props.children}
        </lu>
    </li>
)