`use strict`;

// function greet(name) {
//     console.log(`Hello, ${name}! I am ${this.person}`);
//   }
  
//   const person = "John";
//   const context = {
//     person: "Alice"
//   };
  
//   greet.call(context, "Bob");
  

const numbers = [1, 2, 3];
numbers[4] = 11;
console.log(numbers);


console.log(
      numbers.toSorted((curEl, nextEl) => {
        return nextEl - curEl;
      })
    );
    
    const descSortedNumbers = numbers.toSorted((next, current) => current - next);
    const ascSortedNumbers = numbers.toSorted((next, current) => next - current);
    console.log("descSortedNumbers", descSortedNumbers);
    console.log("ascSortedNumbers", ascSortedNumbers);
