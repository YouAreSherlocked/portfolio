import types from './types';

const initialState = {
  dark: false,
  sections: ["section1", "section2"],
  openSection: {
    title: "title",
    description: "description",
    date: "date",
    img: "img"
  }
};

const HudReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_MODE: {
      return { ...state, dark: action.dark };
    }
    default:
      return state;
  }
};

export default HudReducer;

