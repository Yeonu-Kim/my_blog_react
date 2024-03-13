import projectAPI from './api/project';
import blogAPI from './api/blog';

function App() {
  projectAPI.getProjectList();
  projectAPI.getProject(5);
  blogAPI.getBlogList();
  blogAPI.getBlog(1);
  
  return (
    <div>
      <span>Hello World!</span>
    </div>
  );
}

export default App;
