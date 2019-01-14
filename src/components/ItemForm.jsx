import React, { Component } from 'react';

class ItemForm extends Component {
  state = { value: '' }

  handleChange = event => {
    let { value } = this.state
    value = event.target.value
    this.setState({ value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { value } = this.state
    this.props.addItem(value)
    this.setState({ value: '' })
  }

  render() {
    const { value } = this.state
    const { itemValidation } = this.props
    return (
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={value}
            placeholder="Add an item to your shopping list"
            onChange={this.handleChange}
            />
          <input
            disabled={itemValidation.includes(value.toLowerCase())}
            className={itemValidation.includes(value.toLowerCase()) && "disabled"}
            value={itemValidation.includes(value.toLowerCase()) ? "Item already on the List!" : "Add Item"}
            type="submit"
            />
        </form>
    )
  }
}

export default ItemForm
