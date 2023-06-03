import github from './img/GitHub.png'
import linkedin from './img/linkedin.png'

const AboutComponent = () => {
  return ( 
    <div className="w-full lg:w-[40%] p-5 lg:p-8 border-solid ">
      <h1 className="text-[1.3rem] font-sans font-bold mt-[100px]">Hello👋, I'm</h1>
      <h2 className="text-[3rem] font-serif font-bold">Jeisa Tarigan</h2>
      <p className="text-[1.03rem]">
        Industrial engineering student at ITB 
        <br/>
        Web development enthusiast
      </p>
      <div className='flex flex-row'>
        <a href='https://www.linkedin.com/in/jeisatarigan/'><img src={linkedin} alt='linkedin' className='w-7 h-7 mt-[10px]'/></a>
        <a href='https://github.com/jeisaRaja'><img src={github} alt='github' className='w-9 h-9 mt-[6px] ml-[5px]'/></a>
      </div>
    </div>
   );
}
 
export default AboutComponent;