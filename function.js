/* const names = [
  "mahmud",
  "papon",
  "nur alam",
  "rahad",
  "khadija",
  "asif",
  "raju",
  "akter",
  "habu",
  "mahmud",
  "papon",
  "asif",
  "sabbir",
  "manik",
  "fariha",
  "ismat",
  "raju",
  "habu",
];

function removeDuplicated(names) {
   const unique = [];
   for (const element of names){
      // console.log(element);
      if (unique.indexOf(element) == -1) {
         unique.push(element);
      }
   }
   return unique;
}

const uniqeNames = removeDuplicated(names)
console.log(uniqeNames);
 */

const names = [
   "mahmud",
   "papon",
   "nur alam",
   "rahad",
   "khadija",
   "asif",
   "raju",
   "akter",
   "habu",
   "mahmud",
   "papon",
   "asif",
   "sabbir",
   "manik",
   "fariha",
   "ismat",
   "raju",
   "habu",
 ];
 
 function removeDuplicated(names) {
    const unique = [];
    for (const element of names){
       // console.log(element);
       if (unique.indexOf(element) == -1) {
          unique.push(element);
       }
    }
    return unique;
 }
 
 const uniqeNames = removeDuplicated(names)
 console.log(uniqeNames);
 