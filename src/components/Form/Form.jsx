/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './Form.css';
import PropTypes from 'prop-types';

const INITIONAL_FORM_STATE = {
   name: '',
   timeZone: '',
};

export default function Form({ onAdd }) {
   const [form, setForm] = useState(INITIONAL_FORM_STATE);

   const onFieldChange = (e) => {
      const { target } = e;
      setForm((prev) => ({
         ...prev,
         [target.name]: target.value,
      }));
   };

   const formatTimezone = () => {
      const zone = Number(form.timeZone);
      if (zone > 12 || zone < -12) return false;
      if (!Number.isInteger(zone)) return false;
      return true;
   };

   const onAddDistance = (e) => {
      e.preventDefault();
      const isValidTimezone = formatTimezone();
      if (!form.name || !isValidTimezone) return;
      onAdd(form);
      setForm(INITIONAL_FORM_STATE);
   };

   return (
      <form className="Watces-form">
         <div className="Watces-Field">
            <label htmlFor="name" className="label">
               Название
            </label>
            <input
               className="Watces-Control"
               id="name"
               name="name"
               value={form.name}
               min="-12"
               max="12"
               onChange={onFieldChange}
            />
         </div>

         <div className="Watces-Field">
            <label htmlFor="timeZone" className="label" required>
               Временная зона
            </label>
            <input
               type="number"
               className="Watces-Control"
               id="timeZone"
               name="timeZone"
               value={form.timeZone}
               onChange={onFieldChange}
               placeholder="0"
               required
            />
         </div>

         <button
            className="Form-button Form-Submit"
            type="submit"
            onClick={onAddDistance}
         >
            OK
         </button>
      </form>
   );
}

Form.propTypes = {
   onAdd: PropTypes.func.isRequired,
};
