const Item = ({ name, quantity, category }) => {
  return (
    <li>
      {name} {quantity} {category}
    </li>
  );
}