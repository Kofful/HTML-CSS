// let events = [
//     {
//         id: 1,
//         name: "firstEvent",
//         startDate: "11/29/2018"
//     },
//     {
//         id: 2,
//         name: "secondEvent",
//         startDate: "11/28/2018"
//     },
//     {
//         id: 3,
//         name: "thirdEvent",
//         startDate:"11/28/2018"
//     }
// ];
// function findByDate(date) {
//     let result = [];
//     for (let i = 0; i < events.length; i++) {
//         console.log(date.format("MMM Do YY"));
//         console.log(moment(new Date(events[i].startDate)).format("MMM Do YY"));
//         if (date.format("MMM Do YY") === moment(new Date(events[i].startDate)).format("MMM Do YY")) {
//             if (!result[date.format("MMM Do YY")]) {
//                 result[date.format("MMM Do YY")] = [];
//             }
//             result[date.format("MMM Do YY")].push(events[i]);
//         }
//     }
//     return result;
// }
// console.log(findByDate(moment(new Date("11/28/2018"))));

let user={
    firstName:"",
    lastName:"",
    age:-1,
    email:"",
    address:{
        city:"zp",
        street:"Soborniy"
    }
};
function changeUser({address:{city}})
{
    console.log(city);
}
changeUser(user);
console.log(user);
