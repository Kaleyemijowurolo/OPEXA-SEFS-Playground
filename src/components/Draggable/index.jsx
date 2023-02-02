// Create a draggable React component
import React from "react";
import { useDrag } from "react-dnd";
import { DragDropContext } from "react-beautiful-dnd";

const DragComponent = (props) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: "COMPONENT" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return <DragDropContext ref={drag}>{props.children}</DragDropContext>;
};

export default DragComponent;
