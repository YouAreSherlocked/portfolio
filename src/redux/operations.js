import actions from './actions';
import * as fetch from './services/fetchServices';

const initState = () => async dispatch => {
    const sections = await fetch.sections;
    const projects = await fetch.projects;
    const skills = await fetch.skills;

    dispatch(actions.storeSections(sections));
    dispatch(actions.storeProjects(projects));
    dispatch(actions.storeSkills(skills));
}

const goDark = () => {
    const all = document.getElementsByTagName('*');
    for (let i=0; i<all.length; i++) {
        all[i].className += " go-dark"
    }
}

const goBright = () => {
    const all = document.getElementsByTagName('*');
    for (let i=0; i<all.length; i++) {
        all[i].className -= " go-dark"
    }
}
const switchMode = () => async dispatch  => {
    dispatch(actions.switchMode);
}

export default {
    initState,
    goDark, 
    goBright,
    switchMode
};