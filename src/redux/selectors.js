const getSections = state => state.sections;
const getWorkSections = state => state.workSections;
const getProjects = state => state.projects;
const getSkills = state => state.skills;
const getQualiprojects = state => state.qualiprojects;
const getMode = state => state.darkMode;
const getActiveSection = state => state.activeSection;
const getHomeScroll = state => state.homeScroll;
const getReferences = state => state.references;
const getActiveWork = state => state.getActiveWork;

export default {
  getSections,
  getWorkSections,
  getProjects,
  getSkills,
  getQualiprojects,
  getMode,
  getReferences,
  getActiveSection,
  getActiveWork,
  getHomeScroll
}