import React, {Component}  from 'react';
import Table from 'react-bootstrap/Table'
import Dropdown from './DropdownComponent';
import Math from './MathComponent';

class Main extends Component {


    constructor(props) {
        super(props);
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
                            <td>Snack 1 Images</td>
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
                  <Math/>
                  </div>
          </div>
        </div>
     </div>
        )

    }
}

export default Main;