// // SYNCHRONOUS
// const second = ()=>{ console.log('second') };
// const first = ()=>{
//   console.log('first');
//   second();
//   console.log('the end');
// };
// first();


// // ASYNCHRONOUS
// const second = () => {
//   setTimeout(()=>{
//     console.log('second, async here')
//   }, 1500);
// };
// const first = () => {
//   console.log('first');
//   second();
//   console.log('the end');
// };
// first();


// // ASYNC THE OLD WAY - callback hell
// function getRecipe(){
//   setTimeout(()=>{
//     const recipeID = [23,801,33,45];
//     console.log(recipeID);

//     setTimeout((id)=>{
//       const recipe = {title: 'fake food', publisher: 'chris'};
//       console.log(`${id}: ${recipe.title}`);

//       setTimeout((publisher)=>{
//         const recipe = { title: 'fast fake food', publisher: 'chris' };
//         console.log(recipe.publisher);
//       }, 2000, recipe.publisher);

//     }, 1000, recipeID[2]);

//   }, 1500);
// }
// getRecipe();


// PROMISES - an object that keeps track of whether a certain event occured, determines what happens after the event has happened. implements the concept of a future value that we're expecting.
// promise states; pending --eventhappens--> resolved --fulfilled/rejected-->
