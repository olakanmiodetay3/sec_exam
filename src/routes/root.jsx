import { Link } from "react-router-dom";
 import TextError from "../TestError";
 import { ErrorBoundary } from "react-error-boundary";
 import './root.css';


 function Root(){
    return(
        <div className="container">
            <ErrorBoundary fallback={<h1 >An Error just occured</h1>}>
            <h1 id="title" className="container">This is the home page! you are welcome.</h1>

            <p className="container">kindly proceed to the <Link to="/counter" className="error-link">counter App</Link> - my second semester project in order to explore how it works</p>

          <TextError/>  

            <p className="container">You can explore our 404 page by clicking on the link below</p>

            <Link to="/does not exist" className="error-link">Explore 404 page</Link>
            </ErrorBoundary>

    
        </div>
    );
};

export default Root;