import React, { useState } from "react";
import { Link } from "react-router-dom";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "./Home.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false; 

const Home = () => {
  const [data, setData] = useState([
    { id: 1, proprietaire: 'user1', categorie: 'A',marque:'Toyota', etat: 'tsara' },
    { id: 2, proprietaire: 'user2', categorie: 'B', marque:'Nissan',etat: 'neuf' },
  ]);

  const handleSave = (id) => {
    console.log(`Enregistrer la ligne avec l'ID ${id}`);
  };

  const handleDelete = (id) => {
    // Implémentez la logique pour la suppression ici
    setData(data.filter(item => item.id !== id));
  };

  return (
    <div className="container">
      <h1 className="heading">Listes des annonces</h1>
    <table>
      <thead>
        <tr>
          <th>Proprietaire</th>
          <th>Categorie</th>
          <th>Etat</th>
          <th>Marque</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.proprietaire}</td>
            <td>{row.categorie}</td>
            <td>{row.etat}</td>
            <td>{row.marque}</td>
            <td>
              <button onClick={() => handleSave(row.id)}>Valider</button>
              <button onClick={() => handleDelete(row.id)}>Supprimer</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};
export default Home;
