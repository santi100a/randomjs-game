export default function random(max, min) {
    if (!min)
        return Math.floor(Math.random() * max);
    else
        return Math.floor(Math.random() * (max - min + 1)) + min;
}