import React from 'react';
import './List.css';
import PropTypes from 'prop-types';
import Clock from './Clock/Clock';

export default function List({ watches, onDelete }) {
   return (
      <div className="Watches-List">
         {watches.map((watch) => (
            <Clock
               name={watch.name}
               timeZone={Number(watch.timeZone)}
               onDelete={() => onDelete(watch.id)}
               id={watch.id}
               key={watch.id}
            />
         ))}
      </div>
   );
}

List.defaultProps = {
   watches: [],
};

List.propTypes = {
   watches: PropTypes.arrayOf(PropTypes.object),
   onDelete: PropTypes.func.isRequired,
};
