import { RepositoryItems } from "./RepositoryItems";
import {useState, useEffect} from 'react';
import '../styles/repositorys.scss';

interface Repository{
  name: string;
  description: string;
  url: string;
}
  

export function RepositoryList() {
  const[repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(()=>{
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response=>response.json())
    .then(data=>setRepositories(data))
  },[]);
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository =>{
          return<RepositoryItems key= {repository.name} repository={repository}/>
        })}
        </ul>
    </section>
  );
}
