import React, { Component } from 'react';
import initialList from './data/shoppingList';
import ShoppingList from './components/ShoppingList.jsx';
import ItemForm from './components/ItemForm.jsx';
import Header from './components/Header.jsx';

class App extends Component {
  state = { shoppingList: initialList }

  addItem = item => {
    const { shoppingList } = this.state;
    shoppingList.push({
      id: shoppingList.length,
      item: item,
      inCart: false,
    })
    this.setState({ shoppingList })
  }

  handleChange = id => {
    const { shoppingList } = this.state;
    shoppingList[id].inCart = !shoppingList[id].inCart
    this.setState({ shoppingList })
  }

  render() {
    const { shoppingList } = this.state
    const needToBuy = shoppingList.filter(e => !e.inCart)
    const inCart = shoppingList.filter(e => e.inCart)
    const itemValidation = shoppingList.map(e => e.item.toLowerCase())
    return [
      <Header />,
      <ShoppingList
        handleChange={this.handleChange}
        needToBuy={needToBuy}
        inCart={inCart}
      />,
    <ItemForm itemValidation={itemValidation} addItem={this.addItem} />
    ]
  }
}

export default App;
