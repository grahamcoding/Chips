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
  
  class Math extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dataValue: 'Potato',
        row1: 'Blank',
        price1: '',
      }
      this.handleChange1 = this.handleChange1.bind(this);
    }


    onChange = ({ target: { value } }) => {
      this.setState({ dataValue: value });
    }

    handleChange1(e) {
      this.setState({ row1: e.target.value });
    }

  
    render() {
      //Renders List Options
      const { dataValue } = this.state;
      const options = lookup[dataValue];

      return (
        <div>
          <select onChange={this.onChange}>
            <option value="Potato">Potato Chips</option>
            <option value="Tortilla">Tortilla Chips</option>
            <option value="Cheeze">Cheeze Snacks</option>
          </select>

          <hr />

          <select value={this.props.row1} onChange={e => this.props.handleChange1(e)}>
            {options.map(o => <option key={o.id} value={(o.text) + ' ' + (o.price)}>{o.text}</option>)}
          </select>

        <hr/>

        <p>The value of Row 1 is {this.state.row1}</p>
        <p>The props value of Row 1 is {this.props.row1}</p>

        </div>
      );
    }
  }

export default Math