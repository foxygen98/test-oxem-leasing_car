export default function prettify(num) {
  return Math.ceil(num).toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ')
}
