import projectAPI from './api/project';
import { BlogMainLoader, BlogDetailLoader } from './hoc/dataLoader'

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
    element: <div>
    <BlogMainLoader />
    <span>Project Main</span>
    </div>,
  },
  {
    path: '/blog/:blog_id',
    element: <div>
      <BlogDetailLoader />
      <span>Blog Detail</span>
    </div>
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
