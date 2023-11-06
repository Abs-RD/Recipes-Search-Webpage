import React from "react";
import { SearchBar } from './SearchBar';
import { BackToTop } from './BackToTop';
import '../index.css';

const Recipes = () => {
    return (
        <div>
          <SearchBar />
          {/* adding the BackToTop component */}
          <BackToTop /> 
        </div>
      )
    }
  
export default Recipes;
