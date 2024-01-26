import React, { useState } from "react";
import "./All.css";

const All = () => {
  const [Categorie, setCategorie] = useState([
    { id: 1, categorie: 'A' },
    { id: 2, categorie: 'B' },
  ]);
  const [Etat, setEtat] = useState([
    { id: 1, etat: 'neuf' },
    { id: 2, etat: 'bien' },
  ]);
  const [Moteur, setMoteur] = useState([
    { id: 1, moteur: 'moteur1' },
    { id: 2, moteur: 'moteur2' },
  ]);
  const [Vitesse, setVitesse] = useState([
    { id: 1, vitesse: 'Vitesse1' },
    { id: 2, vitesse: 'Vitesse2' },
  ]);
  const [Marque, setMarque] = useState([
    { id: 1, marque: 'marque1' },
    { id: 2, marque: 'marque2' },
  ]);

  const [newCategorie, setNewCategorie] = useState('');
  const [newCategorieEtat, setNewCategorieEtat] = useState('');
  const [newMoteur, setNewMoteur] = useState('');
  const [newVitesse, setNewVitesse] = useState('');
  const [newMarque, setNewMarque] = useState('');

  const handleAdd = (type) => {
    // Vérifier si le champ n'est pas vide
    if (
      (type === 'categorie' && newCategorie.trim() === '') ||
      (type === 'etat' && newCategorieEtat.trim() === '') ||
      (type === 'moteur' && newMoteur.trim() === '') ||
      (type === 'vitesse' && newVitesse.trim() === '') ||
      (type === 'marque' && newMarque.trim() === '')
    ) {
      alert('Champ vide.');
      return;
    }

    // Générer un nouvel ID
    const newId = Math.max(
      ...(type === 'categorie'
        ? Categorie
        : type === 'etat'
        ? Etat
        : type === 'moteur'
        ? Moteur
        : type === 'vitesse'
        ? Vitesse
        : Marque
      ).map((item) => item.id),
      0
    ) + 1;

    const newData =
      type === 'categorie'
        ? [...Categorie, { id: newId, categorie: newCategorie }]
        : type === 'etat'
        ? [...Etat, { id: newId, etat: newCategorieEtat }]
        : type === 'moteur'
        ? [...Moteur, { id: newId, moteur: newMoteur }]
        : type === 'vitesse'
        ? [...Vitesse, { id: newId, vitesse: newVitesse }]
        : type === 'marque'
        ? [...Marque, { id: newId, marque: newMarque }]
        : [];

    if (type === 'categorie') {
      setCategorie(newData);
      setNewCategorie('');
    } else if (type === 'etat') {
      setEtat(newData);
      setNewCategorieEtat('');
    } else if (type === 'moteur') {
      setMoteur(newData);
      setNewMoteur('');
    } else if (type === 'vitesse') {
      setVitesse(newData);
      setNewVitesse('');
    } else if (type === 'marque') {
      setMarque(newData);
      setNewMarque('');
    }
  };
  return (
    <div className="container">
      <h1 className="heading">Listes des Detais de voiture</h1>
      <div className="grid-container">
      <div id="categorie">
      <h3>Categorie</h3>
        <table>
          <thead>
            <tr>
              <th>Numero</th>
              <th>Categorie</th>
            </tr>
          </thead>
          <tbody>
            {Categorie.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.categorie}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="add-category">
          <input
            type="text"
            placeholder="Nouvelle catégorie"
            value={newCategorie}
            onChange={(e) => setNewCategorie(e.target.value)}
            className="category-input"
          />
          <button onClick={() => handleAdd('categorie')} className="add-button">
            + Ajouter
          </button>
        </div>
      </div>

      <div id="etat">
      <h3>Etat</h3>
        <table>
          <thead>
            <tr>
              <th>Numero</th>
              <th>Etat</th>
            </tr>
          </thead>
          <tbody>
            {Etat.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.etat}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="add-etat">
          <input
            type="text"
            placeholder="Nouvelle Etat"
            value={newCategorieEtat}
            onChange={(e) => setNewCategorieEtat(e.target.value)}
            className="etat-input"
          />
          <button onClick={() => handleAdd('etat')} className="add-button">
            + Ajouter
          </button>
        </div>
      </div>

      <div id="moteur">
      <h3>Moteur</h3>
        <table>
          <thead>
            <tr>
              <th>Numero</th>
              <th>Moteur</th>
            </tr>
          </thead>
          <tbody>
            {Moteur.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.moteur}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="add-moteur">
          <input
            type="text"
            placeholder="Nouveau moteur"
            value={newMoteur}
            onChange={(e) => setNewMoteur(e.target.value)}
            className="moteur-input"
          />
          <button onClick={() => handleAdd('moteur')} className="add-button">
            + Ajouter
          </button>
        </div>
      </div>

      <div id="vitesse">
      <h3>Vitesse</h3>
        <table>
          <thead>
            <tr>
              <th>Numero</th>
              <th>Vitesse</th>
            </tr>
          </thead>
          <tbody>
            {Vitesse.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.vitesse}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="add-vitesse">
          <input
            type="text"
            placeholder="Nouveau vitesse"
            value={newVitesse}
            onChange={(e) => setNewVitesse(e.target.value)}
            className="vitesse-input"
          />
          <button onClick={() => handleAdd('vitesse')} className="add-button">
            + Ajouter
          </button>
        </div>
      </div>

      <div id="marque">
      <h3>Marque</h3>
        <table>
          <thead>
            <tr>
              <th>Numero</th>
              <th>Marque</th>
            </tr>
          </thead>
          <tbody>
            {Marque.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.marque}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="add-marque">
          <input
            type="text"
            placeholder="Nouveau marque"
            value={newMarque}
            onChange={(e) => setNewMarque(e.target.value)}
            className="marque-input"
          />
          <button onClick={() => handleAdd('marque')} className="add-button">
            + Ajouter
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default All;