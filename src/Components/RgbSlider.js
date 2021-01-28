import React, { useState } from "react";
import { HuePicker } from "react-color";

function RgbSlider(props) {
  const [color, setColor] = useState(props.color);

  return (
    <div className="container">
      <div className="row align-content-center">
        <div className="col-md-3">
          <input
            class="form-field input-text"
            value={color}
            name={`color-${props.field}`}
          />
        </div>
        <div className="col-md-9 align-self-center">
          <HuePicker
            color={color}
            onChangeComplete={(color) => setColor(color.hex.slice(1))}
          />
        </div>
      </div>
    </div>
  );
}

export default RgbSlider;
