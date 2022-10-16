import React from 'react'

type Props = {}

const Contact = (props: Props) => {
    const formFields=[
        {
            type:'text',
            name:'name',
            desc:'Your name'
        },
        {
            type:'email',
            name:'email',
            desc:'Email'
        },
        {
            type:'text',
            name:'subject',
            desc:'Subject'
        }
    ]
  return (
    <section>
        <h1 className='title'>Contact</h1>
        <form action="#"
        className='space-y-10 max-w-lg mx-auto'
        >
        {formFields.map(fields=>
        <div>
            <label htmlFor={fields.name}>
                <input placeholder={fields.desc} type={fields.type} name={fields.name} id={fields.name}
                className='p-2 bg-black styledBorderb border-2 rounded-md border-transparent w-full text-sm'
                />
            </label>
        </div>
        )}
        <div>
            <label htmlFor="message">
                <textarea placeholder='Message' id='message' name='message'
                className='p-2 bg-black styledBorderb border-2 rounded-md border-transparent w-full' />
            </label>
        </div>
        <div className='w-full flex justify-center'>
            <input value='Submit' type='submit' 
            className='mx-auto cursor-pointer py-1 px-3 rounded-lg styledBorderb border-2 border-transparent'/>
        </div>
        </form>
    </section>
  )
}

export default Contact