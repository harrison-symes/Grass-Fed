export const speedText = (speed: number | null) => {
    switch(speed)
    {
        case 1: return "Up to: Instant";
        case 2: return "Up to: Fast";
        case 3: return "Up to: Medium";
        case 4: return "Up to: Slow";
        case 5: return "Up to: Long";
        default: return "Time to prepare";
    }
}

export const costText = (cost: number | null) => {
    switch(cost)
    {
        case 1: return "Up to: Very Cheap";
        case 2: return "Up to: Cheap";
        case 3: return "Up to: Moderate";
        case 4: return "Up to: Pricey";
        case 5: return "Up to: Luxury";
        default: return "Cost";
    }
}