import React, {Component}  from 'react';

  class Math extends Component {

    constructor(props) {
      super(props);
      this.state = {
        margin: '0.00',
        dipmargin: '0.00'
      }
    }
  
    getNum(val) {   
      val = +val || 0  // Converts NaN from undefined windows to 0 to not break page when undefined.
      val = val.toFixed(2) //Shortens and rounds to 2 decimal places.
      return val;
   }

    render() {

      const row1 = this.props.row1.split(" ")  //Split Result by word into new array to call values out of the dropdowns.
      const row2 = this.props.row2.split(" ")  
      const row3 = this.props.row3.split(" ")
      const row4 = this.props.row4.split(" ")
      const row5 = this.props.row5.split(" ")
      const dip = this.props.dip.split(" ")
      const { fiveshelf } = this.props

      const margin = this.state.margin //Hold input values for margins on products
      const dipmargin = this.state.dipmargin

      //Math for 3 Shelf
      const retailCost = (row1[2] * row1[3] * row1[4]) + (row2[2] * row2[3] * row2[4]) + (row3[2] * row3[3] * row3[4]) + (dip[2] * dip[3] * dip[4])
      const setupCost = ((row1[2]-margin) * row1[3] * row1[4]) + ((row2[2]-margin) * row2[3] * row2[4]) + ((row3[2]-margin) * row3[3] * row3[4]) + ((dip[2]-dipmargin) * dip[3] * dip[4])
      const storeProfit = retailCost - setupCost

      //Math for 5 Shelf
      const retailCostFiveShelf = (row1[2] * row1[3] * row1[4]) + (row2[2] * row2[3] * row2[4]) + (row3[2] * row3[3] * row3[4]) + (dip[2] * dip[3] * dip[4]) + (row4[2] * row4[3] * row4[4]) + (row5[2] * row5[3] * row5[4])
      const setupCostFiveShelf = ((row1[2]-margin) * row1[3] * row1[4]) + ((row2[2]-margin) * row2[3] * row2[4]) + ((row3[2]-margin) * row3[3] * row3[4]) + ((dip[2]-dipmargin) * dip[3] * dip[4]) + ((row4[2]-margin) * row4[3] * row4[4]) + ((row5[2]-margin) * row5[3] * row5[4])
      const storeProfitFiveShelf = retailCostFiveShelf - setupCostFiveShelf


      return (
        <div>

{ fiveshelf 
  ?                 
null
  :
  <div>
  <p className='p-1'><h5>Retail Cost = ${this.getNum(retailCost)} </h5></p>
<hr/>
<p className='p-1'><h5>Setup Cost = ${this.getNum(setupCost)}</h5> </p>
<hr/>
<p className='p-1'><h2>Store Profit = ${this.getNum(storeProfit)}</h2></p>
<p className='p-1'><span className='me-2 h6'>Store Margin Per Bag = $</span>
<input type="text"
size="1"
className='h6 text-center'
value={ this.state.margin }
onChange={(e) => this.setState({ margin: e.target.value }) }/>
</p>
<p className='p-1'><span className='me-2 h6'>Store Dip Margin Per Jar = $</span>
<input type="text"
size="1"
className='h6 text-center'
value={ this.state.dipmargin }
onChange={(e) => this.setState({ dipmargin: e.target.value }) }/>
</p>
</div>
}

{ fiveshelf 
  ?                 
<div>
  <p className='p-1'><h5>Retail Cost = ${this.getNum(retailCostFiveShelf)} </h5></p>
<hr/>
<p className='p-1'><h5>Setup Cost = ${this.getNum(setupCostFiveShelf)}</h5> </p>
<hr/>
<p className='p-1'><h2>Store Profit = ${this.getNum(storeProfitFiveShelf)}</h2></p>
<p className='p-1'><span className='me-2 h6'>Store Margin Per Bag = $</span>
<input type="text"
size="1"
className='h6 text-center'
value={ this.state.margin }
onChange={(e) => this.setState({ margin: e.target.value }) }/>
</p>
<p className='p-1'><span className='me-2 h6'>Store Dip Margin Per Jar = $</span>
<input type="text"
size="1"
className='h6 text-center'
value={ this.state.dipmargin }
onChange={(e) => this.setState({ dipmargin: e.target.value }) }/>
</p>
</div>
  :
null
}

        </div>
        
      )
    }
  }

export default Math