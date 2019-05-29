import types from './types';

export const storeSections = sections => ({
  type: types.STORE_SECTIONS,
  sections: sections
});

export const storeProjects = projects => ({
  type: types.STORE_PROJECTS,
  projects: projects
});

export const storeSkills = skills => ({
  type: types.STORE_SKILLS,
  skills: skills
});

export const storeQualiprojects = qualiprojects => ({
  type: types.STORE_QUALIPROJECTS,
  qualiprojects: qualiprojects
});

export const switchMode = mode => ({
  type: types.SWITCH_MODE,
  mode: mode
});

export const switchActiveSection = section => ({
  type: types.SWITCH_ACTIVE_SECTION,
  activeSection: section
});

export default {
  switchMode,
  storeSections,
  storeProjects,
  storeSkills,
  switchActiveSection,
  storeQualiprojects
}