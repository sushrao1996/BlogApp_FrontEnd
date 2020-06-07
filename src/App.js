import React, { useState } from "react";
import routes from "./routes/routes";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import { UserContext } from "./context/UserContext";
import PostPage from "./pages/PostPage";
import Authors from "./pages/Authors";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import NewPost from "./pages/NewPost";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from "./config/firebaseConfig";
// firebase.initializeApp(firebaseConfig);
const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path={routes.home} component={Home} /> */}
          <Route exact path={routes.authors} component={Authors} />
          <Route exact path={routes.newPost} component={NewPost} />
          <Route exact path={routes.post} component={PostPage} />
          <Route path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
