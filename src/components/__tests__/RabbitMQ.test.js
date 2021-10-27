import { render,screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event'
import RabbitMQ from './../RabbitMQ';
import API from './../../API';

const data = API.getData();
const len = data.length;

test('Component rendered successfully',()=>{
    const RabbitMq = render(<RabbitMQ/>)
    expect(RabbitMq).toBeInTheDocument
})
test('Component contains Table',()=>{
    render(<RabbitMQ/>)
    expect(screen.getByRole('table',{name : /table/i})).toBeRequired
    
})

test('Component contains all required headers Listner,Queue,Connection Type,Connection Status',()=>{
    render(<RabbitMQ/>)
    //screen.getByRole("*");
    expect(screen.getByRole('columnheader',{name : /Listner/i})).toBeRequired
    expect(screen.getByRole('columnheader',{name : /Queue/i})).toBeRequired
    expect(screen.getByRole('columnheader',{name : /Connection Type/i})).toBeRequired
    expect(screen.getByRole('columnheader',{name : /Connection Status/i})).toBeRequired
})


test('Each Row contains all header fields',()=>{
    render(<RabbitMQ/>)
    //screen.getByRole("*");
    expect(screen.getByRole('row',{name : /Listner Queue Application Connection Type Connection Status/i})).toBeRequired
})

test('Checking the First Row, Middle row and Last row rendered correctly or not',()=>{
    render(<RabbitMQ/>)
    //screen.getByRole("*");
    const mid = parseInt(len/2);
    expect(screen.getByRole('rowheader',{name : data[0].listner})).toBeRequired
    expect(screen.getByRole('rowheader',{name : data[len-1].listner})).toBeRequired
    expect(screen.getByRole('rowheader',{name : data[mid].listner})).toBeRequired
})


test('Buttons are rendard successfully',()=>{
    render(<RabbitMQ/>)
    //screen.getByRole("*");
    expect(screen.getAllByRole('button',{name : "Activate"} || {name : "Deactivate"})).toBeEnabled
})


test('User can interact with Button',()=>{
    const button = render(<RabbitMQ/>)
    //screen.getByRole("*");
    userEvent.click(screen.getByRole('button',{name : "Activate"} || {name : "Deactivate"}))
    expect(screen.getAllByRole('button',{name : "Activate"} || {name : "Deactivate"})).toBeEnabled
})


