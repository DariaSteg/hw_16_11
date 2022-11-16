// Написати функцію, яка повертає об'єкт родина з властивостями, які мають вигляд:
// ключ - ім'я члена родини, а значення - хто із членів родини
// (мінімум родина з 3 осіб)
// Інформацію про особу запитувати у користувача.
// Вивести отриманий об'єкт за допомогою for..in
 
 
 const father= {
     Anton: "father",
   };
  const mather= {
    Elena: "mather",
  };
  const son= {
    Danyl: "son",
  };


const chooseFamily = function () {
  while (true) {
    const userInput = prompt(`choose answer:Anton or Elena or Danyl`);
     if (userInput === "Anton"){
      for (const key in father) {
        console.log(`${key} : ${father[key]}`);
      }
      break;
    }
    else if (userInput === "Elena"){
      for (const key in mather) {
        console.log(`${key} : ${mather[key]}`);
      }
      break;
    }
    else if (userInput === "Danyl"){
      for (const key in son) {
        console.log(`${key} : ${son[key]}`);
      }
      break;
    }
    else{
      console.log( " Try again!")
    }
    continue;
  }
};
console.log(chooseFamily());