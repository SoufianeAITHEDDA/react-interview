import {React,useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react';
import { getSelectededCategory, changepage,getNombre_element } from "./Actions";





export const selected  = [];


const Search = () => {

  const dispatch = useDispatch();
  const [selected, setSelected] = useState([]);
  const categories = useSelector((state) => state.data.categories)
  const options = []
  categories.map((cat)=>options.push({label:cat,value:cat}))
  const search = useSelector((state) => state.data.selected)
  const affiche = useSelector((state) => state.data.movies)
 

  useEffect (() =>{
    dispatch(getSelectededCategory(selected))
    dispatch(changepage(0))
   
  },
  [selected]
  )


  useEffect (() =>{
    dispatch(getSelectededCategory(selected))
    dispatch(changepage(0))
  if (search.length != 0 ) {dispatch(getNombre_element(search.length))} 
        else{dispatch(getNombre_element(affiche.length))}
  },
  [search.length]
  )

  
  

 

  return (
    <div className="search">
      <h1>Select Categories</h1>
      <MultiSelect
        options={options}
        value={selected}
        onChange= {setSelected}
  
        labelledBy="Select"
      />
    </div>
  );
};

export default Search;