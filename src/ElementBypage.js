import {React,useState } from "react";
import { useDispatch } from 'react-redux';
import {useEffect} from 'react';
import Select from "react-select"
import { element_parpage, changepage,recordPerPage } from "./Actions";





export const numbers  = [];


const RecordPerPa = () => {

    const options = [
        { value: 2, label: '2' },
        { value: 4, label: '4' },
        { value: 8, label: '8' },
        { value: 12, label: '12' } 
      ];
      const dispatch = useDispatch();

      const [selected, setSelected] = useState(2);
     

      useEffect (() =>{
        
        dispatch(element_parpage(selected.value))
        dispatch(changepage(0))
      },
      [selected]
      )

      useEffect (() =>{
        dispatch(element_parpage(2))
        dispatch(changepage(0))
      },
      []
      )
  
     
  return (
      
    <div id="App">
      <Select options = {options}
        value={selected}
        onChange={setSelected} />
    </div>
  
  )
}


        

export default RecordPerPa;