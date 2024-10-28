import Parse from 'parse/dist/parse.min.js';
       

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'gP4FXe8g4TGqobelhZpaTPK4GJUVijNv5P4WQt9P', // This is your Application ID
  'N5Dva1PBFK6WSSfT9PdoRpQlhE90pijiwyKKnmMh', // This is your Javascript key
  'wC4Q6pYfRMMC5lznBQ2rc2BmleXkJ0RiMFdM2Yna' // This is your Master key (never use it in the frontend)
);

Parse.liveQueryServerURL = '';  // Isso desativa o LiveQuery


export default Parse;
