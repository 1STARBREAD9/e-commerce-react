import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import Items from "./components/ItemsRender";
import Categories from "./components/Categories";
import ShowItem from "./components/ShowItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      curentItem: [],
      items: [
        {
          id: 1,
          title: 'Chat',
          img: 'chat.jpg',
          desc: 'tableau chat',
          category: 'animal',
          prix: '40 euros'
        },
        {
          id: 2,
          title: 'paysage',
          img: 'paysage.jpg',
          desc: 'beau paysage',
          category: 'nature',
          prix: '50 euros'
        },
        {
          id: 3,
          title: 'tigre',
          img: 'tigre.jpg',
          desc: 'tigre',
          category: "animal",
          prix: '60 euros'
        },
        {
          id: 4,
          title: 'lit',
          img: 'lit.jpg',
          desc: 'lit',
          category: 'chambre',
          prix: '70 euros'
        }
        
      ],

      showFullItem: false,
      fullItem : {}

    };
    this.state.curentItem = this.state.items;
    this.addtoorder = this.addtoorder.bind(this);
    this.deleteorder = this.deleteorder.bind(this);
    this.choseCategory = this.choseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);

  }



  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteorder}   orderCount={this.getOrderCount()} />
        <Categories chosenCategory={this.choseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.curentItem} onAdd={this.addtoorder} />

        {this.state.showFullItem && <ShowItem  onAdd={this.addtoorder} onShowItem={this.onShowItem}  item={this.state.fullItem} />}



        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }


  choseCategory(category) {

    if (category === "all") {
      this.setState({ curentItem: this.state.items });
      return;
    }
    this.setState({
      curentItem: this.state.items.filter(el => el.category === category)
    });
  }


  addtoorder = (item) => {
    let IsInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        IsInArray = true;
      }
    });

    if (!IsInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }


  deleteorder = (id) => {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }


  getOrderCount() {
    return this.state.orders.length;
  }

  
}





export default App;
