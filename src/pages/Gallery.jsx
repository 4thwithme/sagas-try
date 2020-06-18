import React, { useState } from "react";
import Select from "react-select";
import { connect } from "react-redux";

import { convertForReactSelectFormat } from "../utils";

import PhotoCard from "./components/PhotoCard";
import { getRoverPhotos } from "../redux/ducks/rovers";

const options = ["Curiosity", "Opportunity", "Spirit"];

const Gallery = ({ photos, getRoverPhotos }) => {
  const formatedOptions = convertForReactSelectFormat(options);

  const [rover, setRover] = useState(formatedOptions[0]);
  const [sol, setSol] = useState("1");
  const [page, setPage] = useState("1");

  const handleFetch = (e) => {
    e.preventDefault();
    getRoverPhotos(rover.value, page, sol);
  };

  return (
    <form className='gallery'>
      <div className='control'>
        <div>
          <span>select rover</span>
          <Select
            className='rover__wrap'
            classNamePrefix='rover'
            value={rover}
            onChange={(val) => setRover(val)}
            isSearchable
            name='rover'
            options={formatedOptions}
          />
        </div>

        <div>
          <span>sol</span>
          <input
            type='text'
            value={sol}
            onChange={(e) => Number.isInteger(+e.target.value) && setSol(e.target.value)}
          />
        </div>

        <div>
          <span>page</span>
          <input
            type='text'
            value={page}
            onChange={(e) => Number.isInteger(+e.target.value) && setPage(e.target.value)}
          />
        </div>

        <button onClick={handleFetch}>Fetch</button>
      </div>

      {photos ? (
        <ul className='rover-photo-list'>
          {photos.map((photo) => {
            return (
              <li key={photo.id}>
                <PhotoCard photo={photo} />
              </li>
            );
          })}
        </ul>
      ) : null}
    </form>
  );
};

const mapStateToProps = (state) => ({
  photos: state.rovers
});

const mapDispatchToProps = {
  getRoverPhotos
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
