var data = {};
export var DataNavigation = {
    getData: (value) => {
        return data[value];
    },
    setData: (key, value) => {
        data[key] = value;
    },
    removeData: (key) => {
        delete data[key];
    },
    getWholeData: () => {
        return data;
    }
}
