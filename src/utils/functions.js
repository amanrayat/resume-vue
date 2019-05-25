import skills from './constants'

const getSkills = input =>{
    if( input === 'Web Development') {
        return skills.filter(v => v.web)
    }
    if( input === 'Languages') {
        return skills.filter(v => v.language)
    }
    if( input === 'Databases') {
        return skills.filter(v => v.database)
    }
    if( input === 'Tools') {
        return skills.filter(v => v.tool)
    }
    if( input === 'Services') {
        return skills.filter(v => v.service)
    }
    return skills

};

export default getSkills
