
const arr = {
    content: [1, 2, 4, 8, 16],
    length: 5,
    push: function(element){
        // append element to content end
        this.content[this.length] = element;
        // update length
        this.length = this.length + 1;
        return this.length;
    },
    unshift: function(element){
        // append element to content start
        for (let i = this.length - 1; i >= 0; i = i - 1){
            this.content[i+1] = this.content[i];
        }
        this.content[0] = element;
        // update length
        this.length = this.length + 1;
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
}

let isOdd = arr.find(function(num){
    return num % 2 === 1
});
console.log(isOdd);