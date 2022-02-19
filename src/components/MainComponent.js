import React, {Component}  from 'react';
import Table from 'react-bootstrap/Table'
import Dropdown from './DropdownComponent';
import Math from './MathComponent';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class Main extends Component {


    constructor(props) {
        super(props);
        this.state = {
          row1: 'Test',   //Setting state for parent component to handle to row information passed up and down the entire app
          row2: 'Test',
          row3: 'Test',
          row4: 'Test',
          row5: 'Test',
          dip: 'Test',
          showing: true,
          fiveshelf: false,
        }
      
      
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleChange5 = this.handleChange5.bind(this);
        this.handleChangeDip = this.handleChangeDip.bind(this);

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

    handleChange4(e) {
      this.setState({ row4: e.target.value });
    }
    
    handleChange5(e) {
      this.setState({ row5: e.target.value });
    }

    handleChangeDip(e) {
      this.setState({ dip: e.target.value });
    }

    addDefaultSrc(ev){
      ev.target.src = '/assets/images/blank.png'  //Pulls "on error" prop from img to provide a default image instead of a broken image.
    }

    addDefaultSrcDip(ev){
      ev.target.src = '/assets/images/dipblank.png'  //Pulls "on error" prop from img to provide a default image instead of a broken image for dip.
    }


    render() {

      const { showing } = this.state; // Enables Sales Mode toggle
      const { fiveshelf } = this.state; // 5 Shelf Toggle
      const row1split = this.state.row1.split(" ")  //Split Result by word into new array to call values out of the dropdowns.
      const row2split = this.state.row2.split(" ")  //Split Result by word into new array to call values out of the dropdowns.
      const row3split = this.state.row3.split(" ")  //Split Result by word into new array to call values out of the dropdowns.
      const row4split = this.state.row4.split(" ")  //Split Result by word into new array to call values out of the dropdowns.
      const row5split = this.state.row5.split(" ")  //Split Result by word into new array to call values out of the dropdowns.
      const dipcases = this.state.dip.split(" ") //Split Result by word into new array to call values out of the dropdowns.

        return(
      <div>
        <div className="container">
          <div className='row justify-content-center p-3'>
            <Card className='p-1'><h1>Salty Snack Sales Tool (3ST)</h1></Card>
          </div>
          
             <div className="row mx-auto">
             { showing 
                    ?                 
                    <div className='col-lg'>                     
                    <Card>
                    <Card.Header ><h3 className='p-1'>Display Windows</h3></Card.Header>
                      <Card.Body>
                        <Dropdown
                        row1={this.state.row1}
                        handleChange1={this.handleChange1}
                        row2={this.state.row2}
                        handleChange2={this.handleChange2}
                        row3={this.state.row3}
                        handleChange3={this.handleChange3}
                        row4={this.state.row4}
                        handleChange4={this.handleChange4}
                        row5={this.state.row5}
                        handleChange5={this.handleChange5}
                        dip={this.state.dip}
                        handleChangeDip={this.handleChangeDip}
                        fiveshelf={this.state.fiveshelf}
                        />
                      </Card.Body>
                    </Card>
                    </div>
                    :
                    null
              }

                    <div className="col">
                    <Card>
                      <Card.Header><h2 className='p-2'>Sales Display Preview</h2>
                      <Button className="mx-4 mb-1 p-1" onClick={() => this.setState({ fiveshelf: !fiveshelf })}> Switch to { this.state.fiveshelf? '3 Shelf' : '5 Shelf' } Display</Button>
                      </Card.Header>

                      <Card.Body>                      
                        <Table   bordered size="lg">
                        <tbody>
                        { fiveshelf 
                    ?                 
                          <tr>
                              <img width='85px' src={`/assets/images/${row4split[0]}.png`} onError={this.addDefaultSrc} alt='{row4split[1]}'/>
                              <img width='85px' src={`/assets/images/${row4split[0]}.png`} onError={this.addDefaultSrc} alt='{row4split[1]}'/>
                              <img width='85px' src={`/assets/images/${row4split[0]}.png`} onError={this.addDefaultSrc} alt='{row4split[1]}'/>
                          </tr>
              
                    :
                    null
              }
                       { fiveshelf 
                    ?                 
                          <tr>
                              <img width='85px' src={`/assets/images/${row5split[0]}.png`} onError={this.addDefaultSrc} alt='{row5split[1]}'/>
                              <img width='85px' src={`/assets/images/${row5split[0]}.png`} onError={this.addDefaultSrc} alt='{row5split[1]}'/>
                              <img width='85px' src={`/assets/images/${row5split[0]}.png`} onError={this.addDefaultSrc} alt='{row5split[1]}'/>
                          </tr>
              
                    :
                    null
              }
                          <tr>
                              <img width='60px' src={`/assets/images/${dipcases[0]}.png`} onError={this.addDefaultSrcDip} alt='{dipcases[1]}'/>
                              <img width='60px' src={`/assets/images/${dipcases[0]}.png`} onError={this.addDefaultSrcDip} alt='{dipcases[1]}'/>
                              <img width='60px' src={`/assets/images/${dipcases[0]}.png`} onError={this.addDefaultSrcDip} alt='{dipcases[1]}'/>
                              <img width='60px' src={`/assets/images/${dipcases[0]}.png`} onError={this.addDefaultSrcDip} alt='{dipcases[1]}'/>
                          </tr>
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

                  <div className='col-lg-4'>
                  <Card>
                    <Card.Header><h2 className='p-2'>Profit/Cost</h2></Card.Header>
                    <Card.Body>
                      <Math
                      row1={this.state.row1}
                      row2={this.state.row2}
                      row3={this.state.row3}
                      row4={this.state.row4}
                      row5={this.state.row5}
                      dip={this.state.dip}
                      fiveshelf={this.state.fiveshelf}
                      />
                      <hr className='my-4'/>
                      <Button className="mx-5 mb-3 p-1" onClick={() => this.setState({ showing: !showing })}> Press to enable { this.state.showing ? 'sales' : 'setup' } mode</Button>      
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