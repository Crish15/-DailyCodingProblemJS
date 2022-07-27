function findMinBroadcastRange(listeners, towers) {
    let maxDistance = new Map();

    for (let i = 0; i < listeners.length; i++) {
        let min = Number.MAX_VALUE;
        for (let j = 0; j < towers.length; j++) {
            let distance = Math.abs(listeners[i] - towers[j]);
            if (distance < min) min = distance;
        }

        maxDistance.set(listeners[i], min);
    }

    let max = Number.MIN_VALUE;
    maxDistance.forEach((value) => {
        if(value > max) {
            max = value;
        }
    })

    return max;
}

// Better solution can be implemented

module.exports = findMinBroadcastRange;
