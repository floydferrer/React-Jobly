import React from 'react';
import { BrowserRouter } from "react-router-dom";
import PageNav from './PageNav';
import Companies from './Companies';
import { Route } from "react-router-dom";
import useItems from "./hooks/useItems";
import './App.css';

function App() {
  const [companies, setCompanies, companiesIsLoading, setCompaniesIsLoading] = useItems('companies');
  const [jobs, setJobs, jobsIsLoading, setJobsIsLoading] = useItems('jobs');

  if (companiesIsLoading /*|| jobsIsLoading*/) {
    return <p>Loading &hellip;</p>;
  }  
  return (
    <div className="App">
      <BrowserRouter>
        <PageNav />
        <Route exact path="/companies">
          <Companies companies={companies} title="Companies" />
        </Route>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
