import React, { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import './CountryCard.css';

// Mapping for country-specific titles
const countryTitles = {
  India: "The Land of Spices",
  China: "The Red Dragon",
  Japan: "The Land of Rising Sun",
  Russia: "The Mother Land",
  Australia: "The Land Down Under",
  UK: "The Old Blighty",
  USA: "The Land of Opportunity",
  Ireland: "The Emerald Isle"
};

const CountryCard = ({ country }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  // Get the title based on the country name
  const countryTitle = countryTitles[country.name] || '';

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-front">
        <ReactCountryFlag
          countryCode={country.code}
          svg
          style={{
            width: '6em',
            height: '6em',
            marginBottom: '10px'
          }}
          title={country.name}
        />
        <h2>{country.name}</h2>
        {countryTitle && <p className="country-title"><b className='cardtitles'>{countryTitle}</b></p>} {/* Display the title if available */}
      </div>
      <div className="card-back">
        <div className="info">
          <h2>Academic Reputation</h2>
          <p><b>QS World Ranking : </b>{country.academic_reputation.university_rankings.QS_World_Ranking}</p>
          <p><b>Times Higher Education : </b>{country.academic_reputation.university_rankings.Times_Higher_Education}</p>
          <p><b>Accreditation : </b>{country.academic_reputation.accreditation}</p>
        </div>
        <div className="info">
          <h2>Cost of Education</h2>
          <p><b>Tuition Fees : </b>{country.cost_of_education.tuition_fees}</p>
        </div>
        <div className="info">
          <h2>Living Expenses</h2>
          <p><b>Cost of Living : </b>{country.living_expenses.cost_of_living}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
