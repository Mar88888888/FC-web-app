let dbProductEmul = [
    {
        id: 0,
        price: 150,
        name: "glass",
        weight: 0.5,
    },
    {
        id: 1,
        price: 15,
        name: "Banana",
        weight: 0.2,
    },
    {
        id: 2,
        price: 1500,
        name: "Boots",
        weight: 1,
    },
    {
        id: 3,
        price: 500,
        name: "USB stick",
        weight: 0.1,
    },
    {
        id: 4,
        price: 100,
        name: "Shorts",
        weight: 0.3,
    },
];

function getProductDetails(productId, successCallback, errorCallback){
    try{
        productId = Number(productId);
        if(isNaN(productId)){
            throw new Error('Product id must be a number')
        }
        let product = dbProductEmul.find(prod=> prod.id === productId);
        if(product === undefined){
            throw new Error('Product not found');
        }
        successCallback(product);
    }catch(err){
        errorCallback(err.message);
    }
}

let id = Number(prompt('Input product Id', ));

getProductDetails(id, product=> console.log(...(Object.values(product))), msg => alert(msg));