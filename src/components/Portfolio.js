import React from 'react';
import Toolbar from './Toolbar.js';
import ProjectList from './ProjectList.js';
import data from '../portfolio.js';
import { useState } from 'react';

export default function Portfolio() {
  const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
  const [selected, setSelected] = useState('All');
  const onSelectFilter = (filter) => {
    setSelected(() => filter);
  };

  return (
    <div className="portfolio">
      <Toolbar filters={filters} selected={selected} onSelectFilter={onSelectFilter} />
      <ProjectList selected={selected} projects={data()} />
    </div>
  );
}
