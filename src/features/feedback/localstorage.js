export const loadFeedback = () => {
    try {
      const serialState = localStorage.getItem('feedbackState');
      if (serialState === null) {
        return [];
      }
      return JSON.parse(serialState);
    } catch (err) {
      return [];
    }
  };

 export const saveFeedback = (state) => {
    try {
      const serialState = JSON.stringify(state);
      localStorage.setItem('feedbackState', serialState);
    } catch(err) {
        console.log(err);
    }
};