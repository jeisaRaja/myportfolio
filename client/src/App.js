import AboutComponent from './AboutComponent';
import ProjectComponent from './ProjectComponent';


function App() {
  return (
    <div className="w-full p-8 lg:px-[10%] xl:px-[15%]  lg:gap-10 flex flex-col lg:flex-row bg-slate-100 min-h-screen">
      <AboutComponent/>
      <ProjectComponent/>
    </div>
  );
}

export default App;
