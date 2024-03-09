/* This (for .. of ..) statement lets you loop over the data structures that are iterable such as 
Arrays, Strings, Maps, Node Lists.*/

const arr = [1,3,6,4,7];

for(const i of arr){
    console.log(i);
}


const str = "Rizwan"

for(const i of str){
    console.log(i);
}


const map = new Map([
    ['a',1],
    ['b',2],
    ['c',3],
])

for(const [key,value] of map){
    console.log([key,value]);
}