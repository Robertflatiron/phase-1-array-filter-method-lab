// Code your solution here

// const allDrivers = drivers.filter((drivers) => {
//     if (drivers === 'Bobby') {
//         return drivers
//     }
// })
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function fuzzyMatch(array, searchTerm) {
    return array.filter(function(arrayElement) {
        return arrayElement.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0
    })
}