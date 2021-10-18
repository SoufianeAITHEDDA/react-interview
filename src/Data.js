import { movies$ } from "./movies"
import { getResponse } from "./Actions"


export function getMovies() {
  var data = [];
  var categories = [];
    return function(dispatch) {
      movies$.then((response) => {
          response.forEach( resp => {if(!categories.includes(resp.category))
            { categories.push(resp.category)} }
          )
          data =  {movies:response,cate:categories}

          dispatch(getResponse(data))
        })
    }
  }

 

     