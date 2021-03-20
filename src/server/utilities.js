export const collectionId = doc =>{
  return {id: doc.id, ...doc.data() };
}