const todo = [
  {
    key: 1,
    id: 1,
    task: "Get groceries",
    status: "todo",
    deadline: new Date("11/8/2020"),
  },
  {
    key: 2,
    id: 2,
    task: "Play with cat",
    status: "complete",
    deadline: new Date("11/10/2020"),
  },
  {
    key: 3,
    id: 3,
    task: "Clean house",
    status: "todo",
    deadline: new Date("11/10/2020"),
  },
  {
    key: 4,
    id: 4,
    task: "Call Parents",
    status: "todo",
    deadline: new Date("11/10/2020"),
  },
  {
    key: 5,
    id: 5,
    task: "Cry about how hard coding is",
    status: "in-progress",
    deadline: new Date("11/8/2020"),
  },
  {
    key: 6,
    id: 6,
    task: "Make coffee",
    status: "complete",
    deadline: new Date("11/8/2020"),
  },
];
// let soonest = todo.sort((a, b) => a.deadline.getTime() - b.deadline.getTime());
// console.log(soonest);
let now = new Date().getTime()
let soonest = todo.sort((a, b) => a.deadline.getTime() - b.deadline.getTime())
.find(t=>) 
    if(t.deadline.getTime() < now && t.status == "todo"){
    return true;
}

console.log(soonest)

let past = todo.filter(t=>)