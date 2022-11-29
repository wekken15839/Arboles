class Nodo{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

    add(value){
        if(value < this.value){
            this.addToTheLeft(value);
        }else{
            this.addToTheRight(value);
        }
    }

    addToTheLeft(value){
        if(this.left){
            this.left.add(value);
        }else{
            this.left = new Nodo(value);
        }
    }

    addToTheRight(value){
        if(this.right){
            this.right.add(value);
        }else{
            this.right = new Nodo(value);
        }
    }
}

class recorrerNodo{

    inOrder(nodo,array){
        if(!nodo)return;
        this.inOrder(nodo.left,array);
        array.push(nodo.value);
        this.inOrder(nodo.right,array);
        return array;
    }
    preOrder(nodo,array){
        if(!nodo)return;
        array.push(nodo.value);
        this.preOrder(nodo.left,array);
        this.preOrder(nodo.right,array);
        return array;
    }
    postOrder(nodo,array){
        if(!nodo)return;
        this.postOrder(nodo.left,array);
        this.postOrder(nodo.right,array);
        array.push(nodo.value);
        return array;
    }
}

var array = new recorrerNodo();
const head = new Nodo(10);
head.add(15);
head.add(17);
head.add(5);
console.log(array.inOrder(head,[]));
console.log(array.preOrder(head,[]));
console.log(array.postOrder(head,[]));

