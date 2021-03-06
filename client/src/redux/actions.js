import types from './types';

export const storeSections = sections => ({
  type: types.STORE_SECTIONS,
  sections: sections
});

export const storeWorkSections = workSections => ({
  type: types.STORE_WORKSECTIONS,
  workSections: workSections
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

export const storeReferences = references => ({
  type: types.STORE_REFERENCES,
  references: references
});

export const switchMode = mode => ({
  type: types.SWITCH_MODE,
  mode: mode
});

export const switchActiveSection = section => ({
  type: types.SWITCH_ACTIVE_SECTION,
  activeSection: section
});

export const switchActiveWork = work => ({
  type: types.SWITCH_ACTIVE_WORK,
  activeWork: work
});

export const storeHomeScroll = homeScroll => ({
  type: types.STORE_HOME_SCROLL,
  homeScroll: homeScroll
});

export default {
  switchMode,
  storeSections,
  storeWorkSections,
  storeProjects,
  storeSkills,
  switchActiveSection,
  switchActiveWork,
  storeQualiprojects,
  storeReferences,
  storeHomeScroll
}