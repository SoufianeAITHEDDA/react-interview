

let initialstate = {
  movies: [],
  categories: [],
  selected: []
  
}  
  
  function ReducerM (state = initialstate , action){
     switch (action.type) {
            case 'GET_MOVIES': 

             return {
               ...state,
               categories:action.categories,
               movies:action.movies
             }
               
            case 'like' : 
            return {
            ...state,
           movies: state.movies.map(todo => todo.id !== action.id? todo : {...todo,likes: todo.likes+1}
      
        ),
        selected: state.selected.map(todo => {
          if (todo.id !== action.id) {
            return todo
          }
          return {
            ...todo,
            likes: todo.likes+1
          }
      }),
    }
         case 'dislike' :
             return {
              ...state,
              movies : state.movies.map(movie => {
                if (movie.id === action.id) {
              return {...movie,
                dislikes: movie.dislikes + 1}
             }
             return movie
              }),
              selected : state.selected.map(movie => {
                if (movie.id === action.id) {
              return {...movie,
                dislikes: movie.dislikes + 1}
             }
             return movie
              })
            }
          case 'delette' :
               const cat_restante = [];
               state.movies.filter(movie => movie.id !== action.id).map(t=> cat_restante.push(t.category));
                return {
                ...state ,
                movies : state.movies.filter(movie => movie.id !== action.id),
                selected : state.selected.filter(movie => movie.id !== action.id),
                categories : state.categories.filter(cat=> cat_restante.indexOf(cat) !== -1)
              }

          case 'Category':
            const liste = []
            action.payload.map(t => liste.push(t.value))
            return {
              ...state,
              selected : state.movies.filter(movie => liste.indexOf(movie.category)!==-1),
            }

         default:
             return state
         }
        }
      
      
        
      export default ReducerM;
    
        
        