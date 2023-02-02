import React, { useState, useRef } from "react";
import "./dndStyle.css";

export const DragNDrop = () => {
  const [childComponents, setChildComponents] = useState([
    { id: "1", content: "Child 1", x: 0, y: 0 },
    { id: "2", content: "Child 2", x: 0, y: 0 },
    { id: "3", content: "Child 3", x: 0, y: 0 },
  ]);

  const [draggedIndex, setDraggedIndex] = useState(null);
  const parentRef = useRef(null);
  const draggableRef = useRef(null);

  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
  };

  const handleDragEnd = (e) => {
    setDraggedIndex(null);
  };

  const handleDrag = (e) => {
    if (draggedIndex !== null) {
      const parentRect = parentRef.current.getBoundingClientRect();
      const draggableRect = draggableRef.current.getBoundingClientRect();
      let newX = e.clientX - parentRect.x - draggableRect.width / 2;
      let newY = e.clientY - parentRect.y - draggableRect.height / 2;
      newX = Math.max(
        0,
        Math.min(newX, parentRect.width - draggableRect.width)
      );
      newY = Math.max(
        0,
        Math.min(newY, parentRect.height - draggableRect.height)
      );

      // check if the dragged component is overlapping any other component
      let isOverlap = false;
      childComponents.forEach((child, i) => {
        if (i !== draggedIndex) {
          const rect1 = {
            x: newX,
            y: newY,
            width: draggableRect.width,
            height: draggableRect.height,
          };
          const rect2 = {
            x: child.x,
            y: child.y,
            width: draggableRect.width,
            height: draggableRect.height,
          };
          if (
            rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y
          ) {
            isOverlap = true;
          }
        }
      });

      if (!isOverlap) {
        // update the position of the dragged component
        const newChildComponents = [...childComponents];
        newChildComponents[draggedIndex].x = newX;
        newChildComponents[draggedIndex].y = newY;
        setChildComponents(newChildComponents);
      }
    }
  };

  return (
    <div
      ref={parentRef}
      onDrop={handleDragEnd}
      onDragOver={(e) => e.preventDefault()}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      {childComponents.map((child, index) => (
        <div
          key={child.id}
          ref={draggedIndex === index ? draggableRef : null}
          onDragStart={(e) => handleDragStart(e, index)}
          onDrag={handleDrag}
          draggable={true}
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            left: child.x,
            top: child.y,
            background: "lightgreen",
            userSelect: "none",
            zIndex: draggedIndex === index ? 1 : 0,
          }}
        >
          {child.content}
        </div>
      ))}
    </div>
  );
};

const DragNDropVertically = () => {
  const [childComponents, setChildComponents] = useState([
    { id: "1", content: "Child 1", x: 0, y: 0 },
    { id: "2", content: "Child 2", x: 0, y: 0 },
    { id: "3", content: "Child 3", x: 0, y: 0 },
  ]);

  const [draggedIndex, setDraggedIndex] = useState(null);
  const parentRef = useRef(null);
  const draggableRef = useRef(null);
  const margin = 10;

  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
  };

  const handleDragEnd = (e) => {
    if (draggedIndex !== null) {
      const newChildComponents = [...childComponents];
      let closestChild = null;
      let closestDistance = Number.MAX_SAFE_INTEGER;
      let align = "vertical";
      childComponents.forEach((child, i) => {
        if (i !== draggedIndex) {
          // calculate distance between the current child component and the dragged component
          const distance =
            Math.sqrt(
              Math.pow(child.x - newChildComponents[draggedIndex].x, 2) +
                Math.pow(child.y - newChildComponents[draggedIndex].y, 2)
            ) +
            (child.x - newChildComponents[draggedIndex].x === 0
              ? Math.abs(child.y - newChildComponents[draggedIndex].y)
              : Math.abs(child.x - newChildComponents[draggedIndex].x));
          if (distance < closestDistance) {
            closestChild = i;
            closestDistance = distance;
            align =
              child.x - newChildComponents[draggedIndex].x === 0
                ? "vertical"
                : "horizontal";
          }
        }
      });

      if (closestChild !== null) {
        if (align === "horizontal") {
          newChildComponents[draggedIndex].y =
            newChildComponents[closestChild].y;
          if (
            newChildComponents[draggedIndex].x >
            newChildComponents[closestChild].x
          ) {
            newChildComponents[draggedIndex].x =
              newChildComponents[closestChild].x +
              draggableRef.current.getBoundingClientRect().width +
              margin;
          } else {
            newChildComponents[draggedIndex].x =
              newChildComponents[closestChild].x -
              draggableRef.current.getBoundingClientRect().width -
              margin;
          }
        } else {
          newChildComponents[draggedIndex].x =
            newChildComponents[closestChild].x;
          if (
            newChildComponents[draggedIndex].y >
            newChildComponents[closestChild].y
          ) {
            newChildComponents[draggedIndex].y =
              newChildComponents[closestChild].y +
              draggableRef.current.getBoundingClientRect().height +
              margin;
          } else {
            newChildComponents[draggedIndex].y =
              newChildComponents[closestChild].y -
              draggableRef.current.getBoundingClientRect().height -
              margin;
          }
        }
      }
      setChildComponents(newChildComponents);
    }
    setDraggedIndex(null);
  };

  const handleDrag = (e) => {
    if (draggedIndex !== null) {
      const parentRect = parentRef.current.getBoundingClientRect();
      const draggableRect = draggableRef.current.getBoundingClientRect();
      let newX = e.clientX - parentRect.x - draggableRect.width / 2;
      let newY = e.clientY - parentRect.y - draggableRect.height / 2;
      newX = Math.max(
        0,
        Math.min(newX, parentRect.width - draggableRect.width)
      );
      newY = Math.max(
        0,
        Math.min(newY, parentRect.height - draggableRect.height)
      );

      // check if the dragged component is overlapping any other component
      let isOverlap = false;
      childComponents.forEach((child, i) => {
        if (i !== draggedIndex) {
          const rect1 = {
            x: newX,
            y: newY,
            width: draggableRect.width,
            height: draggableRect.height,
          };
          const rect2 = {
            x: child.x,
            y: child.y,
            width: draggableRect.width,
            height: draggableRect.height,
          };
          if (
            rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y
          ) {
            isOverlap = true;
          }
        }
      });

      if (!isOverlap) {
        // update the position of the dragged component
        const newChildComponents = [...childComponents];
        newChildComponents[draggedIndex].x = newX;
        newChildComponents[draggedIndex].y = newY;
        setChildComponents(newChildComponents);
      }
    }
  };

  return (
    <div
      ref={parentRef}
      onDrop={handleDragEnd}
      onDragOver={(e) => e.preventDefault()}
      style={{
        position: "relative",
        width: "95%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        // alignItems: "flex-start",
        border: "1px solid red",
        margin: "2px",
      }}
    >
      {childComponents.map((child, index) => (
        <div
          className="card"
          key={child.id}
          ref={draggedIndex === index ? draggableRef : null}
          onDragStart={(e) => handleDragStart(e, index)}
          onDrag={handleDrag}
          draggable={true}
          style={{
            left: child.x,
            top: child.y,
            margin: margin,

            zIndex: draggedIndex === index ? 1 : 0,
          }}
        >
          {child.content}
        </div>
      ))}
    </div>
  );
};

export default DragNDropVertically;

const DraggableItem = ({ id, index, moveItem, children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const ref = useRef(null);

  const handleDragStart = () => {
    setIsDragging(true);
    moveItem(id, index);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    if (isDragging) {
      const hoverIndex = e.target.dataset.index;
      if (hoverIndex !== index) {
        moveItem(id, hoverIndex);
      }
    }
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: isDragging ? 0 : 1,
        height: "200px",
        width: "180px",
        border: "1px solid",
        margin: "5px",
      }}
      data-index={index}
      draggable={true}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragEnter={handleDrop}
    >
      {children}
    </div>
  );
};

export const DraggableParent = ({ children }) => {
  const [items, setItems] = useState(children);

  const moveItem = (id, atIndex) => {
    const item = items.find((i) => i.id === id);
    const index = items.indexOf(item);
    items.splice(index, 1);
    items.splice(atIndex, 0, item);
    setItems([...items]);
  };

  return (
    <div className="draggable-parent">
      {items.map((item, index) => (
        <DraggableItem key={item.id} index={index} moveItem={moveItem}>
          {item.content}
        </DraggableItem>
      ))}
    </div>
  );
};
