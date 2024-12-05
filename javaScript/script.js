let people = [];

function showDetails(index) {
    document.getElementById("details").innerHTML = `
    <div class="card" style="width: 50%;">
        <img src="${people[index].photo}" class="card-img-top" alt="${people[index].fname} ${people[index].lname}">
        <div class="card-body">
            <h5 class="card-title">${people[index].fname} ${people[index].lname}</h5>
            <p class="card-text">Age: ${people[index].age}</p>
            <p class="card-text">Gym: ${people[index].gym ? "Yes" : "No"}</p>
            <p class="card-text">Hobbies: ${people[index].hobbies.join(", ")}</p>
            <a href="#" class="btn btn-primary">Back</a>
        </div>
    </div>`;
}

class Person {
    fname;
    lname;
    age;
    gym;
    hobbies;
    photo;

    constructor(fname, lname, gym, hobbies = ["none"], age = 18, photo) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.gym = gym;
        this.hobbies = hobbies;
        this.photo = photo;

        people.push(this);
    }

    printAllInfo() {
        return `
        <div class="card" style="width: 18rem;">
            <img src="${this.photo}" class="card-img-top" alt="${this.fname} ${this.lname}">
            <div class="card-body">
                <h5 class="card-title">${this.fname} ${this.lname}</h5>
                <a href="#" class="btn btn-primary mybtn">Show details</a>
            </div>
        </div>`;
    }
}

let person1 = new Person("John", "Doe", false, ["Code"], 18, "https://cdn.pixabay.com/photo/2019/08/29/08/57/biotechnology-4438566_960_720.jpg");
let person2 = new Person("Martin", "Thomas", true, ["Swimming", "Play games"], 26, "https://cdn.pixabay.com/photo/2016/06/07/17/15/yogurt-1442034_1280.jpg");
let person3 = new Person("Katherin", "Ized", false, ["Cooking", "Reading", "Shopping"], 33, "https://cdn.pixabay.com/photo/2019/03/21/22/41/currants-4072164_960_720.jpg");
let person4 = new Person("Julianne", "Wölfgang", true, ["Code", "Dancing", "Singing"], 24, "https://cdn.pixabay.com/photo/2019/06/20/11/49/dog-4286921_640.jpg");
let person5 = new Person("Tilian", "Gotze", false, ["Running", "Singing", "Writing"], 44, "https://cdn.pixabay.com/photo/2016/11/18/17/47/iphone-1836071_640.jpg");
let person6 = new Person("Lucas", "Arnold", true, ["Code", "Cooking", "Reading"], 31, "https://cdn.pixabay.com/photo/2021/12/26/17/10/milk-6895572_640.jpg");
let person7 = new Person("Philip", "Gand", false, ["Code"], 34, "https://cdn.pixabay.com/photo/2019/11/22/18/59/vehicle-4645483_640.jpg");
let person8 = new Person("Jakob", "Nehmar", true, ["Reading", "Football"], 29, "https://cdn.pixabay.com/photo/2019/04/18/18/38/soccer-4137684_960_720.jpg");
let person9 = new Person("Lisa", "Dama", true, ["Code", "Dancing", "Singing", "Cooking"], 19, "https://cdn.pixabay.com/photo/2024/05/20/14/28/dhanno-8775393_640.jpg");
let person10 = new Person("Matha", "Stewart", false, ["Walking", "Cleaning", "Singing"], 21, "https://cdn.pixabay.com/photo/2018/07/22/09/54/bangladesh-3554170_640.jpg");
let person11 = new Person("Peter", "Daniel", true, ["Code", "Dancing", "Reading"], 41, "https://cdn.pixabay.com/photo/2020/01/27/14/09/men-4797307_1280.jpg");
let person12 = new Person("Thomas", "Räth", true, ["Swimming", "Dancing", "Riding", "Coding"], 30, "https://cdn.pixabay.com/photo/2014/07/06/15/24/meat-385583_960_720.jpg");

people.forEach((element) => {
    document.getElementById("result").innerHTML += element.printAllInfo();
});

let btns = document.querySelectorAll(".mybtn");

btns.forEach((element, i) => {
    element.addEventListener("click", function () {
        showDetails(i);
    });
});


