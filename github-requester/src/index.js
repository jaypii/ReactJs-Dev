import React, { useContext, useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import isEqual from "lodash.isequal";

const GitHubContext = React.createContext();

const GitHubProvider = ({ children }) => {
   const [repos, updateRepos] = useReducer((acc, cur) => acc.concat(cur), []);

   useEffect(
      () => {
         fetch("https://api.github.com/users/jaypii/repos")
            .then(res => res.json())
            .then(data =>
               data.map(({ id, name, html_url: url }, i) => {
               setTimeout(() => {
                  updateRepos({ id, name, url });
               }, i * 200);
            })
         );
      },
      [isEqual(repos)]
   );

   return (
      <GitHubContext.Provider value={repos}>{children}</GitHubContext.Provider>
   );
};

function App() {
   const repos = useContext(GitHubContext);

   const RepositoryList = repos.map(({ id, name, url }) => (
      <div className="list-group" key={id}>
         <a className="list-group-item list-group-item-action mt-1" href={url} target='blank'>{name}</a>
      </div>
   ));

   return <div className="card mt-2 p-2">{RepositoryList}</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <GitHubProvider>
    <App />
  </GitHubProvider>,
  rootElement
);