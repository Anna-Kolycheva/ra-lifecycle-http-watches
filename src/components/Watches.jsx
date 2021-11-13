import React, { useState } from 'react';
import { v4 } from 'uuid';
import Form from './Form/Form';
import List from './List/List';

const INITIAL_TIMES = [
   {
      id: v4(),
      name: 'США',
      timeZone: '-5',
   },
   {
      id: v4(),
      name: 'Москва',
      timeZone: '3',
   },
   {
      id: v4(),
      name: 'Берлин',
      timeZone: '2',
   },
];

export default function Watches() {
   const [watches, setWatch] = useState(INITIAL_TIMES);

   const onAddwatch = (watch) => {
      setWatch((prev) => [
         ...prev,
         {
            ...watch,
            id: v4(),
         },
      ]);
   };

   const onDelete = (id) => {
      setWatch(() => watches.filter((el) => el.id !== id));
   };

   return (
      <div className="Watches">
         <Form onAdd={onAddwatch} />
         <List watches={watches} onDelete={onDelete} />
      </div>
   );
}
