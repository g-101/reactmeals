import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Comida deliciosa, Entregue a Você</h2>
      <p>
        Escolha sua refeição favorita entre nossa ampla seleção de refeições disponíveis e desfrute
        de um delicioso almoço ou jantar em casa.
      </p>
      <p>
        Todas as nossas refeições são cozinhadas com ingredientes de alta qualidade, no tempo certo
        e, é claro, por chefs experientes!
      </p>
    </section>
  );
};

export default MealsSummary;
