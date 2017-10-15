import React from 'react'
import ReactDOM from 'react-dom'
import  Family from './family'  
import  Member from './member'  

ReactDOM.render(
    <Family lastName='Pinto'> 
        <Member name='Cristiano' />
        <Member name='Vanessa' />
    </Family>
, document.getElementById('app'))