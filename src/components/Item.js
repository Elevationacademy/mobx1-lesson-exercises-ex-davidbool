import React, { Component } from 'react';
import { observer } from 'mobx-react'


@observer
class Item extends Component {
    checkItem = (e) => {
      this.props.store.checkItem(e.target.value)
      }
      editItem = (e) => {
        let item = this.props.item.name
        let location = prompt("Please enter new location")
        this.props.store.editItem(item, location)
      }
      deleteItem = (e) => {
        let item = this.props.item.name
        this.props.store.deleteItem(item)
      }
    render() {
      let item = this.props.item
          return (
              <div className = {item.completed ? "crossed": null}>
                <span onClick ={this.deleteItem} >X</span>
              <input type="checkbox" value={item.name} onClick ={this.checkItem}/> 
                  {item.name} {item.location}
                  <button onClick ={this.editItem}>edit</button>
              </div>)
    }
}

export default Item