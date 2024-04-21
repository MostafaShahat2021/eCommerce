import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//layouts
import MainLayout from '@layouts/MainLayout/MainLayout';

//pages
import Home from '@pages/Home';
import Categories from '@pages/Categories';
import Products from '@pages/Products';
import AboutUs from '@pages/AboutUs';
import Login from '@pages/Login';
import Regester from '@pages/Regester';
import Error from '@pages/Error';
import Cart from '@pages/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'categories',
        element: <Categories />,
      },
      {
        path: 'categories/products/:prefix',
        element: <Products />,
        loader: ({ params }) => {
          if (
            typeof params.prefix !== 'string' ||
            !/^[a-z]+$/.test(params.prefix)
          ) {
            throw new Response('Bad Request', {
              statusText: 'Category not found',
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'regester',
        element: <Regester />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
