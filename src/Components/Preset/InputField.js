import React from "react";
import { connect } from "react-redux";
import { addPresets, addText, addColor, editAddPresets } from "../redux/action/addPreset.action";

const InputField = ({ addText, addColor, id, text, color, buttons, selected, addPresets, editAddPresets }) => {
  const handleTextChange = e => addText(e.target.value);
  const handleColorChange = e => addColor(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    if (selected === 0 || selected) {
      editAddPresets({"id": id, "text": text, "color": color});
    } else {
      addPresets({"id": id, "text": text, "color": color, "buttons": buttons});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <label>Name: </label>
        <input
          type="text"
          name="presets"
          value={text}
          onChange={handleTextChange}
          id="namePreset"
        />
      </div>
      <div className="flex">
        <label>Color: </label>
        <input 
          type="color" 
          name="color"
          value={color}
          onChange={handleColorChange}
        />      
      </div>
      <input 
        type="hidden"
        name="id"
        value={id} 
      />            
      <button className="submitForm">Add</button>
      <hr />
    </form>    
  );
};

const mapDispatchToProps = dispatch => ({
  addPresets: presets => dispatch(addPresets(presets)),
  addText: value => dispatch(addText(value)),
  addColor: value => dispatch(addColor(value)),
  editAddPresets: obj => dispatch(editAddPresets(obj))
});

const mapStateToProps = ({ id, text, color, buttons, selected }) => ({
  id,
  text,
  color,
  buttons,
  selected
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputField);
