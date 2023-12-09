const concerts = {
    'Київ': new Date('2020-04-01'),
    'Умань': new Date('2025-07-02'),
    'Вінниця': new Date('2020-04-21'),
    'Одеса': new Date('2025-03-15'),
    'Хмельницький': new Date('2020-04-18'),
    'Харків': new Date('2025-07-10'),
};

function getUpToDateConcerts(concertsObj){
    return Object.keys(concertsObj)
    .filter(city => concertsObj[city] > new Date())
    .sort((city1, city2) =>{
        if (concertsObj[city1] < concertsObj[city2]) {
            return -1;
        }
        if (concertsObj[city1] > concertsObj[city2]) {
            return 1;
        }

        return 0;
    });
}

console.log(getUpToDateConcerts(concerts));