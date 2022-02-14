import React, {Component}  from 'react';
import Table from 'react-bootstrap/Table'
import Dropdown from './DropdownComponent';
import Math from './MathComponent';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Slide from 'react-reveal/Slide';

class Main extends Component {


    constructor(props) {
        super(props);
        this.state = {
          row1: 'Test',   //Setting state for parent component to handle to row information passed up and down the entire app
          row2: 'Test',
          row3: 'Test',
        }
      
      
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);

    }

    componentDidMount() {  //Hacky solution for full page background color
      document.body.style.backgroundColor = "#CAE7E4"
  }

    handleChange1(e) {
      this.setState({ row1: e.target.value }); //Along with .bind this above, links the changes from the dropdown components in the children to change the information when selected.
    }

    handleChange2(e) {
      this.setState({ row2: e.target.value });
    }

    handleChange3(e) {
      this.setState({ row3: e.target.value });
    }

    addDefaultSrc(ev){
      ev.target.src = '/assets/images/blank.png'  //Pulls "on error" prop from img to provide a deault image instead of a broken image.
    }

    state = { showing: true };

    render() {

      const { showing } = this.state;
      const row1split = this.state.row1.split(" ")  //Split Result by word into new array to call values out of the dropdowns.
      const row2split = this.state.row2.split(" ")  //Split Result by word into new array to call values out of the dropdowns.
      const row3split = this.state.row3.split(" ")  //Split Result by word into new array to call values out of the dropdowns.
      
        return(
      <div>
        <div className="container">
          <div className='row justify-content-center p-5'>
            <Slide top><Card className='p-5'><h1>Salty Snack Sales Tool (3ST)</h1></Card></Slide>
          </div>
          
             <div className="row mx-auto">
                { showing 
                    ?                 
                    null
                    :
                    <Slide left>
                    <div className='col'>                     
                    <Card>
                    <Card.Header ><h2 className='p-2'>Display Windows</h2></Card.Header>
                      <Card.Body>
                        <Dropdown
                        row1={this.state.row1}
                        handleChange1={this.handleChange1}
                        row2={this.state.row2}
                        handleChange2={this.handleChange2}
                        row3={this.state.row3}
                        handleChange3={this.handleChange3}
                        />
                      </Card.Body>
                    </Card>
                    </div>
                    </Slide>
                }

                    <div className="col">
                    <Slide bottom>
                    <Card>
                      <Card.Header><h2 className='p-2'>Sales Display Preview</h2></Card.Header>      
                      <Card.Body>                      
                        <Table  striped bordered hover size="sm">
                        <tbody>
                          <tr>
                              <img width='85px' src={`/assets/images/${row1split[0]}.png`} onError={this.addDefaultSrc} alt='{row1split[1]}'/>
                              <img width='85px' src={`/assets/images/${row1split[0]}.png`} onError={this.addDefaultSrc} alt='{row1split[1]}'/>
                              <img width='85px' src={`/assets/images/${row1split[0]}.png`} onError={this.addDefaultSrc} alt='{row1split[1]}'/>
                          </tr>
                          <tr>
                              <img width='85px' src={`/assets/images/${row2split[0]}.png`} onError={this.addDefaultSrc} alt='{row2split[1]}'/>
                              <img width='85px' src={`/assets/images/${row2split[0]}.png`} onError={this.addDefaultSrc} alt='{row2split[1]}'/>
                              <img width='85px' src={`/assets/images/${row2split[0]}.png`} onError={this.addDefaultSrc} alt='{row2split[1]}'/>
                          </tr>
                          <tr>
                              <img width='85px' src={`/assets/images/${row3split[0]}.png`} onError={this.addDefaultSrc} alt='{row3split[1]}'/>
                              <img width='85px' src={`/assets/images/${row3split[0]}.png`} onError={this.addDefaultSrc} alt='{row3split[1]}'/>
                              <img width='85px' src={`/assets/images/${row3split[0]}.png`} onError={this.addDefaultSrc} alt='{row3split[1]}'/>
                          </tr>
                        </tbody>
                      </Table>
                      </Card.Body>

                      <Button className="mx-5 mb-3 p-1" onClick={() => this.setState({ showing: !showing })}>Presentation Mode</Button>             
                    { /* 
                    Comments in Render!

                    Testing: Row 1 Full Data is {this.state.row1}, 
                      ID is {row1split[0]}, 
                      Name is {row1split[1]},
                      Price {row1split[2]}, 
                      Bags per Case is {row1split[3]},
                      Cases per window is {row1split[4]},
                      Image is {row1split[5]},
                      Cost is {row1split[2] * row1split[3]} 

                      row2 is {this.state.row2}
                     row3 is {this.state.row3} */}
                      </Card>
                      </Slide>
                  </div>

                  <div className='col'>
                  <Slide right>
                  <Card>
                    <Card.Header><h2 className='p-2'>Profit/Cost</h2></Card.Header>
                    <Card.Body>
                      <Math
                      row1={this.state.row1}
                      row2={this.state.row2}
                      row3={this.state.row3}
                      />
                    </Card.Body>
                  </Card>
                  </Slide>
                  </div>

          </div>

        </div>
     </div>
        )

    }
}

export default Main;