export const mergeClassName = (...rest) => {
  // method join của array => chuyển array về string, với separator là string rỗng

  //  [].join("[separator]")

  return rest.join(" ");
};
