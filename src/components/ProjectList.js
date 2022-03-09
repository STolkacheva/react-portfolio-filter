import React from 'react';
import PropTypes from "prop-types";

export default function ProjectList({selected, projects}) {
  let resultItem = [...projects];
  if (selected !== "All") {
    resultItem = projects.filter((item) => item.category === selected);
  }

  return (
    <div className="projectlist">
       {resultItem.map((item) => (
          <img className="projectlist-item" src={item.img} alt={item.category} key={item.img}/>
       ))}
    </div>
 );
}

ProjectList.propTypes = {
    selected: PropTypes.string.isRequired,
    projects: PropTypes.arrayOf(PropTypes.object).isRequired
};