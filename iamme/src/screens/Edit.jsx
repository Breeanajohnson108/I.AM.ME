import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Title from '../components/Title'
import { destroyAffirmation } from '../services/affirmations'
import { getOneAffirmation } from '../services/affirmations'
import {updateAffirmation} from '../services/affirmations'

export default function Edit(props) {
  const history = useHistory()
  const [affirmation, setAffirmation] = useState({
    affirmations:""
  })
  const {setAllAffirmations}=props
  const [isUpdated, setUpdated] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    const fetchAffirmation = async () => {
      const affirmation = await getOneAffirmation(id);
      setAffirmation(affirmation);
    };
    fetchAffirmation();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAffirmation({
      ...affirmation,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updateAffirmation(id, affirmation);
    setAllAffirmations(prevState => (prevState.map(aff => {
      return aff.id === parseInt(id) ? updated : aff
    })))
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/myaffirmations`} />;
  }

  return (
    <div>
      <Header />
      <Title />
      <p id="aTitle">View/Edit Affirmation</p>
      <Link id="eBack" to='/MyAffirmations'>Go Back</Link>
      <form id="eForm" onSubmit={handleSubmit}>
        <textarea rows="8" cols="50" name="affirmations" value={affirmation.affirmations} onChange={handleChange}></textarea>
        <br></br>
        <button type='submit' id="eSave">Save</button>
        <button onClick={() => {
          destroyAffirmation(id)
          setAllAffirmations(prevState => prevState.filter(aff => aff.id !== parseInt(id)))
          history.push('/myaffirmations')
        }} id="eDelete">Delete</button>
      </form>
      <Footer />
    </div>
  )
}
