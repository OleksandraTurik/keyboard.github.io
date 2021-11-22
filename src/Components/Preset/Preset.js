import React from "react";
import { connect } from "react-redux";
import { deletePreset, editPreset } from "../redux/action/addPreset.action";

const Preset = ({ preset, idx, deletePreset, editPreset, selected, text }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        cursor: "pointer",
        padding: "10px"
      }}
    >
      <div onClick={() => editPreset(preset)}>{selected === idx ? text : preset.text}</div>
      <div style={{ cursor: "pointer" }} onClick={() => deletePreset(idx)}>x</div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deletePreset: key => dispatch(deletePreset(key)),
  editPreset: key => dispatch(editPreset(key))
});

const mapStateToProps = ({ text, selected }) => ({
  text,
  selected
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preset);
