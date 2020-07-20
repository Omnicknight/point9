const userExample = {
    name: 'Custom name',
    salary: 1000,
    language: 'Java', 
    task: 5,
};

const bonus = {
    'C++': 100,
    JS: 75,
    PhP: 75,
    default: 0,
};

const grades = {
    Junior: 'junior',
    Middle: 'middle',
    Senior: 'senior',
}

const gradeTax = {
    [grades.Junior]: 0.25,
    [grades.Middle]: 0.5,
    [grades.Senior]: 0.75,
};

function User(name, language, grade = grades.Junior) {
    this.name = name;
    this.grade = grade;
    this.salary = 1000;
    this.language = language;
    this.tasks = 0;

    this.addTask = () => {
        this.tasks++;
    };
    this.finishTask = () => {
        if(this.tasks > 0) {
            this.tasks--;
            this.salary += (bonus[this.language] || bonus.default) * gradeTax[this.grade];
        };
    };
};   

const user = new User('John', 'C++', grades.Junior);
const user1 = new User('Vasya', 'Rust', grades.Senior);
user.addTask ();
user.addTask ();
user.addTask ();
user.addTask ();
user.addTask ();

user.finishTask();
user.finishTask();
user.finishTask();



console.log(user, user1);


