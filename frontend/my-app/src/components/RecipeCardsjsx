
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

const RecipeCard = ({ recipe }) => (
  <Card style={{ width: '18rem', margin: '1rem' }}>
    <Card.Img variant="top" src={recipe.image} alt={recipe.name} />
    <Card.Body>
      <Card.Title>{recipe.name}</Card.Title>
      <Card.Text>
        {recipe.description}
      </Card.Text>
      <Button variant="primary">View Recipe</Button>
    </Card.Body>
  </Card>
);

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeCard;
