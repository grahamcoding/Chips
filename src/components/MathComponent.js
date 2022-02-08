import React, {Component}  from 'react';

  class Math extends Component {

    constructor(props) {
      super(props);
      this.state = {
        margin: '0.00'
      }
    }
  
    getNum(val) {   
      val = +val || 0  // Converts NaN from undefined windows to 0 to not break math/readibility
      val = val.toFixed(2) //Shortens and rounds to 2 decimal places.
      return val;
   }

    render() {

      let row1 = this.props.row1.split(" ")  //Split Result by word into new array to call values out of the dropdowns.
      const row2 = this.props.row2.split(" ")  
      const row3 = this.props.row3.split(" ")

      const retailCost = row1[2] * row1[3] * row1[4]
      const margin = this.state.margin
      const setupCost = (row1[2]-margin) * row1[3] * row1[4]
      const storeProfit = retailCost - setupCost

      return (
        <div>
          <p>Please Enter Store Margin Per Bag</p>
          <input type="text"
          value={ this.state.margin }
          onChange={(e) => this.setState({ margin: e.target.value }) }/>
          
          <p>Retail Cost = {this.getNum(retailCost)} </p>
          <p>Setup Cost = {this.getNum(setupCost)} </p>
          <p>Store Profit = {this.getNum(storeProfit)}</p>

          ID is {row1[0]}, 
                      Name is {row1[1]},
                      Price {row1[2]}, 
                      Bags per Case is {row1[3]},
                      Cases per window is {row1[4]},
                      Cost is {row1[2] * row1[3]} 
        </div>
      );
    }
  }

export default Math