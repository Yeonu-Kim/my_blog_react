import projectAPI from './api/project';
import blogAPI from './api/blog';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello World!</div>
  },
  {
    path: '/project',
    element: <div>Project Main</div>,
  },
  {
    path: '/project/:id',
    element: <div>Project Detail</div>
  },
  {
    path: '/blog',
    element: <div>Blog Main</div>,
  },
  {
    path: '/blog/:id',
    element: <div>Blog Detail</div>
  }
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
