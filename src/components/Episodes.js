import React from 'react';
import parse from 'html-react-parser';

// you must test the Episodes.js component
// episodes gets passed in and is in props 

export default function Episodes(props) {
  return (
    <div className="episodes">
      {props.episodes.map(e => (
        <div className="episode" key={e.id}>
          {e.image && (
            <img className="episode-image" src={e.image.medium} alt={e.name} />
          )}
          <div className="episode-info">
            <p className="episode-number">
              Season {e.season}, Episode {e.number}
            </p>
            <h3>{e.name}</h3>
            {e.summary && parse(e.summary)}
            <div className="flex-spacer" />
            <p className="episode-runtime">{e.runtime} minutes</p>
          </div>
        </div>
      ))}
    </div>
  );
}
