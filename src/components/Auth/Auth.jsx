import React from 'react'
import Button from '../shared/Button'


export default function Auth({name, onLogOut}) {
    
    return (
        <div>
            <p>Hello! {name}</p>
            <Button caption={'LogOut'} onClick={onLogOut}/>
        </div>
    )

}