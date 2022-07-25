function peak(vector, left, right) {
    // Binary Search of the peak
    if(left > right) return null;

    let mid = Math.floor((left + right) / 2);

    if(vector[mid-1] < vector[mid] && vector[mid] > vector[mid+1])
        return vector[mid];

    let value1 = peak(vector, mid+1, right);
    let value2 = peak(vector, left, mid-1);

    return value2 ?? value1;
}

module.exports = peak;
