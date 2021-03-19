import Aboutme from './Aboutme'
import Academic from './Academic'
import MySkills from './MySkills'
import Projects from './Projects'

export const NavComponents = [
    {
        id: 1,
        title:'About Me',
        icon: <i className="fas fa-user-alt"></i>,
        component: <Aboutme />
    },
    {
        id: 2,
        title:'Academic',
        icon: <i className="fas fa-university"></i>,
        component: <Academic />
    },
    {
        id: 3,
        title:'My Skills',
        icon: <i className="fas fa-pencil-ruler"></i>,
        component: <MySkills />
    },
    {
        id: 4,
        title:'My Projects',
        icon: <i className="fas fa-tasks"></i>,
        component: <Projects />
    }
]