import React, { useState } from "react";
import { Card, Col, FormControl, InputGroup, Row } from "react-bootstrap";
import OneRow from "./OneRow";

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
      <OneRow
        onChangeInput={onChangeInput1}
        inputState={input1}
        coefficient={1}
      />
      <OneRow
        onChangeInput={onChangeInput2}
        inputState={input2}
        coefficient={2}
      />
      <Card style={{ width: "500px" }}>
        <Card.Body>
          <Card.Title style={{ marginLeft: 200 }}>
            total = {input1 * 1 + input2 * 2}
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Count;
