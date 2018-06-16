import React, {Component} from 'react';
import{
    Col,
    Row
} from 'reactstrap';

class MadlibForm extends Component {
    render() {
      return (
          <Row style={{textAlign: 'center', color: 'white'}}>
               <Col md= "3" className= "inputWrapper">
                  <Row>
                    <Col md= "2">
                        <label className= "greenLabel">1</label> 
                    </Col>
                     <Col md="10">
                     <input placeholder= "color" type= "text" />
                     </Col>
                  </Row>
                </Col>
                <Col md= "3" className= "inputWrapper">
                  <Row>
                    <Col md= "2">
                        <label className= "greenLabel">1</label> 
                    </Col>
                     <Col md="10">
                     <input placeholder= "color" type= "text" />
                     </Col>
                  </Row>
                </Col>
                <Col md= "3" className= "inputWrapper">
                  <Row>
                    <Col md= "2">
                        <label className= "greenLabel">1</label> 
                    </Col>
                     <Col md="10">
                     <input placeholder= "color" type= "text" />
                     </Col>
                  </Row>
                </Col>
                <Col md= "3" className= "inputWrapper">
                  <Row>
                    <Col md= "2">
                        <label className= "greenLabel">1</label> 
                    </Col>
                     <Col md="10">
                     <input placeholder= "color" type= "text" />
                     </Col>
                  </Row>
                </Col>
           </Row>
      );
    }
}

export default MadlibForm;