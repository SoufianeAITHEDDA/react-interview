

let initialstate  = {
   recordPerPage: 2,
   totalRecords: 10,
   pageRange: 5,
   pageActuel: 0,
}

var a = 5

function paginateRed (state = initialstate , action){
  switch (action.type) {
    case 'Nombre_element' : 
    a = action.payload/state.recordPerPage;
    return {...state , 
           totalRecords : action.payload,
            pageRange: a-Math.trunc(a)>0? Math.trunc(a)+1 : a
                }
    case 'elem_by_page' : 
    a = state.totalRecords/action.payload;
    if (a===0) a=1
    return {...state, 
    recordPerPage : action.payload,
    pageRange: a-Math.trunc(a)>0? Math.trunc(a)+1 : a,
  }
    case'changepage' : 
    return {...state, 
      pageActuel: action.payload}
    default : 
    return state
  
  }
}

 

export default paginateRed;