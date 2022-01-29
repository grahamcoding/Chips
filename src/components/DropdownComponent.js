import React, {Component}  from 'react';

const lookup = {
    "Potato": [
      { id: '1', text: 'Plain' },
      { id: '2', text: 'Barbeque' },
      { id: '3', text: 'Onion and Sour Cream' }
    ],
    "Tortilla": [
      { id: 'a', text: 'Restaurant' },
      { id: 'b', text: 'Bowls' },
      { id: 'c', text: 'Bite Sized' }
    ]
  }
  
  class Dropdown extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dataValue: 'Potato',
        row1: 'Blank',
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
      return (
        <div>
          <select onChange={this.onChange}>
            <option value="Potato">Potato Chips</option>
            <option value="Tortilla">Tortilla Chips</option>
          </select>

          <hr />

          <select value={this.state.row1} onChange={this.handleChange1}>
            {options.map(o => <option key={o.id} value={o.text}>{o.text}</option>)}
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

        <p>The value of Row 1 is {this.state.row1}</p>
        <p>The value of Row 2 is {this.state.row2}</p>
        <p>The value of Row 3 is {this.state.row3}</p>

        </div>
      );
    }
  }

export default Dropdown