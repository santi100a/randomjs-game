function random(max, min = 0) {
    if (!min)
        return Math.floor(Math.random() * max);
    else
        return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default random;