import nextId from "react-id-generator";

const initState = {
  presets: [],
  text: "",
  color: "#a9c421",
  id: 0,
  buttons: {}, 
  selected: undefined
};

const setPersist = presets =>
  window.localStorage.setItem("presets2", JSON.stringify(presets));

export const addPresets = (state = initState, action) => {
  switch (action.type) {
    case "PERSIST_PRESETS":
      const presets = JSON.parse(window.localStorage.getItem("presets2"));
      return { ...state, presets: presets ? presets : [] };
    case "ADD_TEXT":
      return { ...state, text: action.payload };
    case "ADD_COLOR":
      return { ...state, color: action.payload };
    case "ADD_BUTTON":
      return { ...state, buttons: action.payload };
    case "ADD_PRESETS":
      action.payload.id = nextId()
      const presets2 = state.presets.concat(action.payload);
      Object.keys(action.payload.buttons ?? {}).forEach(id => document.getElementById(id).parentElement.style = '')
      window.localStorage.setItem("presets2", JSON.stringify(presets2));
      return { ...state, presets: presets2, text: "", color: "", id: "", buttons: {} };
    case "DELETE_PRESETS":
      const presets3 = state.presets.filter((presets, i) => i !== action.payload);
      setPersist(presets3);
      return {
        ...state,
        presets: presets3
      };
    case "EDIT_PRESETS":
      Object.keys(action.payload.buttons ?? {}).forEach(id => document.getElementById(id).parentElement.style = 'box-shadow:1px 1px 10px '+action.payload.buttons[id]+'; color:'+action.payload.buttons[id] )
      return {
        ...state,
        text: action.payload.text,
        color: action.payload.color,
        id: action.payload.id,
        buttons: action.payload.buttons,
        selected: action.payload
      };
    case "EDIT_ADD_PRESETS":
      const presets4 = state.presets.map(function(value, i) {
        if (value.id === action.payload.id) {
          Object.keys(value.buttons ?? {}).forEach(id => document.getElementById(id).parentElement.style = '')
          value.text = action.payload.text  
          value.color = action.payload.color  
        }
        return value
      });
      setPersist(presets4);
      return {
        ...state,
        presets: presets4,
        selected: undefined,
        text: "",
        color: "",
        buttons: {}
      };
    case "DELETE_ALL":
      setPersist([]);
      return { ...state, presets: [], text: "" };
    default:
      return state;
  }
};
