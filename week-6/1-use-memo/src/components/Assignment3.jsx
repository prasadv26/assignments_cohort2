import React, { useState, useMemo } from "react";
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

<<<<<<< HEAD
const Assignment3 = () => {
  const [items, setItems] = useState([
    { name: "Chocolates", value: 10 },
    { name: "Chips", value: 20 },
    { name: "Onion", value: 30 },
    { name: "Tomato", value: 90 },
    // Add more items as needed
  ]);
=======
export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        // Add more items as needed
    ]);
>>>>>>> 364f8fcff0a2e06f07b72828106c01826eec8e42

  // Your code starts here
  const totalValue = useMemo(
    () => items.reduce((accum, curr) => (accum += curr.value), 0),
    [items]
  );

  // Your code ends here
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Price: ${item.value}
          </li>
        ))}
      </ul>
      <p>Total Value: {totalValue}</p>
    </div>
  );
};
<<<<<<< HEAD

export default Assignment3;
=======
>>>>>>> 364f8fcff0a2e06f07b72828106c01826eec8e42
