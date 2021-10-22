import * as React from 'react'
import * as ReactDOM from 'react-dom'
import MyFunctionalComponent from './component'

const Greet = () =>
    <>
        <h1>Hello, world!</h1>
        <MyFunctionalComponent name="Geoff" age={99} />
    </>
const element = document.getElementById("container")
ReactDOM.render(<Greet/>, element)