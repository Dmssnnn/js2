// 1. მიიღეთ მომხმარებლების სია https://jsonplaceholder.typicode.com/users-დან
// და ამოიღეთ მხოლოდ მომხმარებლის სახელები მასივში.



    const emptyMassive = [];
  getOnlyNames = async () => {
       try {
           const result = await fetch("https://jsonplaceholder.typicode.com/users")
              const getJson = await result.json();

                  const getOnlyNames = emptyMassive.push(getJson.map(item => item.name))
           console.log(emptyMassive) 
        }
    catch{
         return("error")
    }
}  
getOnlyNames()



// 2. შექმენით კლასი Car,რომელშიც აღწერილი იქნება:მოდელის, კომპანია,
// და წელი. შექმენით ამ კლასში ფუნქცია getCarDetails, რომელიც აბრუნებს
// მანქანის დეტალების შემაჯამებელ სტრიქონს.



class Car {
    constructor(model,company,year){
        this.model = model;
        this.company = company;
        this.year = year;
    }


    getCarDetails(){
        return console.log(`this model is ${this.model}, this company is ${this.company}, the model created in  ${this.year}`)

    }
}

const newCar = new Car("challenger", "dodge" , 2002)

newCar.getCarDetails()




// 3.ამ პოსტების API-დან https://jsonplaceholder.typicode.com/posts
// შექმენით კლასის პოსტი თვისებების ID,
// სათაური და ტექსტი. შექმენით Post ობიექტების მასივი მოტანილი მონაცემების საფუძველზე.


class Post {
    constructor(id , title , body ){
        this.id = id;
        this.title = title;
        this.body =  body;
    }
}

const getSomething = async () => {
    try {
        const result = await fetch("https://jsonplaceholder.typicode.com/posts")
        const getJsn = await result.json();
        const newArr = getJsn.map(({ id , title , body }) => new Post(id , title , body ));
        console.log(newArr)
    }
    catch(error) {
        console.log(error, "errrrrrr")
    }
} 

getSomething()



// // 4. შექმენით ობიექტი,რომელიც შედგება სახელებისა და ასაკს მასივის გათვალისწინებით,
// // გაფილტრეთ და დააბრუნეთ ახალი მასივი 18 წელზე უფროსი ასაკის პირების ობიექტებით,
// //გამოიყენეთ filter მეთოდი!!


const object = [
    {
        name : "jora",
        age : 25,
    },
    {
        name : "rati",
        age : 2,
    },
    {
        name : "kiqdqa",
        age : 12,
    }
]

const result  = object.filter((item) => item.age >= 18)
console.log(result)




//5 
