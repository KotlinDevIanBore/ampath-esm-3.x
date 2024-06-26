import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from './root.component';
import ClinicalDashboardComponent from './clinical-dashboard/clinical-dashboard.component';
import DynamicReportLoader from './reports-dashboard/report-loader/dynamic-report-loader-component';

const RootComponent: React.FC = () => {
  const basename = window.getOpenmrsSpaBase() + 'home';

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/reports" element={<Root />} />
        <Route path="/reports/:reportUuid" element={<DynamicReportLoader />} />
        <Route path="/clinical-dashboard" element={<ClinicalDashboardComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootComponent;
