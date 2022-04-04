import PropTypes from 'prop-types'

const btn = ({ color, text, onClick}) => {


  return ( <button 
  onClick={onClick}
  style={{backgroundColor: color}} 
  className='btn'
  >
    {text}
  </button>
  )
}

btn.defaultProps = {
  color: 'steelblue',
}

btn.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}
export default btn