import React, { useEffect } from "react";
import InputField from "./Components/Preset/InputField";
import PresetsList from "./Components/Preset/PresetsList";
import Keys from "./Components/Keys";
import './index.css';
import { deleteAll, persistPresetss } from "./Components/redux/action/addPreset.action";
import { connect } from "react-redux";

const App = ({ deleteAll, persistPresetss }) => {
  useEffect(() => {
    persistPresetss();
  }, [persistPresetss]);
  return (
    <div id="main">
      <div id="preset">
        <InputField />
        <PresetsList />
        <div>
        <button
            style={{ marginTop: "20px", cursor: "pointer" }}
            onClick={deleteAll}
          >
            {" "}
            Delete All
          </button>
        </div>
      </div>                  
      <Keys />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAll()),
  persistPresetss: () => dispatch(persistPresetss())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
