export const collectionIdAndDocs = doc =>{
  return {id: doc.id, ...doc.data() };
}