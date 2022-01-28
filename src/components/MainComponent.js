import React, {Component}  from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Table from 'react-bootstrap/Table'

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
                  <h5>Dropdown Selections</h5>
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
                  </div>
          </div>
        </div>
     </div>
        )

    }
}

export default Main;