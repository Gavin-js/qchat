import md5 from 'js-md5'

export default function encrypt(str) {
  const md5str = md5(str)
  return (
    md5str.substr(md5str.length - 6) +
    md5str.substr(6, md5str.length - 12) +
    md5str.substr(0, 6)
  )
}
