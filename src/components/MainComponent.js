import React, {Component}  from 'react';
import Table from 'react-bootstrap/Table'
import Dropdown from './DropdownComponent';
import Math from './MathComponent';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Fade from 'react-reveal/Fade';

class Main extends Component {


    constructor(props) {
        super(props);
        this.state = {
          row1: 'Test',   //Setting state for parent component to handle to row information passed up and down the entire app
          row2: 'Test',
          row3: 'Test',
          show: true,
        }
      
      
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleClick = this.handleClick.bind(this);

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

    handleClick() {
      this.setState({ show: !this.state.show });
    }

    addDefaultSrc(ev){
      ev.target.src = '/assets/images/blank.png'  //Pulls "on error" prop from img to provide a default image instead of a broken image.
    }


    render() {

      const row1split = this.state.row1.split(" ")  //Split Result by word into new array to call values out of the dropdowns.
      const row2split = this.state.row2.split(" ")  //Split Result by word into new array to call values out of the dropdowns.
      const row3split = this.state.row3.split(" ")  //Split Result by word into new array to call values out of the dropdowns.
      
        return(
      <div>
        <div className="container">
          <div className='row justify-content-center p-5'>
            <Card className='p-5'><h1>Salty Snack Sales Tool (3ST)</h1></Card>
          </div>
          
             <div className="row mx-auto">
                    <Fade left when={this.state.show}>
                    <div className='col-lg-3'>                     
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
                    </Fade>

                    <div className="col-lg-5">
                    <Card>
                      <Card.Header><h2 className='p-2'>Sales Display Preview</h2></Card.Header>      
                      <Card.Body>                      
                        <Table   bordered size="lg">
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
                  </div>

                  <div className='col'>
                  <Card>
                    <Card.Header><h2 className='p-2'>Profit/Cost</h2></Card.Header>
                    <Card.Body>
                      <Math
                      row1={this.state.row1}
                      row2={this.state.row2}
                      row3={this.state.row3}
                      />
                      <hr className='my-4'/>
                      <Button className="mx-5 mb-3 p-1" onClick={this.handleClick}>Press to enable { this.state.show ? 'sales' : 'setup' } mode</Button>      
                    </Card.Body>
                  </Card>
                  </div>

          </div>

        </div>
     </div>
        )

    }
}

export default Main;