/* em2px() by esedic on GitHub: https://gist.github.com/esedic/bf6451b8ddfdc654c23adea97095780c */

export function em2px(em) {
  return Number(em) * Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0]);
}

console.log(em2px(2));