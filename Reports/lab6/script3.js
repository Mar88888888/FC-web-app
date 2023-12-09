const medicines = [
    { name:'Noshpa', price: 170 },
    { name: 'Analgin', price: 55 },
    { name: 'Quanil', price: 310 },
    { name: 'Alphacholine', price: 390 },
];

function updateMedicines(arr){
    let id = 0;
    return arr.map((medicine)=>{
        medicine.id = id;
        id++;
        if(medicine.price > 300){
            medicine.price *= 0.7;
        }
        return medicine;
    })
}

console.log(updateMedicines(medicines));