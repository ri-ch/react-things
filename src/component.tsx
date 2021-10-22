import React from 'react';

export interface MyComponentProps {
    name: String
    age: number
}

const MyFunctionalComponent: React.FC<MyComponentProps> = ({name, age}: MyComponentProps) => <div><h2>Age: {age}, Name: {name}</h2></div>
export default MyFunctionalComponent