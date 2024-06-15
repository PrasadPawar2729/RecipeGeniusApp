
import RecipeCard from './RecipeCard';

const RecipeLandingPage = () => {
  const recipes = [
    {
      name: 'Spaghetti Carbonara',
      image: 'https://via.placeholder.com/150',
      description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    },
    {
      name: 'Chicken Tikka Masala',
      image: 'https://via.placeholder.com/150',
      description: 'A popular Indian dish made with roasted marinated chicken chunks in spiced curry sauce.',
    },
    {
      name: 'Beef Wellington',
      image: 'https://via.placeholder.com/150',
      description: 'A gourmet dish of beef tenderloin coated with pâté and duxelles, wrapped in puff pastry.',
    },
    {
      name: 'Caesar Salad',
      image: 'https://via.placeholder.com/150',
      description: 'A green salad of romaine lettuce and croutons dressed with lemon juice, olive oil, egg, Worcestershire sauce, anchovies, garlic, Dijon mustard, Parmesan cheese, and black pepper.',
    },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeLandingPage;
