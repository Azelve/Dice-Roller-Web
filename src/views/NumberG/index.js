import React, { useState } from "react";
import { Container, Input, Output, Button } from "./style";

const Generator = () => {
  const [output, setOutput] = useState("###");
  const [min, setMin] = useState("0");
  const [max, setMax] = useState("0");

  const Number = () => {
    const x = Math.ceil(max);
    const y = Math.floor(min);
    const rnd = Math.floor(Math.random() * (x - y + 1)) + y;

    if (min === max) {
      return setOutput(max);
    }

    if (x < y) {
      return setOutput("Error");
    }

    setOutput(rnd);
  };

  const Minimum = (e) => {
    setMin(e.target.value);
  };

  const Maximum = (e) => {
    setMax(e.target.value);
  };

  return (
    <Container>
      <div class="row">
        <span>
          <Input
            onChange={Minimum}
            type="number"
            placeholder="Type the minimum number"
          />
          <label for="min">Min</label>
        </span>

        <span>
          <Input
            onChange={Maximum}
            type="number"
            placeholder="Type the maximum number"
          />
          <label for="max">Max</label>
        </span>
      </div>

      <Button onClick={Number}>Random</Button>
      <Output>{output}</Output>
    </Container>
  );
};

export default Generator;
