import { render,screen } from '@testing-library/react';
import React from 'react';
import Button from './../Button';
import API from './../../API';
import userEvent from '@testing-library/user-event'

const fetced_data = API.getData();
//const data = fetced_data[0];


test('Button throws Error if we do not supply the props',()=>{
    const button = render(<Button/>)
    expect(button).toThrowError
})

test('Button runs fine after supplying props',()=>{
    const button = render(<Button
        state = {true}
        name={"Activate"}
        data = {fetced_data}
        idx = {0}
        action = {()=>{}}> </Button>)
    expect(button).toBeInTheDocument
    expect(button).toBeEnabled
})

// test('Button getNewName working',()=>{
//     const button = render(<Button/>)
//     userEvent.click(screen.getByText('Check'))
// })

// test('Button getNewName working',()=>{
//     const button = render(<Button/>)
//     userEvent.click(screen.getByText('Check'))
// })