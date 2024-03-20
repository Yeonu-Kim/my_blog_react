import projectAPI from './api/project';
import { BlogPage } from './components/blog/Blog';
import { BlogDetailPage } from './components/blog/BlogDetail';

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
    element: <BlogPage />,
  },
  {
    path: '/blog/:blog_id',
    element: <BlogDetailPage />
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
