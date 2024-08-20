import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';

import Home from './Home';
import Branch from './Branch';
import { useBranch } from '../contexts/BranchContext';
import information from '../assets/text/information';

function AppRouter() {
  const router = useHistory();
  const location = useLocation();
  const [branch, _] = useBranch();

  useEffect(() => {
    console.log("routerdddddddd")
    const pathName = branch < 0 ? "" : information[branch].path;
    const targetPath = branch < 0 ? '/' : `/branch/${pathName}`;
    if (location.pathname !== targetPath) {
      router.push(targetPath);
    }
  }, [branch, router])

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/branch/:branchNo" component={Branch} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default AppRouter;
