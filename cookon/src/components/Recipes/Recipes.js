import React, {useState} from 'react';
import './Recipes.scss';
import Gallery from "../Gallery/Gallery"
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import AddRecipe from "./AddRecipe"

function Recipes() {
  const [openAddRecipe, toggleAddRecipe] = useState(false);


  return (
    <div>
      <Gallery />
      <IconButton aria-label="add" onClick={() => toggleAddRecipe(true)}>
        <AddIcon fontSize="large" />
      </IconButton>
      <AddRecipe selectedValue={openAddRecipe} open={openAddRecipe} onClose={toggleAddRecipe(false)} />
    </div>
  );
}

export default Recipes;
