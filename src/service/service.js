import patterns from './photoAPIData.js';

const patternsAPI = Promise.resolve(patterns);

const mockDataService = () => {
  return Promise.all([patternsAPI]) 
    .then(data => {
      let storageArray = [];
      
      data[0].forEach((key, i) => {
        storageArray.push({
          id : i,
          discription : key.description || 'No caption for this photo',
          url : key.urls.regular,
          user : key.user.name
        })
      })

      return storageArray;
    });
};

export default mockDataService; 
