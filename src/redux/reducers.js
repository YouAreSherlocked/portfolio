import types from './types';

const initialState = {
  sections: ['Graphic Design', 'Illustrations', 'Photography', 'Programming'],
  dark: false
};

const HudReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SWITCH_MODE: {
      return { ...state, dark: action.mode };
    }
    default:
      return state;
  }
};

export default HudReducer;

