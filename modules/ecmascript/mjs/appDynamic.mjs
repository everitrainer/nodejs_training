// appDynamic.mjs
async function loadMathModule() {
    const math = await import('./mathDynamic.mjs');
    console.log('Sum:', math.add(10, 5)); // Sum: 15
    console.log('Difference:', math.subtract(10, 5)); // Difference: 5
}

loadMathModule();
