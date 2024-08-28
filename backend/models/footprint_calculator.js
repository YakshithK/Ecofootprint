const factors = {
    transportation: { car: 0.24, bus: 0.05, bike: 0.03},
    energy: {electricity: 0.233, natural_gas: 2.5},
    food: {meat: 27.0, vegetables: 2.0},
    waste: { plastic: 6.0, paper: 1.5}
}

export function calculate(inputs) {
    console.log(inputs)
    const transpoMode = inputs.transport.name
    const transport = inputs.transport.amount * factors.transportation[transpoMode]
    const energyMode = inputs.energy.name
    const energy = inputs.energy.amount * factors.energy[energyMode]
    const foodMode = inputs.food.name
    const food = inputs.food.amount * factors.food[foodMode]
    const wasteMood = inputs.waste.name
    const waste = inputs.waste.amount * factors.waste[wasteMood]
    return transport + energy + food + waste

}

const userInputs = {
    transport: { name: 'car', amount: 0.05},
    energy: {name: 'electricity', amount: 2.5},
    food: {name: 'meat', amount: 2.0},
    waste: { name: 'plastic', amount: 1.5}
}

const totalFootprint = calculate(userInputs);