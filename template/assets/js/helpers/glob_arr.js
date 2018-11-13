'use strict';
/*
* assets/js/helpers/glob_arr.js
*/
function globArr(){
  glob( 'arr', 'reservations' , [
    //id, timestamp, guest, persons, table, arrangement, comments
    { id : 23456, timestamp : '2018-11-22T10:35:06', guest : 'Berry Edwards', persons : 5, table : 3, arrangement : 0, comments : ''},
    { id : 23457, timestamp : '2018-11-23T18:35:05', guest : 'John Hope', persons : 5, table : 9, arrangement : 0, comments : ''},
    { id : 23458, timestamp : '2018-11-24T15:35:04', guest : 'Pete Johnson', persons : 5, table : 26, arrangement : 0, comments : ''},
    { id : 23459, timestamp : '2018-11-25T12:32:03', guest : 'Tom Bender', persons : 5, table : 32, arrangement : 0, comments : ''},
    { id : 23450, timestamp : '2018-11-26T11:30:02', guest : 'Paul Davy', persons : 5, table : 2, arrangement : 0, comments : ''}
  ] );


  glob( 'arr', 'tables' , [
    //id, chairs, reservation, guest, wheelchair
    {id : 1, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 2, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 3, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 4, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 5, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 6, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 7, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 8, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 9, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 10, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 11, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 12, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 13, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 14, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 15, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 16, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 17, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 18, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 19, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 20, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 21, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 22, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 23, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 24, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 25, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 26, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 27, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 28, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 29, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
    {id : 30, chairs : 4, reservation : 0, guest: 0, order : 0, wheelchair: false },
  ] );


  glob( 'arr', 'orders' , [
    //id, guest, order, date, invoice, menuitems
  ] );


  glob( 'arr', 'invoices' , [
      // id, order, guest, amount, menuitems
  ] );


  glob( 'arr', 'guests' , [
    // id, firstname, preposition, lastname, email, telephone, country
    { id : 84356, firstname : '', preposition : '', lastname : '', email : '', telephone : '', country : '' }
  ] );
}
