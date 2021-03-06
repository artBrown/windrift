const React = require('react')

/* Given an array `from` which may contain 0, 1, or many items, return
  matching values from the `to` object */
const ManyMap = ({from, to}) => {
  if (!from)
    return null
  let matches = from.filter((item) => Object.keys(to).indexOf(item) != -1)
  return <span>
    {[...matches].map((item, i) => <span key={i}>{to[item]}</span>)}
  </span>
}
ManyMap.propTypes = {
  from: React.PropTypes.array,
  to: React.PropTypes.object.isRequired
}
export default ManyMap
