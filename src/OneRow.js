import React from "react";
import { Card, Col, FormControl, InputGroup, Row } from "react-bootstrap";

const OneRow = ({ coefficient, onChangeInput, inputState }) => {
  return (
    <Card style={{ width: "500px" }} className="text-center">
      <Card.Body>
        <Card.Title>
          <Row>
            <Col>{coefficient}</Col>
            <Col>x</Col>
            <Col md={4}>
              <InputGroup className="mb-3">
                <FormControl
                  style={{ width: "200px" }}
                  aria-label="Default"
                  // aria-describe-body="inputGroup-sizing-default"
                  onChange={onChangeInput}
                />
              </InputGroup>
            </Col>
            <Col>=</Col>
            <Col style={{ width: "200px" }}>{inputState * coefficient}</Col>
          </Row>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default OneRow;
