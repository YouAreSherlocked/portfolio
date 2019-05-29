import actions from './actions';
import * as fetch from './services/fetchServices';

const initState = () => async dispatch => {
    const sections = await fetch.sections;
    const projects = await fetch.projects;
    const qualiprojects = await fetch.qualiprojects;
    const skills = await fetch.skills;

    dispatch(actions.storeSections(sections));
    dispatch(actions.storeProjects(projects));
    dispatch(actions.storeQualiprojects(qualiprojects));
    dispatch(actions.storeSkills(skills));
}

const switchMode = mode => async dispatch => {
    document.body.style.background = mode ? "#333" : "#fff";

    Array.from(document.querySelectorAll('div, .line')).map(e => {
        if (e.getAttribute('class') === "line") {
            e.style.background = !mode ? "#333" : "#fff";
        }
        e.style.color = !mode ? "#333" : "#fff";
        e.style.border = !mode ? "#333" : "#fff";
    });
    dispatch(actions.switchMode(mode));
}

const switchActiveSection = section => async dispatch => {
    console.log(section)
    dispatch(actions.switchActiveSection(section));
}

export default {
    initState,
    switchMode,
    switchActiveSection
};