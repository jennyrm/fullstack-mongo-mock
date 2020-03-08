import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    }

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
            <ProductViewer />
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList items={this.state.items}/>
          </div>
        </div>
      </div>
    )
  }
}