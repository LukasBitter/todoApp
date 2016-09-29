import { createStore } from 'redux'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { todoApp } from './simpleTodo.js';

const store = createStore(todoApp);

let nextTodoId = 0;
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Simple todo list </h2>
          <h4>by Lukas Bitter</h4>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		<div>
			<button onClick={() => {
				store.dispatch({
					type: 'ADD_TODO',
					text: 'Test',
					id: nextTodoId++
				});
			}}>
			Add Todo
			</button>
			<ul>
			{this.props.todos.map(todo =>
				<li key={todo.id}>
					{todo.text}
				</li>
			)}
			</ul>
		</div>
		<div id='root'></div>
      </div>
    );
  }
}


export default App;
