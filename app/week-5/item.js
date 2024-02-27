const Item = ({ name, quantity, category }) => {
  return (
   <ul className="bg-gray-400 p-4 w-1/3 mt-6 mx-4 rounded-xl">
    <li className="font-bold text-xl">
      Name: {name}
    </li>
    <li>
      buy {quantity} in the {category} category
    </li>
   </ul>
  );
}

export default Item;