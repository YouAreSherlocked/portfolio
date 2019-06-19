import actions from './actions';
import * as fetch from './services/fetchServices';

const initState = () => async dispatch => {
    const sections = await fetch.sections;
    const workSections = await fetch.workSections;
    const projects = await fetch.projects;
    const qualiprojects = await fetch.qualiprojects;
    const skills = await fetch.skills;

    dispatch(actions.storeSections(sections));
    dispatch(actions.storeWorkSections(workSections));
    dispatch(actions.storeProjects(projects));
    dispatch(actions.storeQualiprojects(qualiprojects));
    dispatch(actions.storeSkills(skills));
}

const switchMode = mode => dispatch => {
    const dark = "#333";
    const bright = "#ddd";
    const white = "#fff";
    document.body.style.backgroundColor = mode ? dark : white;

    Array.from(document.querySelectorAll('div, .line, .hamburger > span')).map(e => {
        if (e.getAttribute('class') != null) {
            if (e.getAttribute('class').includes('line')) {
                e.style.backgroundColor = !mode ? dark : bright;
            }
            if (e.getAttribute('class').includes('point')) {
                e.style.backgroundColor = mode ? dark : bright;
                e.style.borderColor = !mode ? dark : bright;
            }
        }
        console.log(e.tagName)
        if (e.tagName === 'SPAN') {
            e.style.backgroundColor = !mode ? dark : bright;
        }

        e.style.color = !mode ? dark : bright;
    });

    dispatch(actions.switchMode(mode));
}

const switchActiveSection = section => dispatch => {
    dispatch(actions.switchActiveSection(section));
}

const storeHomeScroll = scroll => dispatch => {
    dispatch(actions.storeHomeScroll(scroll));
}

export default {
    initState,
    switchMode,
    switchActiveSection,
    storeHomeScroll
};