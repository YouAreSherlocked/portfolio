import actions from './actions';

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
    goDark, 
    goBright,
    switchMode
};