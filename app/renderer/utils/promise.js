export const settle = (arr) => {
  return Promise.all(arr.map(promise => {
    return promise.then(
      value => ({state: 'resolved', value}),
      value => ({state: 'rejected', value})
    );
  }));
};
