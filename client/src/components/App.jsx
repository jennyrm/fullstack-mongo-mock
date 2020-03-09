import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [{
        item: 'PARTS ONLY Azeus Gaming System',
        min_cost: 3,
        curr_bid: 7829,
        ends_in: 1,
        image: 'http://lorempixel.com/400/400/technics/1'
      }],
      index: 0
    }
    this.changeIndex = this.changeIndex.bind(this);
  }

  getAll() {
    axios.get('/name/products')
    .then((response) => {
        this.setState({
          items: response.data
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  updateItem() {
    
  }

  changeIndex(i) {
    this.setState({
      index: i
    })
  }

  componentDidMount() {
    this.getAll();
  }

  render() {
    return(
      <div>
        <div>
          <h1>E-BID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            <ProductViewer items={this.state.items} index={this.state.index}/>
          </div>
          <div style={{float:'right'}} className="col-md-5 product-list-container">
            <ProductList items={this.state.items} changeIndexFxn={this.changeIndex}/>
          </div>
        </div>
      </div>
    )
  }
}