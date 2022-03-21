import { Route,Redirect } from "react-router-dom";


const PrivateRoute=({ children, ...rest }) => {
    const data = localStorage.getItem("loginUser");
    return(
        <Route 
        {...rest}
        render={()=>data ?(children) :(<Redirect to="/" />)
        }
        />
    );
};






const PublicRoute=({ children, ...rest }) => {
    const data = localStorage.getItem("loginUser");
    return(
        <Route 
        {...rest}
        render={()=>
            !data ?(children) 
            :
            (
                <Redirect to="/home" />
                )
        }
        />
    ) 
}
// const PrivateRoute = ({ children, ...rest }) => {
//     const data = localStorage.getItem("userData");
//     return (
//       <Route
//         {...rest}
//         render={() =>
//           data ? (
//             children
//           ) : (
//             <Redirect
//               to="/formscreen"
//             />
//           )
//         }
//       />
//     );
//   };
  

export  {PrivateRoute,PublicRoute};

    // <PrivateRoute exact path="/createad">
    //         <CreateAdd />
    //       </PrivateRoute>