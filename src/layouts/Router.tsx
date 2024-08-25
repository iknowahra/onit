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

  useEffect(() => {
    const pathName = branch < 0 ? "" : information[branch].path;
    const targetPath = branch < 0 ? '/' : `/branch/${pathName}`;
    if (location.pathname !== targetPath) {
      router(targetPath);
    }
  }, [branch, router])

  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* component 대신 element 사용하고 JSX로 전달 */}
      <Route path="/branch/:branchNo" element={<Branch />} />
      <Route path="*" element={<Navigate to="/" />} /> {/* Redirect 대신 Navigate 사용 */}
    </Routes>
  );
}

export default AppRouter;
