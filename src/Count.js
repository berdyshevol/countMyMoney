import React, { useState } from "react";
import { Card, Col, FormControl, InputGroup, Row } from "react-bootstrap";

const Count = () => {
  const [input1, setInput1] = useState(null);
  const [input2, setInput2] = useState(null);

  const onChangeInput1 = (event) => {
    setInput1(event.target.value);
  };

  const onChangeInput2 = (event) => {
    setInput2(event.target.value);
  };

  return (
    <div className="Count">
      <Card style={{ width: "500px" }} className="text-center">
        <Card.Body>
          <Card.Title>
            <Row>
              <Col>1</Col>
              <Col>x</Col>
              <Col md={4}>
                <InputGroup className="mb-3">
                  <FormControl
                    style={{ width: "200px" }}
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={onChangeInput1}
                  />
                </InputGroup>
              </Col>
              <Col>=</Col>
              <Col style={{ width: "200px" }}>{input1 * 1}</Col>
            </Row>
          </Card.Title>
        </Card.Body>
      </Card>
      <Card style={{ width: "500px" }} className="text-center">
        <Card.Body>
          <Card.Title>
            <Row>
              <Col>2</Col>
              <Col>x</Col>
              <Col md={4}>
                <InputGroup className="mb-3">
                  <FormControl
                    style={{ width: "200px" }}
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={onChangeInput2}
                  />
                </InputGroup>
              </Col>
              <Col>=</Col>
              <Col style={{ width: "200px" }}>{input2 * 2}</Col>
            </Row>
          </Card.Title>
        </Card.Body>
      </Card>
      <Card style={{ width: "500px" }}>
        <Card.Body>
          <Card.Title style={{ marginLeft: 400 }}>
            {input1 * 1 + input2 * 2}
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Count;
