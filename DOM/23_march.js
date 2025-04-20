
let expenses = [

    {description: "Grocerise", amount:50, category: "Food"},
    {description: "Electronicity Bill", amount:100, category: "utilities"},
    {description: "Dinner", amount:30, category: "Food"},
    {description: "Internet Bill", amount:50, category: "Utilities"}

];

let expenseReport = expenses.reduce((report, expenses) =>{
    report[expenses.category] += expenses.amount;
    return report;
}, {Food: 0, Utilities: 0}
);
//console.log("Expense Rreport", expenseReport);

// let pendingSortedTasks = tasks
//   .filter((task) => !task.complete)
//   .sort((a, b) => a.priority - b.priority);

// console.log(pendingSortedTasks);

let movieRatings = [

  {title: "Movie A", ratings:[4,5,3] },
  {title: "Movie B", ratings:[5,5,4] },
  {title: "Movie C", ratings:[3,5,2] },
    
];

let averageRatings = movieRatings.map((movie) => {
   let total = movie.ratings.reduce((sum,rating) => sum + rating,0)
    let average = total / movie.ratings.length;
    return {title: movie.title, averageRatings: average.toFixed(2)}
    

});
console.log(averageRatings);
console.log(movieRatings);