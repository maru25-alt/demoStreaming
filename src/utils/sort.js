export const sortEntries = (a, b)=>{
  let firstElement= a.title.toLowerCase();
  let sortElement = b.title.toLowerCase();
  if(firstElement < sortElement){
      return -1;
  }
  else if(firstElement > sortElement){
      return 1
  }
  return 0
}