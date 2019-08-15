import * as fetch from './index';
import * as seedingData from './seedingData';

export const migrateProjects = () => {
    seedingData.projects.forEach(project => {
        fetch.projects.postProject(project)
    });
}

export const migrateSections = () => {
    seedingData.sections.forEach(section => {
        fetch.sections.postSection(section)
    });
}

export const migrateWorksections = () => {
    seedingData.worksections.forEach(section => {
        fetch.worksections.postWorksection(section)
    });
}

export const migrateTechnologies = () => {
    seedingData.technologies.forEach(technology => {
        fetch.technologies.postTechnology(technology)
    });
}

export const migrateQualiprojects = () => {
    seedingData.qualiprojects.forEach(qualiproject => {
        fetch.qualiprojects.postQualiproject(qualiproject)
    });
}

export const migrateSkills = () => {
    seedingData.skills.forEach(skill => {
        fetch.skills.postSkills(skill)
    });
}

export const migrateReferences = () => {
    seedingData.references.forEach(reference => {
        fetch.references.postReferences(reference)
    });
}