

class MinStack {
    constructor(maxSize=10){
        //The default length is 10
        this.array=new Array();
        this.minElement=[];//save the index of the minimum element
        this.maxSize=maxSize;
    }

    isFull(){
        if(this.array.length>=this.maxSize){
            return true;
        }
        return false;
    }

    isEmpty(){
        if(this.array.length===0)
            return true;
        else    
            return false;
    }

    push(n){
        //Assuming MinStack can contain numbers
        if(isNaN(n)){
            return `${n} is not a number`;
        }
        if(this.isFull()){
            return 'The stack is full'
        }
        n=Number(n);
        this.array.push(n);
        let index=this.array.length-1;//the index of n in array
        let indexOfMin=this.minElement[this.minElement.length-1];//The index of the minimum element
        if(this.minElement.length===0 || n < this.array[indexOfMin]){//if n is the first value pushed into the stack then it is the minimum value
            this.minElement.push(index)
        }
        return `${n} added successfully`
    }

    pop(){
        if(this.isEmpty()){
            return 'The stack is empty'
        }
        let last=this.array.length-1;
        if(this.minElement[this.minElement.length-1]===last){//If the element that is removed is the minimum, then we will delete its index from minElement, leaving an index of the previous minimum element.
            this.minElement.pop();
        }
        return this.array.pop();
    }
    
   
    getMinimum(){
        if(this.minElement.length===0)
            return 'The stack is empty'
        let indexOfMin=this.minElement[this.minElement.length-1];
        return this.array[indexOfMin];
    }
    
    length(){
        return this.array.length;
    }
}

let minStack=new MinStack();
//the stack is empty
console.log("minStack.isEmpty() ",minStack.isEmpty());
console.log("minStack.isFull() ",minStack.isFull());
console.log("minStack.pop() ",minStack.pop());
console.log("minStack.getMinimum() ",minStack.getMinimum());


console.log("minStack.push(5) ",minStack.push(5));
console.log("minStack.getMinimum() ",minStack.getMinimum());
console.log("minStack.push(4) ",minStack.push(4));
console.log("minStack.getMinimum() ",minStack.getMinimum());
console.log("minStack.push('4d') ",minStack.push("4d"));
console.log("minStack.pop() ",minStack.pop());
console.log("minStack.getMinimum() ",minStack.getMinimum());
console.log("minStack.pop() ",minStack.pop());
console.log("minStack.getMinimum() ",minStack.getMinimum());

for(let i=1;i<=10;i++){
    console.log(`minStack.push(${i}) `,minStack.push(i)); 
}
console.log("minStack.getMinimum() ",minStack.getMinimum());
console.log(`minStack.push(11) `,minStack.push(11)); 
console.log(`minStack.length() `,minStack.length()); 