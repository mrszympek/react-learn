export function calculateTemp(temp) {
    return Math.round(((temp - 273.15) * 100) / 100).toFixed(1)
}

export function getDayName(day) {
    const weekday = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date(day);
    return weekday[d.getDay()];
}

export function setIcon(icon) {
    const url = `http://openweathermap.org/img/w/${icon}.png`;
    return url;
}