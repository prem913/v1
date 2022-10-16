import React from 'react'
import Projects from './Projects';

export type ProjectType = {
  preview:string;
  name:string;
  techUsed:string[];
  description:string[];
}

const ProjectCard = (props:{project:ProjectType}) => {
  const {project}=props
  return (
    <div className=' text-textDark md:grid md:grid-cols-2 items-center p-2 my-8 rounded-md border-2 border-transparent styledBorderrb
    '>
      <img src={project.preview}
           alt={project.name}
           className=' max-w-[90%] mx-auto h-auto my-8 rounded-md'
           />
      <div className='h-full'>
        <div>
        <h2 className='title before:w-4 before:bg-textWhite text-xl text-white my-2'>{project.name}</h2>
        <div>
        <h3 className='inline-block'>Technologies Used: </h3>
        {project.techUsed.map(tech=>
        <p key={tech} className='inline-block text-textBlue mx-2'>{tech}</p>
        )}
        </div>
        {project.description.map(p=>
        <div key={p} className='my-4 space-y-3'>
          <p className='bullet'>
            {p}
          </p>
        </div>
        )}
      </div>
      </div>
    </div>
  )
}

export default ProjectCard