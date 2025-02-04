import styles from "./userCard.module.css"
import PropTypes from 'prop-types';

function UserCard({name="Manuel", age= 28, location="Tampa"}){

return <div className={styles.container}>
<h3>Name: {name}</h3>
<h3>Age: {age}</h3>
<h3>Location: {location}</h3>
</div>
}
UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired
};
export default UserCard;