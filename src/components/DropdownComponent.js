import React, {Component}  from 'react';
import { LOOKUP } from '../shared/lookup'

  class Dropdown extends Component {

    //Local State is handling the import of the Lookup table of items and the datavalue which sets dropdown options

    constructor(props) {
      super(props);
      this.state = {
        lookup: LOOKUP,
        dataValue: 'Potato',
      }
    }

    //Local onchange to handle the change of dropdown options.

    onChange = ({ target: { value } }) => {
      this.setState({ dataValue: value });
    }
  
    render() {
      //Renders List Options
      const { dataValue } = this.state;
      const options = this.state.lookup[dataValue];

      const row1cases = this.props.row1.split(" ")  //Split Result by word into new array to call values (cases per window) out of the dropdowns.
      const row2cases = this.props.row2.split(" ")  
      const row3cases = this.props.row3.split(" ")  

      //Initial Div selects overall dropdown options - need to add manually from LOOKUP
      return (
        <div>
          <select onChange={this.onChange}>
            <option value="Potato">Potato Chips</option>
            <option value="Tortilla">Tortilla Chips</option>
            <option value="Cheeze">Cheeze Snacks</option>
          </select>

        <hr />

          <select value={this.props.row1} onChange={e => this.props.handleChange1(e)}>
            {options.map(o => <option key={o.id} value={(o.id) + ' ' + (o.name) + ' ' + (o.price) + ' ' + (o.bag) + ' ' + (o.case) + ' ' + (o.image)}>{o.name}</option>)}
          </select>

        <p>Cases Required: {row1cases[4]}</p>

        <hr/>


        <select value={this.props.row2} onChange={e => this.props.handleChange2(e)}>
            {options.map(o => <option key={o.id} value={(o.id) + ' ' + (o.name) + ' ' + (o.price) + ' ' + (o.bag) + ' ' + (o.case)}>{o.name}</option>)}
          </select>

        <p>Cases Required: {row2cases[4]}</p>

        <hr/>

        <select value={this.props.row3} onChange={e => this.props.handleChange3(e)}>
            {options.map(o => <option key={o.id} value={(o.id) + ' ' + (o.name) + ' ' + (o.price) + ' ' + (o.bag) + ' ' + (o.case)}>{o.name}</option>)}
          </select>

        <p>Cases Required: {row3cases[4]}</p>

        <hr/>

        </div>
      );
    }
  }

export default Dropdown