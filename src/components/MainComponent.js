import React, {Component}  from 'react';
import Table from 'react-bootstrap/Table'
import Dropdown from './DropdownComponent';
import Math from './MathComponent';

class Main extends Component {


    constructor(props) {
        super(props);
        this.state = {
          row1: 'Test',
          row2: 'Test',
          row3: 'Test'
        }
      
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);

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

      const row1split = this.state.row1.split(" ")  //Split Result by word into new array to call values out of the dropdowns.
      const row2split = this.state.row2.split(" ")  //Split Result by word into new array to call values out of the dropdowns.
      const row3split = this.state.row3.split(" ")  //Split Result by word into new array to call values out of the dropdowns.
      
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
                            <td>Row 1 image is {row1split[0]}</td>
                          </tr>
                          <tr>
                            <td>Snack 2 Image is {row2split[0]}</td>
                          </tr>
                          <tr>
                            <td>Snack 3 Images {row3split[0]}</td>
                          </tr>
                        </tbody>
                      </Table>

                      Testing: Row 1 Full Data is {this.state.row1}, 
                      ID is {row1split[0]}, 
                      Name is {row1split[1]},
                      Price {row1split[2]}, 
                      Bags per Case is {row1split[3]},
                      Cases per window is {row1split[4]},
                      Cost is {row1split[2] * row1split[3]} 

                      row2 is {this.state.row2}
                      row3 is {this.state.row3}

                    </div>

                  <div className='col'>
                    <h5>Math Calculations</h5>
                  <Math
                  row1={this.state.row1}
                  handleChange1={this.handleChange1}
                  row2={this.state.row2}
                  handleChange2={this.handleChange2}
                  row3={this.state.row3}
                  handleChange3={this.handleChange3}
                  />
                  </div>
          </div>
        </div>
     </div>
        )

    }
}

export default Main;