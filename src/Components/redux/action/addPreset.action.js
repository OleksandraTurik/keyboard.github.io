export const persistPresetss = () => ({
  type: "PERSIST_PRESETSS"
});
export const addText = value => ({
  type: "ADD_TEXT",
  payload: value
});
export const addColor = value => ({
  type: "ADD_COLOR",
  payload: value
});
export const addButton = value => ({
  type: "ADD_BUTTON",
  payload: value
});
export const addPresets = presets => ({
  type: "ADD_PRESETS",
  payload: presets
});

export const deletePreset = key => ({
  type: "DELETE_PRESETS",
  payload: key
});

export const editPreset = key => ({
  type: "EDIT_PRESETS",
  payload: key
});

export const editAddPresets = obj => ({
  type: "EDIT_ADD_PRESETS",
  payload: obj
});

export const deleteAll = () => ({
  type: "DELETE_ALL"
});
