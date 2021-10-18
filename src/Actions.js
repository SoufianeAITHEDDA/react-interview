export const affiche = () => {
    return {
      type : 'affiche'
    };
    };
    

    export const getResponse = (response) => {
        return {
          type: 'GET_MOVIES',
          movies: response.movies,
          categories: response.cate
        }
      }
          
export const likes = (id) => {
    return {
      type : 'like',
      id : id
    };
    };

export const dislike = (id) => {
      console.log(id)
      return {
        type : 'dislike',
        id : id
      };
      };

export const delette = (id) => {
        console.log(id)
        return {
          type : 'delette',
          id : id
        };
        };


  export const getSelectededCategory = (list) => {
          return {
            type : 'Category',
            payload : list
          };
          };



  export const changepage = (nombre) => {
    return {
      type : 'changepage',
      payload : nombre
    };
  };


  export const getNombre_element = (response) => {
        return {
              type : 'Nombre_element',
              payload : response
            };
            };


    
  export const element_parpage = (response) => {
        return {
                    type : 'elem_by_page',
                    payload : response
                  };
                  }; 

  export const recordPerPage = (response) => {

    return {

      type :'recordPerPage',
      payload : response
    }
  }