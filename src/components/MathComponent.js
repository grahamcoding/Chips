import React, {Component}  from 'react';
import { LOOKUP } from '../shared/lookup'

  class Math extends Component {

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
            {options.map(o => <option key={o.id} value={(o.id) + ' ' + (o.name) + ' ' + (o.price) + ' ' + (o.bag) + ' ' + (o.case)}>{o.name}</option>)}
          </select>
        <hr/>

        <select value={this.props.row2} onChange={e => this.props.handleChange2(e)}>
            {options.map(o => <option key={o.id} value={(o.id) + ' ' + (o.name) + ' ' + (o.price) + ' ' + (o.bag) + ' ' + (o.case)}>{o.name}</option>)}
          </select>
        <hr/>

        <select value={this.props.row3} onChange={e => this.props.handleChange3(e)}>
            {options.map(o => <option key={o.id} value={(o.id) + ' ' + (o.name) + ' ' + (o.price) + ' ' + (o.bag) + ' ' + (o.case)}>{o.name}</option>)}
          </select>
        <hr/>

        <p>The props value of Row 1 is {this.props.row1}</p>

        </div>
      );
    }
  }

export default Math