import React, { Component } from 'react';
import initialList from './data/shoppingList';
import ShoppingList from './components/ShoppingList';
import Form from './components/Form';

class App extends Component {
  state = {
    shoppingList: initialList
  }

  addItem = item => {

  }

  render() {
    const { shoppingList } = this.state
    const needToBuy = shoppingList.filter(e => e.inCart === false)
    const inCart = shoppingList.filter(e => e.inCart)
    return (
      <div className="App">
        <ShoppingList needToBuy={needToBuy} inCart={inCart} />
        <Form addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
