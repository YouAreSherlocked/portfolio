const getSections = state => state.sections;
const getWorkSections = state => state.workSections;
const getProjects = state => state.projects;
const getSkills = state => state.skills;
const getQualiprojects = state => state.qualiprojects;
const getMode = state => state.darkMode;
const getActiveSection = state => state.activeSection;
const getHomeScroll = state => state.homeScroll;
const getReferences = state => state.references;
const getActiveWorkId = state => state.activeWork;

const getProjectByName = (state, name) => {
  state.projects.forEach(p => {
    if (p.title === name) {
      return p;
    }
  })
}

const getProjectById = async (state, id) => {
  console.log(id)
  console.log(state.mainState)
  let project = {};
  const projects = await getProjects(state.mainState);
  console.log(projects)
  getProjects(state.mainState).forEach(p => {
    if (p.id === parseInt(id)) {
      project = p;
    }
  });
  console.log(project)
  return project;
}

const getActiveProject = async state => {
  const id = await state.activeWork;
  let project = {};
  state.projects.forEach(p => {
    if (p.id === parseInt(state.activeWork)) {
      project = p;
    }
  });
  //console.log(project)
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
  getActiveWorkId,
  getHomeScroll,
  getProjectByName,
  getActiveProject,
  getProjectById
}