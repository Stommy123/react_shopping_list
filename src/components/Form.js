import React, { Component } from 'react';

class Form extends Component {
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
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={value}
                    placeholder="Add an item to your shopping list"
                    onChange={this.handleChange}
                />
                <input type="submit" value="Add item" />
            </form>
        )
    }
}

export default Form