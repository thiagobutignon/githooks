import React, { useState, useEffect } from "react";

export default function Github() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function getRepositories() {
      const response = await fetch(
        "https://api.github.com/users/thiagobutignon/repos"
      );
      const data = await response.json();
      setRepositories(data);
    }
    getRepositories();
  }, []);

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);

    document.title = `Você têm ${filtered.length} favoritos`;
  }, [repositories]);

  function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
    });

    setRepositories(newRepositories);
  }
  function showRepositorieOwner() {
    const repos = repositories;
    const owner = repos.map(repo => repo.owner.login);

    return owner[0];
  }
  return (
    <>
      <h1>Você está no repositório de: {showRepositorieOwner()}</h1>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>
            {repo.name}
            {repo.favorite && <span> Favorito</span>}
            <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
          </li>
        ))}
      </ul>
    </>
  );
}
