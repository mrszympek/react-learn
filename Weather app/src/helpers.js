export function calculateTemp(temp) {
    return Math.round(((temp - 273.15) * 100) / 100).toFixed(1) + "°C"
}