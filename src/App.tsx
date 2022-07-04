import React from 'react';
import './App.css';

let name: string;
name = 'good'

function printAge(age: string | number) {
  console.log(age);
}

let printName: (name: string) => never;

type Person = {
  name: string;
  age?: number;
}

let ps: Person = {
  name: "img",
}
let people: Person[];

function App() {
  printAge(123);
  return (
    <div className="App">

    </div>
  );
}

export default App;
