import React, {Component} from 'react';
import{
    Col,
    Row
} from 'reactstrap';

class MadlibForm extends Component {

    handleChannge = function() {
        console.log('trying to handle change');
    }


    render() {
      return (
          <Row style={{textAlign: 'center', color: 'white'}}>
               <Col md="3" className="inputWrapper">
                  <Row>
                    <Col md="2">
                        <label className="greenLabel">1</label> 
                    </Col>
                     <Col md="10">
                     <input placeholder="Color" type= "text" onChange={this.handleChange}/>
                     </Col>
                  </Row>
                  <Row>
                      <Col md="12">
                      <div className="inputDescription">Color</div>                     </div>
                      </Col>
                  </Row>    
                </Col>
                <Col md="3" className="inputWrapper">
                  <Row>
                    <Col md="2">
                        <label className="greenLabel">1</label> 
                    </Col>
                     <Col md="10">
                     <input placeholder="Noun (Plural)" type="text" onChange={this.handleChange}/>
                     </Col>
                  </Row>
                  <Row>
                      <Col md="12">
                      <div className="inputDescription">Noun (Plural)</div>                     </div>
                      </Col>
                  </Row>    
                </Col>
                <Col md="3" className="inputWrapper">
                  <Row>
                    <Col md="2">
                        <label className= "greenLabel">1</label> 
                    </Col>
                     <Col md="10">
                     <input placeholder= "Adjective" type= "text" onChange={this.handleChange}/>
                     </Col>
                  </Row>
                  <Row>
                      <Col md="12">
                      <div className="inputDescription">Adjective</div>                     </div>
                      </Col>
                  </Row>    
                </Col>
                <Col md="3" className= "inputWrapper">
                  <Row>
                    <Col md="2">
                        <label className= "greenLabel">1</label> 
                    </Col>
                     <Col md="10">
                     <input placeholder= "Celebrity" type= "text" onChange={this.handleChange}/>
                     </Col>
                  </Row>
                  <Row>
                      <Col md="12">
                      <div className="inputDescription">Celebrity</div>                     </div>
                      </Col>
                  </Row>    
                </Col>
           </Row>
      );
    }
}

export default MadlibForm;