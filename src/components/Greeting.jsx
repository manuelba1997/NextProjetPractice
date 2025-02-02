import PropTypes from 'prop-types';

function Greeting({name})
{
 
    return <h2>Have a Great Day, {name}</h2>;
}
Greeting.propTypes = {
    name: PropTypes.string.isRequired
};

export default Greeting;