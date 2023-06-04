import React from 'react';
import yelpcamp from './img/yelpcamp.png'
import mymo from './img/mymo.png'
import snippetbox from './img/snippetbox.png'
const ProjectCard = () => {
  return ( 
    <>
    <div className='flex flex-col gap-2 lg:p-5 border-solid lg:border-[1px] border-black mb-[20px]'>
      <img
      alt='mymo'
      src={mymo}
      className='shadow-md'
      />
      <h1 className='font-bold'> MyMo <small className='font-thin text-slate-800'>Ongoing</small></h1>
      <a href='https://github.com/jeisaRaja/MyMo' className='underline text-[0.9rem] text-blue-600'>Github</a>
      <p className='text-[0.9rem]'>The ultimate movie hub that caters to all your movie needs. Whether you're a dedicated film buff or just looking for your next great watch, MyMo offers a comprehensive range of functionalities to enhance your movie experience.</p>
      <div className='flex flex-row gap-2'>
        <span className='px-4 py-1 bg-slate-200 text-sm'>Node.js</span>
        <span className='px-4 py-1 bg-slate-200 text-sm'>Next.js</span>
        <span className='px-4 py-1 bg-slate-200 text-sm'>MongoDB</span>
      </div>
    </div>
    <div className='flex flex-col gap-2 lg:p-5 border-solid lg:border-[1px] border-black mb-[20px]'>
      <img
      alt='yelpcamp'
      src={yelpcamp}
      className='shadow-md '
      />
      <h1 className='font-bold'>Yelpcamp</h1>
      <span>
      <a href='https://githhttps://yelpcamp-production-626d.up.railway.app/campground' className='underline text-[0.9rem] text-blue-600 mr-2'>Live Demo</a>
      <a href='https://github.com/jeisaRaja/Yelpcamp' className='underline text-[0.9rem] text-blue-600'>Github</a>
      </span>
      <p className='text-[0.9rem]'>For camping enthusiasts to discover, share, and review their favorite camping spots.</p>
      <div className='flex flex-row gap-2'>
        <span className='px-4 py-1 bg-slate-200 text-sm'>Node.js</span>
        <span className='px-4 py-1 bg-slate-200 text-sm'>MongoDB</span>
      </div>
    </div>
    <div className='flex flex-col gap-2 lg:p-5 border-solid lg:border-[1px] border-black'>
      <img
      alt='snippetbox'
      src={snippetbox}
      className='shadow-md '
      />
      <h1 className='font-bold'>SnippetBox</h1>
      <span>
      <a href='https://letsgo-production.up.railway.app/' className='underline text-[0.9rem] text-blue-600 mr-2'>Live Demo</a>
      <a href='https://github.com/jeisaRaja/snippetbox' className='underline text-[0.9rem] text-blue-600'>Github</a>
      </span>
      <p className='text-[0.9rem]'>SnippetBox is a web project that serves as a platform for sharing and storing text-based snippets of code or any other form of plain text.</p>
      <div className='flex flex-row gap-2'>
        <span className='px-4 py-1 bg-slate-200 text-sm'>Golang</span>
        <span className='px-4 py-1 bg-slate-200 text-sm'>MySQL</span>
      </div>
    </div>
    </>
  );
}
 
export default ProjectCard;