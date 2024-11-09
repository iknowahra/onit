import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
  Navigate
} from 'react-router-dom';

import Home from './Home';
import Branch from './Branch';
import { useBranch } from '../contexts/BranchContext';
import information from '../assets/text/information';

function AppRouter() {
  const router = useNavigate();
  const location = useLocation();
  const [branch, _] = useBranch();

  // useEffect(() => {
  //   try {
  //     const targetPath = branch !== '/' ? `/branch/${branch}` : '/';
  //     if (location.pathname !== targetPath) {
  //       router(targetPath);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, [branch])

  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* component 대신 element 사용하고 JSX로 전달 */}
      <Route path="/branch/:branchNo" element={<Branch />} />
      <Route path="*" element={<Navigate to="/" />} /> {/* Redirect 대신 Navigate 사용 */}
    </Routes>
  );
}

export default AppRouter;
