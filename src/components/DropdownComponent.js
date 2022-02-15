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
          <p className='lead'>Select Type of Product</p>
          <select onChange={this.onChange} className='lead p-1 mb-3'>
            <option value="Potato">Potato Chips</option>
            <option value="Tortilla">Tortilla Chips</option>
            <option value="Cheeze">Cheeze Snacks</option>
          </select>
          <p className='lead'>Select Dip Option</p>
          <select className='lead p-1 mb-3'>
          </select>


        <hr className='mb-4' />

          <select value={this.props.row1} onChange={e => this.props.handleChange1(e)} className='lead p-1'>
            {options.map(o => <option key={o.id} value={(o.id) + ' ' + (o.name) + ' ' + (o.price) + ' ' + (o.bag) + ' ' + (o.case) + ' ' + (o.image)}>{o.name}</option>)}
          </select>

        <p className='lead'>Cases Required: <strong>{row1cases[4]}</strong></p>

        <hr className='mb-4'/>


        <select value={this.props.row2} onChange={e => this.props.handleChange2(e)} className='lead p-1'>
            {options.map(o => <option key={o.id} value={(o.id) + ' ' + (o.name) + ' ' + (o.price) + ' ' + (o.bag) + ' ' + (o.case)}>{o.name}</option>)}
          </select>

        <p className='lead'>Cases Required: <strong>{row2cases[4]}</strong></p>

        <hr className='mb-4'/>

        <select value={this.props.row3} onChange={e => this.props.handleChange3(e)} className='lead p-1'>
            {options.map(o => <option key={o.id} value={(o.id) + ' ' + (o.name) + ' ' + (o.price) + ' ' + (o.bag) + ' ' + (o.case)}>{o.name}</option>)}
          </select>

        <p className='lead'>Cases Required: <strong>{row3cases[4]}</strong></p>

        </div>
      );
    }
  }

export default Dropdown