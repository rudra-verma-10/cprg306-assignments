const Item = ({ name, quantity, category }) => {
  return (
   <ul>
    <li>
      Name: {name}
    </li>
    <li>
      buy {quantity} in the {category} category
    </li>
   </ul>
  );
}

export default Item;