// const { childrenLimit, pagniateLimit } = input;

const boardItemCount = 10000;
const pagniateLimit = 800;

const maxAllowedSize = 500;
const validPaginateSize =
  pagniateLimit > maxAllowedSize ? maxAllowedSize : pagniateLimit;
const size = boardItemCount / validPaginateSize;

const iterateArray = Array.from({ length: size }, (_, index) => index + 1);

console.log(iterateArray);

return {
  iterateArray,
};
