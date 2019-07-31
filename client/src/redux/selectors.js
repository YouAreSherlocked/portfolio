const getSections = state => state.sections;
const getWorkSections = state => state.workSections;
const getProjects = state => state.projects;
const getSkills = state => state.skills;
const getQualiprojects = state => state.qualiprojects;
const getMode = state => state.darkMode;
const getActiveSection = state => state.activeSection;
const getHomeScroll = state => state.homeScroll;
const getReferences = state => state.references;
const getActiveWork = state => state.activeWork;

const getProjectByName = (state, name) => {
  state.projects.forEach(p => {
    if (p.title === name) {
      return p;
    }
  })
}

const getProjectById = (state, id) => {
  let project = {};
  state.projects.forEach(p => {
    if (p.id === parseInt(id)) {
      project = p;
    }
  });
  return project;
}

const getActiveProject = state => {
  let project = {};
  state.projects.forEach(p => {
    if (p.id === parseInt(localStorage.getItem('projectId'))) {
      project = p;
    }
  });
  return project;
}

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
  getHomeScroll,
  getProjectByName,
  getActiveProject,
  getProjectById
}