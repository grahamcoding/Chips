import React, {Component}  from 'react';

const lookup = {
    "Potato": [
      { id: '1', text: 'Plain', price: '4.09' },
      { id: '2', text: 'Barbeque', price: '4.09' },
      { id: '3', text: 'Onion', price: '4.09' }
    ],
    "Tortilla": [
      { id: 'a', text: 'Restaurant', price: '4.79' },
      { id: 'b', text: 'Bowls', price: '4.79' },
      { id: 'c', text: 'Bites', price: '4.79' }
    ],
    "Cheeze": [
      { id: 'a', text: 'Crunchy', price: '3.79' },
      { id: 'b', text: 'Hot', price: '3.79' },
      { id: 'c', text: 'Puff', price: '3.79' }
    ]
  }
  
  class Dropdown extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dataValue: 'Potato',
        row1: 'Blank',
        price1: '',
        row2: 'Blank',
        row3: 'Blank'
      }
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleChange3 = this.handleChange3.bind(this);
    }


    onChange = ({ target: { value } }) => {
      this.setState({ dataValue: value });
    }

    handleChange1(e) {
      this.setState({ row1: e.target.value });
    }

      handleChange2(e) {
        this.setState({ row2: e.target.value });
      }

      handleChange3(e) {
        this.setState({ row3: e.target.value });
      }

      

  
    render() {
      const { dataValue } = this.state;
      const options = lookup[dataValue];
      const rowprice = this.state.row1.split(" ")
      let rowpricier = rowprice[1]
      let casePrice = (rowpricier * 6)

      return (
        <div>
          <select onChange={this.onChange}>
            <option value="Potato">Potato Chips</option>
            <option value="Tortilla">Tortilla Chips</option>
            <option value="Cheeze">Cheeze Snacks</option>
          </select>

          <hr />

          <select value={this.state.row1} onChange={this.handleChange1}>
            {options.map(o => <option key={o.id} value={(o.text) + ' ' + (o.price)}>{o.text}</option>)}
          </select>

        <hr/>

          <select value={this.state.row2} onChange={this.handleChange2}>
            {options.map(o => <option key={o.id} value={o.text}>{o.text}</option>)}
          </select>

        <hr/>

          <select value={this.state.row3} onChange={this.handleChange3}>
            {options.map(o => <option key={o.id} value={o.text}>{o.text}</option>)}
          </select>

        <hr/>

        <p>The value of Row 1 is {this.state.row1}, what is {rowprice}? and {rowpricier}. A case of {rowprice[0]} is {casePrice}</p>
        <p>The value of Row 2 is {this.state.row2}</p>
        <p>The value of Row 3 is {this.state.row3}</p>

        </div>
      );
    }
  }

export default Dropdown