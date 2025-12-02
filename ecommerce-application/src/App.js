import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import assets from './assets';

function MyButton_01() {
  return (
    <button className='App-button' >
      I'm a button
    </button>
  );
}

const user = {
  firstname: 'John',
  lastname: 'Doe',
  age: 30,
  email: 'johndoe@example.com',
  profileImage: assets.johndoe
};
function MyUserInfo() {
  return (
    <div className='UserInfo'>
      <img className='avatar' src={user.profileImage} alt={`${user.firstname} ${user.lastname}`} />
      <div className='UserInfo-Details'>
        <p>{user.firstname} {user.lastname}</p>
        <p>{user.age}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
}

const fruits = [
  { id: 1, title: 'Apple', price: 50, isFruit: true },
  { id: 2, title: 'Banana', price: 30, isFruit: true },
  { id: 3, title: 'Cabbage', price: 20, isFruit: false },
];
function FruitList_01() {
  return (
    <div className='FruitList'>
      <h2>Fruit List 01</h2>
      <ul>
        {fruits.filter(item => item.isFruit).map(fruit => (
          <li key={fruit.id}>
            {fruit.title} - ₹{fruit.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
function FruitList_02() {
  const fruitItems = fruits.map(fruit => (
    <li key={fruit.id}
      style={{ color: fruit.isFruit ? 'darkgreen' : 'darkred' }}
    >
      {fruit.title} - ₹{fruit.price}
    </li>
  ));
  return (
    <div className='FruitList'>
      <h2>Fruit List 02</h2>
      <ul>
        {fruitItems}
      </ul>
    </div>
  );
}

let content;
let isLoggedIn = true;
if (isLoggedIn) {
  content = < FruitList_02 />;
} else {
  content = < FruitList_01 />;
}

function MyButton_02(props) {
  function handleClick() {
    alert('Button clicked!');
  }
  return (
    <button className='App-button' onClick={handleClick}>
      {props.label || 'Click Me'}
    </button>
  );
}

function MyButton_03() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button className='App-button' onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <MyButton_01 />
        <img src={logo} className="App-logo" alt="logo" />
        <button className='App-button' onClick={increment}>Increment</button>
        <p>
          Click the "Increment" button to increment the count.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Count: {count}</p>
        <MyUserInfo />
        <MyButton_02 label="Custom Button" />
        <MyButton_03 />
      </header>
      <body className='App-body'>
        {content}
        <MyButton_02 label="Custom Button" />
      </body>
    </div>
  );
}

export default App;
