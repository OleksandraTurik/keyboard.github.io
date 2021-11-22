import React from "react";
import { connect } from "react-redux";
import Preset from "./Preset";

const PresetsList = ({ presets }) => {
  return (
    <div className="listPresent">
      <ul>
        {presets.map((preset, i) => (
          <li key={i}><Preset key={i} preset={preset} idx={i} /></li>
        ))}
      </ul>
    </div>
  );
};
const mapStateToProps = ({ presets }) => ({
  presets
});
export default connect(mapStateToProps)(PresetsList);
