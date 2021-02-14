class dataHelpers { 

    static find(entity, keyTofind) {
        //  console.log("finding", keyTofind, "in", entity);
        var result = Object.keys(entity).filter(function (key, index, self) {
            return !key.indexOf(keyTofind);
        });
        return result;
    }

}

function* createIndex() {
    let number = 1;
    while (true)
        yield number++;
}


