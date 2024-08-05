function canBuyCigarettes(age, money){
    const cigaretteCost = 30;

    if(age >= 18 && money >= cigaretteCost){
        return 'Yes, here are your cigarettes';
    } else {
        return 'Sorry';
    }
}

// Test the function with different ages and ammounts of money

let customer = [
    {age: 20, money: 40},
    {age: 17, money: 50},
    {age: 18, money: 25},
    {age: 19, money: 30},
    {age: 16, money: 35},
];

customer.forEach(customer => {
    console.log('Age: $(customer.age'), Money: ${customer.money}, Result: ${canBuyCigarettes(customer.age,customer.money)}'
    
})