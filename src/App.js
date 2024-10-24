import React from "react";
import "./App.css";
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import Items from "./components/Items.js";
import order from "./components/Order";

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'chair',
          img: 'chair_white.jpeg',
          desc: 'ables are settlement and world objects in Fallout 4 and its add-on Vault-Tec Workshop. The chair are located under Furniture → Chairs in the workshop.',
          category: 'chair',
          price: '49.99',
        },
        {
          id: 2,
          title: 'table',
          img: 'table_dark.jpeg',
          desc: 'ables are settlement and world objects in Fallout 4 and its add-on Vault-Tec Workshop. The tables are located under Furniture → Tables in the workshop.',
          category: 'table',
          price: '149.99',
        },
        {
          id: 3,
          title: 'sofa',
          img: 'sofa.jpeg',
          desc: 'ables are settlement and world objects in Fallout 4 and its add-on Vault-Tec Workshop. The sofa are located under Furniture → sofa in the workshop.',
          category: 'sofa',
          price: '549.99',
        },
        {
          id: 4,
          title: 'lamp',
          img: 'lamp.png',
          desc: 'ables are settlement and world objects in Fallout 4 and its add-on Vault-Tec Workshop. The lamp are located under Furniture → lamp in the workshop.',
          category: 'lamp',
          price: '199.99',
        },
        {
          id: 5,
          title: 'chair',
          img: 'chair_grey.jpeg',
          desc: 'ables are settlement and world objects in Fallout 4 and its add-on Vault-Tec Workshop. The chair are located under Furniture → Chairs in the workshop.',
          category: 'chair',
          price: '69.99',
        },
        {
          id: 6,
          title: 'bed',
          img: 'bed.jpg',
          desc: 'ables are settlement and world objects in Fallout 4 and its add-on Vault-Tec Workshop. The bed are located under Furniture → Bed in the workshop.',
          category: 'bed',
          price: '769.99',
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
        
      </div>
    );
  }

  deleteOrder = (id) => {
      this.setState({orders: this.state.orders.filter((el) => el.id !== id)});
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if(el.id === item.id) {
          isInArray = true;
      }
    });
    if (!isInArray) {
      this.setState({orders: [...this.state.orders, item]});
    }

  }

}

export default App;
