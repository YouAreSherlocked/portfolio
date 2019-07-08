import types from './types';

const initialState = {
  sections: [],
  workSections: [],
  projects: [],
  skills: [],
  qualiprojects: [],
  references: [],
  darkMode: false,
  activeSection: "",
  activeWork: "",
  homeScroll: 0
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.STORE_SECTIONS: {
      return { ...state, sections: action.sections };
    }
    case types.STORE_WORKSECTIONS: {
      return { ...state, workSections: action.workSections };
    }
    case types.STORE_PROJECTS: {
      return { ...state, projects: action.projects };
    }
    case types.STORE_SKILLS: {
      return { ...state, skills: action.skills };
    }
    case types.STORE_QUALIPROJECTS: {
      return { ...state, qualiprojects: action.qualiprojects };
    }
    case types.STORE_REFERENCES: {
      return { ...state, references: action.references };
    }
    case types.SWITCH_MODE: {
      return { ...state, darkMode: action.mode };
    }
    case types.SWITCH_ACTIVE_SECTION: {
      return { ...state, activeSection: action.activeSection };
    }
    case types.SWITCH_ACTIVE_WORK: {
      return { ...state, activeWork: action.activeWork };
    }
    case types.STORE_HOME_SCROLL: {
      return { ...state, homeScroll: action.homeScroll };
    }
    default:
      return state;
  }
};

export default mainReducer;

