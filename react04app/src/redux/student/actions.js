const actions = {
   GET_ALL_STUDENTS_REQUEST:'GET_ALL_STUDENTS_REQUEST',
   GET_ALL_STUDENTS_REQUEST:'GET_ALL_STUDENTS_REQUEST_SUCCESS',
   GET_ALL_STUDENTS_REQUEST:'GET_ALL_STUDENTS_REQUEST_ERROR',
   
   // action creator - functions that exist to return a plain objects
   getAllStudents: () => ({
     type: actions.GET_ALL_STUDENTS_REQUEST
   })
}
 
export default actions;