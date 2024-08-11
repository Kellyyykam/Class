
const arr = {
    content: ['Fire', 'Water', 'Wind', 'Earth'],
    length: 4,
    push: function(...rest){
        for (i = 0; i < rest.length; i = i + 1){
            this.content[this.length] = rest[i];
            this.length = this.length + 1;
        }
            return this.length;
    },
    unshift: function(...rest){
        for (i = this.length - 1; i >= 0; i = i - 1){
            this.content[i+rest.length] = this.content[i];
        }
        for (i = 0; i < rest.length; i = i + 1){
            this.content[i] = rest[i];
            this.length = this.length + 1;
        }
        return this.length;
    },
    slice: function(start, end){
        let copiedArr = [];
        if (end === undefined || end > this.length){
            end = this.length};
        if (start === undefined){
            start = 0};
        if (start < 0){
            start = this.length + start};
        if (end < 0){
            end = this.length + end};
        for (let i = start; i < end; i = i + 1){
            copiedArr.push(this.content[i]);
        }
        return copiedArr;
    },
    includes: function(target, start){
        if (start === undefined){
            start = 0
        };
        for (i = start; i < this.length; i = i + 1){
            if(target === this.content[i]){
                return true;
            }
        } 
        return false;
    },
    some: function(searchFunction){
        let result = false;
        for (let i = 0; i < this.length; i = i + 1){
            if (searchFunction(this.content[i],i)){
                result = searchFunction(this.content[i],i)
            }
        }
        return result;
    },
    every: function(searchFunction){
        let result = true;
        for (let i = 0; i < this.length; i = i + 1){
            result = result && searchFunction(this.content[i],i)
        }
        return result;
    },
    find: function(searchFunction){
        for (let i = 0; i < this.length; i = i + 1){
            if (searchFunction(this.content[i],i)){
                return this.content[i];
            }
        }
        return undefined;
    },
    findIndex: function(searchFunction){
        for (let i = 0; i < this.length; i = i + 1){
            if (searchFunction(this.content[i],i)){
                return i;
            }
        }
        return -1;
    },
    findLast: function(searchFunction){
        for (let i = this.length - 1; i >= 0; i = i - 1){
            if (searchFunction(this.content[i],i)){
                return this.content[i];
            }
        }
        return undefined;
    },
    filter: function(searchFunction){
        let newArray = [];
        for (let i = 0; i < this.length; i = i + 1){
            if (searchFunction(this.content[i],i)){
                newArray.push(this.content[i]);
            }
        }
        return newArray
    },
    map: function(processingFunction){
        let newArray = [];
        for (let i = 0; i < this.length; i = i + 1){
            newArray.push(processingFunction(this.content[i],i));
        }
        return newArray
    },
    concat: function(...rest){
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
    },
    reverse: function(){
        let newArray = [];
        for (let i = 0; i < this.length; i = i +1){
            newArray.unshift(this.content[i]);
        }
        for (let j = 0; j < this.length; j = j + 1){
            this.content[j] = newArray[j];
        }
        return this.content;
    },
    flat: function(){
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
        return flattenArr(this.content);
    },
    join: function(symbol = ','){

        let output = this.content[0];
        for (let i = 1; i < this.length; i = i + 1){
            output = output + symbol + this.content[i];
        } return output
    }
}
console.log(arr.join(' + '));
