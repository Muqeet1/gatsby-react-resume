import React from 'react';
import '../main.css'

const Progress = ({ percent, name }) => (
  <div className="shadow w-full bg-neutral-200 rounded overflow-hidden mb-2">
    <div
      className="bg-clr text-sm py-1 text-white font-bold"
      style={{ width: `${percent}%` }}
    >
      <span className="pl-2">{name}</span>
    </div>
  </div>
);

export default Progress;
