import React, {Component}  from 'react';
import Table from 'react-bootstrap/Table'
import Dropdown from './DropdownComponent';
import Math from './MathComponent';

class Main extends Component {


    constructor(props) {
        super(props);
        this.state = {
          dataValue: 'Potato',
          row1: 'Test',
          price1: '',
        }
      
        this.handleChange1 = this.handleChange1.bind(this);

    }

    handleChange1(e) {
      this.setState({ row1: e.target.value });
    }

    render() {

      
        return(
      <div>
        <div className="container">
          <div className='row justify-content-center p-5'><h1>Salty Snack Sales Tool (3ST)</h1></div>
             <div className="row">

                <div className='col'>
                  <h5 className='pb-1'>Dropdown Selections</h5>
                  <Dropdown/>
                </div>

                    <div className="col">
                    <Table  striped bordered hover size="sm">
                        <tbody>
                          <tr>
                            <td>Row 1 Should be {this.state.row1}</td>
                          </tr>
                          <tr>
                            <td>Snack 2 Images</td>
                          </tr>
                          <tr>
                            <td>Snack 3 Images</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>

                  <div className='col'>
                    <h5>Math Calculations</h5>
                  <Math
                  row1={this.state.row1}
                  dataValue={this.state.dataValue}
                  price1={this.state.price1}
                  handleChange1={this.handleChange1}
                  />
                  </div>
          </div>
        </div>
     </div>
        )

    }
}

export default Main;