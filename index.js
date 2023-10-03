function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let item of collection){
            callback(item);
        }
    } else {
        for (let value in collection) {
            callback(collection[value]);
        }
    }
    return collection
}

function myMap(collection, callback) {
    let newCollection = [];
    if (Array.isArray(collection)) {
        for (let item of collection){
            newCollection.push(callback(item));          
        }
        
    } else {
        for (let value in collection) {
            newCollection.push(callback(collection[value]));
        }
    }
    return newCollection
}

function myReduce(collection, callback, acc) {
    const collectionCopy = Array.isArray(collection) ? Array.from(collection) : Object.assign({}, collection);
  
    if (Array.isArray(collectionCopy)) {
      if (typeof acc === 'undefined') {
        acc = collectionCopy[0];
        collectionCopy.shift();
      }
  
      for (let item of collectionCopy) {
        acc = callback(acc, item);
      }
    } else if (typeof collectionCopy === 'object') {
      if (typeof acc === 'undefined') {
        const [firstKey] = Object.keys(collectionCopy);
        acc = collectionCopy[firstKey];
        delete collectionCopy[firstKey];
      }
  
      for (let value of Object.values(collectionCopy)) {
        acc = callback(acc, value);
      }
    }
  
    return acc;
}

function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let item of collection){
            if (predicate(item)) {
                return item
            };
        };
    } else {
        for (let value in collection) {
            if (predicate(collection[value])) {
                return item
            };
        };
    }
}

function myFilter(collection, predicate) {
    let newCollection = [];
    if (Array.isArray(collection)) {
        for (let item of collection){
            if (predicate(item)) {
                newCollection.push(item)
            };
        };
    } else {
        for (let value in collection) {
            if (predicate(collection[value])) {
                newCollection.push(collection[value]);
            };
        };
    }
    return newCollection
}

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length
    } else {
        let newCollection = Object.values(collection);
        return newCollection.length
    }
}

function myFirst(array, n) {
    if (n) {
        let newArray = array.slice(0,n);
        return newArray  
    } else return array[0]
}

function myLast(array, n) {
    if (n) {
        let newArray = array.slice(-n);
        return newArray
    } else return array[array.length -1]
}

function myKeys(object) {
    let keys = Object.keys(object);
    return keys
}

function myValues(object) {
    let values = Object.values(object);
    return values
}