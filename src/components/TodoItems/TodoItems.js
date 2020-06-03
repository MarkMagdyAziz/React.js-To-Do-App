import React from "react";
import "./TodoItems.css";
//stateless component
const TodoItems = (props) => {
  const { items, deleteItem } = props;
  let length = items.length;
  // Valdiation empty items
  const ListItems = length ? (
    items.map((item) => {
      return (
        <div key={item.id}>
          <span className="name"> {item.name}</span>
          <span className="age"> {item.age}</span>
          <span className="action icon" onClick={() => deleteItem(item.id)}>
            &times;
          </span>
        </div>
      );
    })
  ) : (
    <p>No item to show</p>
  );
  return (
    <div className="ListItems">
      <div>
        <span className="name title">Name</span>
        <span className="age title">Age</span>
        <span className="action title">Action</span>
        {ListItems}
      </div>
    </div>
  );
};

export default TodoItems;
