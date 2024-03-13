export function currency(num) {
  const n = parseInt(num, 10);
  return `${n.toFixed(0).replace(/./g, (c, i, a) => (i && c !== '.' && (a.length - i) % 3 === 0 ? `, ${c}`.replace(/\s/g, '') : c))}`;
}
// 10碼轉當地時間
export function date(timestamp) {
  return new Date(timestamp * 1000).toLocaleDateString();
}
