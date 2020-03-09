import React from 'react';

export default class ProductViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bid: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handlecClick = this.handlecClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state.bid)
  }

  handlecClick() {

  }

  render(){
    return(
      <div>
        <img src={this.props.items[this.props.index].image}></img>
        <div>{this.props.items[this.props.index].item}</div><br></br>
        <div>Current Bid: ${this.props.items[this.props.index].curr_bid}</div><br></br>
        <div>Original Posting Price: ${this.props.items[this.props.index].min_cost}</div><br></br>
        <div>Bidding Ends in: {this.props.items[this.props.index].ends_in} day(s)</div><br></br>
        New Bid: <input onChange={this.handleChange} name='bid' value={this.state.bid} ></input>
        <button onClick={this.handlecClick}>Submit</button>
      </div>
    )
  }
}