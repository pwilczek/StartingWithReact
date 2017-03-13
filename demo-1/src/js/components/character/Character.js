import React from "react";

export default class Character extends React.Component {
  render() {
    const {
      name, height, mass, hair_color, skin_color,
      eye_color, birth_year, gender
    } = this.props;
    
    return (
      <li>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">{name}</h3>
          </div>
          <div class="panel-body">
            <div>Height: {height}</div>
            <div>Mass: {mass}</div>
            <div>Hair Color: {hair_color}</div>
            <div>Skin Color: {skin_color}</div>
            <div>Eye Color: {eye_color}</div>
            <div>Birth Year: {birth_year}</div>
            <div>Gender: {gender}</div>
          </div>
        </div>
      </li>  
    );
  }
}