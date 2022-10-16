import React from 'react'
import ProjectCard, { ProjectType } from './ProjectCard'

type Props = {}

type Projects=ProjectType[]

const Projects = (props: Props) => {
  const projects:Projects=[
    {
      preview:"/images/projects/shg.png",
      name:'Online SHG item Procurement System',
      techUsed:['Reactjs','Nodejs','Expressjs','MongoDB'],
      description:[
      'This software is being developed for a government project which aims to provide better market opportunities for Self Help Groups by giving a bidding platform.',
      'My contribution to this project has been in developing the backend of the application using Nodejs, Express and Mongodb.',
      'Added a register page and contributed in Homepage in frontend. '
      ]
    },
    {
      preview:"/images/projects/study-bud.png",
      name:'Study-bud',
      techUsed:['Django'],
      description:[
        'A full stack web application made with Django and has features like chat rooms , messages with CRUD operations.',
        'Uses builtin Django template engine to server render the pages for the frontend. ',
        'Uses builtin Django sqllite database to store information.'
      ]
    },
    {
      preview:"/images/projects/instacart.png",
      name:'Instacart-clone',
      techUsed:['Reactjs','Tailwind Css'],
      description:[
        'A simple frontend clone of the website Instacart.com made responsive for both desktop and mobile',
        'Used TailwindCss for the styling.'
      ]
    }
  ]
  return (
    <section>
        <h1 className='title'>
            Projects
        </h1>
        <div>
          {projects.map(project=>
            <ProjectCard key={project.name} project={project} />
            )}
        </div>
    </section>
  )
}

export default Projects 