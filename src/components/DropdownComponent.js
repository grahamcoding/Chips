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
      const { fiveshelf } = this.props; // 5 Shelf Toggle pulled from parent's props to change layout based on shelf size selection.
      const options = this.state.lookup[dataValue]; //Sets option for mapping the dropdown to the value selected for the product type
      const dip = this.state.lookup["Dip"] //Pulls the dip section of the lookup for dip selection

      const row1cases = this.props.row1.split(" ")  //Split Result by word into new array to call values (cases per window) out of the dropdowns.
      const row2cases = this.props.row2.split(" ")  
      const row3cases = this.props.row3.split(" ")
      const row4cases = this.props.row4.split(" ") 
      const row5cases = this.props.row5.split(" ") 
      const dipcases = this.props.dip.split(" ")  

      //Initial Div selects overall dropdown options - need to add manually from LOOKUP so it can map the option by name
      return (
        <div>
          <p className='h6 pb-2'>Select Type of Product
          <select onChange={this.onChange} className='p-1 mb-3 ms-3'>
            <option value="Potato">Potato Chips</option>
            <option value="Tortilla">Tortilla Chips</option>
            <option value="Cheeze">Cheeze Snacks</option>
          </select></p>
          <p className='h6'>Select Dip Option:
          <select value={this.props.dip} onChange={e => this.props.handleChangeDip(e)} className='p-1 mb-2 ms-3'>
          {dip.map(o => <option key={o.id} value={(o.id) + ' ' + (o.name) + ' ' + (o.price) + ' ' + (o.bag) + ' ' + (o.case) + ' ' + (o.image)}>{o.name}</option>)}
          </select></p>

          <p>Dip Cases Required: <strong>{dipcases[4]}</strong></p>

        <hr className='mb-4' />

        <p className='h6 pb-2'>Select Display Windows</p>


        { fiveshelf 
                    ?                 
                      <div>

        <p className='pt-1'>Window 1 : 
          <select value={this.props.row4} onChange={e => this.props.handleChange4(e)} className='p-1 ms-1'>
            {options.map(o => <option key={o.id} value={(o.id) + ' ' + (o.name) + ' ' + (o.price) + ' ' + (o.bag) + ' ' + (o.case) + ' ' + (o.image)}>{o.name}</option>)}
          </select></p>


        <p>Cases Required: <strong>{row4cases[4]}</strong></p>

        <hr className='mb-2'/>

        <p className='pt-1'>Window 2 : 
        <select value={this.props.row5} onChange={e => this.props.handleChange5(e)} className='p-1 ms-1'>
            {options.map(o => <option key={o.id} value={(o.id) + ' ' + (o.name) + ' ' + (o.price) + ' ' + (o.bag) + ' ' + (o.case) + ' ' + (o.image)}>{o.name}</option>)}
          </select></p>

        <p>Cases Required: <strong>{row5cases[4]}</strong></p>

        <hr className='mb-2'/>

                    </div>
                    :
                    null
              }


        <p className='pt-1'>Window { this.props.fiveshelf? '3 : ' : '1 : ' }
        <select value={this.props.row1} onChange={e => this.props.handleChange1(e)} className='p-1'>
            {options.map(o => <option key={o.id} value={(o.id) + ' ' + (o.name) + ' ' + (o.price) + ' ' + (o.bag) + ' ' + (o.case) + ' ' + (o.image)}>{o.name}</option>)}
          </select></p>

        <p>Cases Required: <strong>{row1cases[4]}</strong></p>

        <hr className='mb-2'/>

        <p className='pt-1'>Window { this.props.fiveshelf? '4 : ' : '2 : ' }
        <select value={this.props.row2} onChange={e => this.props.handleChange2(e)} className='p-1'>
            {options.map(o => <option key={o.id} value={(o.id) + ' ' + (o.name) + ' ' + (o.price) + ' ' + (o.bag) + ' ' + (o.case)}>{o.name}</option>)}
          </select></p>

        <p>Cases Required: <strong>{row2cases[4]}</strong></p>

        <hr className='mb-2'/>

        <p className='pt-1'>Window { this.props.fiveshelf? '5 : ' : '3 : ' }
        <select value={this.props.row3} onChange={e => this.props.handleChange3(e)} className='p-1'>
            {options.map(o => <option key={o.id} value={(o.id) + ' ' + (o.name) + ' ' + (o.price) + ' ' + (o.bag) + ' ' + (o.case)}>{o.name}</option>)}
          </select></p>

        <p>Cases Required: <strong>{row3cases[4]}</strong></p>

        </div>
      );
    }
  }

export default Dropdown