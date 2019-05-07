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

export const switchMode = mode => ({
  type: types.SWITCH_MODE,
  mode: mode
});

export const switchSection = section => ({
  type: types.SWITCH_SECTION,
  section: section
});

export default {
  switchMode,
  storeSections,
  storeProjects,
  storeSkills,
  switchSection
}