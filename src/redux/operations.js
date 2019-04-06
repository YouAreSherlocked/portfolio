
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

  export {goDark, goBright};