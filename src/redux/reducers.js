import types from './types';

const initialState = {
  sections: [],
  projects: [],
  skills: [],
  darkMode: false,
  activeSection: "section"
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.STORE_SECTIONS: {
      return { ...state, sections: action.sections };
    }
    case types.STORE_PROJECTS: {
      return { ...state, projects: action.projects };
    }
    case types.STORE_SKILLS: {
      return { ...state, skills: action.skills };
    }
    case types.SWITCH_MODE: {
      return { ...state, darkMode: action.mode };
    }
    case types.SWITCH_SECTION: {
      return { ...state, activeSection: action.section };
    }
    default:
      return state;
  }
};

export default mainReducer;

