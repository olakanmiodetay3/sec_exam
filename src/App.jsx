
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import  Root from "./routes/root";
import Counter from "./routes/counter"

function App() {

  //initialization of the router
  const router=createBrowserRouter([
    {
    // home page initialization
    path: "/",
    element:<Root/>,
    ///errorElement:<h1>404 page</h1>
  },
  {
    // counter page initialization
    path:"/counter",
    element:<Counter/>
  },

  {
    // error page initialization
    path:"*",
    element:<h1>404 page,  provide valid url </h1>,
    
  },
]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
