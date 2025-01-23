function carFactory(order) {
    // Define available engines
    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];

    // Find the smallest engine that meets the required power
    const selectedEngine = engines.find(engine => engine.power >= order.power);

    // Define the carriage
    const carriage = {
        type: order.carriage,
        color: order.color
    };

    // Calculate the wheel size
    let wheelSize = order.wheelsize % 2 === 0 ? order.wheelsize - 1 : order.wheelsize;
    const wheels = Array(4).fill(wheelSize);

    // Return the assembled car
    return {
        model: order.model,
        engine: selectedEngine,
        carriage: carriage,
        wheels: wheels
    };
}

// Test cases
console.log(
    carFactory({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    })
);
// Output: { model: 'VW Golf II', engine: { power: 90, volume: 1800 }, carriage: { type: 'hatchback', color: 'blue' }, wheels: [13, 13, 13, 13] }

console.log(
    carFactory({
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    })
);
// Output: { model: 'Opel Vectra', engine: { power: 120, volume: 2400 }, carriage: { type: 'coupe', color: 'grey' }, wheels: [17, 17, 17, 17] }
