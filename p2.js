
class MyArray {
    constructor (){
        this.#content = [];
        this.#length = 0;
    }
    #content = [];
    #length = 0;
    #view = 0;
    get content (){
        this.#view++;
        return this.#content;
    }
    get length (){
        return this.#length;
    }
    get view (){
        return this.#view;
    }
    push(...rest){
        for (let i = 0; i < rest.length; i = i + 1){
            this.#content[this.#length] = rest[i];
            this.#length = this.#length + 1;
        }
            return this.#length;
    }
    unshift(...rest){
        for (let i = this.#length - 1; i >= 0; i = i - 1){
            this.#content[i+rest.length] = this.#content[i];
        }
        for (let i = 0; i < rest.length; i = i + 1){
            this.#content[i] = rest[i];
            this.#length = this.#length + 1;
        }
        return this.#length;
    }
    slice(start, end){
        let copiedArr = [];
        if (end === undefined || end > this.#length){
            end = this.#length};
        if (start === undefined){
            start = 0};
        if (start < 0){
            start = this.#length + start};
        if (end < 0){
            end = this.#length + end};
        for (let i = start; i < end; i = i + 1){
            copiedArr.push(this.#content[i]);
        }
        return copiedArr;
    }
    includes(target, start){
        if (start === undefined){
            start = 0
        };
        for (let i = start; i < this.#length; i = i + 1){
            if(target === this.#content[i]){
                return true;
            }
        } 
        return false;
    }
    some(searchFunction){
        // check if at least one element in an array passes a certain condition
        let result = false;
        for (let i = 0; i < this.#length; i = i + 1){
            if (searchFunction(this.#content[i],i)){
                result = searchFunction(this.#content[i],i)
            }
        }
        return result;
    }
    every(searchFunction){
        // check if all elements in an array pass a certain condition
        let result = true;
        for (let i = 0; i < this.#length; i = i + 1){
            result = result && searchFunction(this.#content[i],i)
        }
        return result;
    }
    find(searchFunction){
        for (let i = 0; i < this.#length; i = i + 1){
            if (searchFunction(this.#content[i],i)){
                return this.#content[i];
            }
        }
        return undefined;
    }
    findIndex(searchFunction){
        // first index of a specific element in an array
        for (let i = 0; i < this.#length; i = i + 1){
            if (searchFunction(this.#content[i],i)){
                return i;
            }
        }
        return -1;
    }
    findLast(searchFunction){
        for (let i = this.#length - 1; i >= 0; i = i - 1){
            if (searchFunction(this.#content[i],i)){
                return this.#content[i];
            }
        }
        return undefined;
    }
    filter(searchFunction){
        // create a new array that contains only the elements passing a certain condition
        let newArray = [];
        for (let i = 0; i < this.#length; i = i + 1){
            if (searchFunction(this.#content[i],i)){
                newArray.push(this.#content[i]);
            }
        }
        return newArray
    }
    map(processingFunction){
        // create a new array by applying a function to each element of the original array
        let newArray = [];
        for (let i = 0; i < this.#length; i = i + 1){
            newArray.push(processingFunction(this.#content[i],i));
        }
        return newArray
    }
    concat(...rest){
        // merge two or more arrays into a single array
        let newArray = [];
        for (let i = 0; i < rest.length; i = i + 1){
            if (Array.isArray(rest[i])){
                for (let j = 0; j < rest[i].length; j = j + 1){
                    newArray.push(rest[i][j]);
                }
            } else{
                newArray.push(rest[i]);
            }
        }
        return newArray
    }
    reverse(){
        // reverse the order of the elements in an array
        let newArray = [];
        for (let i = 0; i < this.#length; i = i +1){
            newArray.unshift(this.#content[i]);
        }
        for (let j = 0; j < this.#length; j = j + 1){
            this.#content[j] = newArray[j];
        }
        return this.#content;
    }
    flat(){
        function flattenArr (arr){
            let flatArr = [];
            for (let i = 0; i < arr.length; i = i + 1){
                if (!Array.isArray(arr[i])){
                    flatArr.push(arr[i]);
                } else {
                    let new2Arr = flattenArr(arr[i]);
                    flatArr = flatArr.concat(new2Arr);
                }
            } 
            return flatArr;
        }
        return flattenArr(this.#content);
    }
    join(symbol = ','){
        // join all elements of an array into a string
        let output = this.#content[0];
        for (let i = 1; i < this.#length; i = i + 1){
            output = output + symbol + this.#content[i];
        } return output
    }
}

let newArr = new MyArray();
newArr.push(3);
newArr.length = 3;
console.log(newArr);