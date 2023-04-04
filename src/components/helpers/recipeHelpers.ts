export const speedText = (speed: number | null) => {
    switch(speed)
    {
        case 1: return "Quick";
        case 2: return "Speedy";
        case 3: return "Medium";
        case 4: return "Takes some time";
        case 5: return "Takes a long time";
        default: return "Time to prepare";
    }
}

export const costText = (cost: number | null) => {
    switch(cost)
    {
        case 1: return "Very Cheap";
        case 2: return "Cheap";
        case 3: return "Moderate Price";
        case 4: return "Pricey";
        case 5: return "Luxury";
        default: return "Cost";
    }
}