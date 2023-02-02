import React, { Component, useState } from "react";
import "./homeStyle.css";
import DragNDropVertically, {
  DraggableParent,
} from "../../components/DrapNDrop";
import { NikeShoe, AbsoluteCard, MinimizableCard } from "../../components/Card";

const data = [
  { id: 1, content: <div>Item 1</div> },
  { id: 2, content: <div>Item 2</div> },
  { id: 3, content: <div>Item 3</div> },
];

//working version
export default class DragAndDrop extends Component {
  state = {
    tasks: [
      { name: "Learn Next", category: "wip", bgcolor: "#fff" },
      { name: "React", category: "wip", bgcolor: "#fff" },
      { name: "Python", category: "complete", bgcolor: "#fff" },
      { name: "Learn Angular", category: "wip", bgcolor: "#fff" },
      { name: "Angular", category: "wip", bgcolor: "#fff" },
      { name: "Vue", category: "complete", bgcolor: "#fff" },
      { name: "Learn Nuxt", category: "wip", bgcolor: "#fff" },
      { name: "Html", category: "wip", bgcolor: "#fff" },
      { name: "CSS", category: "complete", bgcolor: "#fff" },
    ],
  };

  onDragStart = (ev, id) => {
    console.log("dragstart:", id);
    ev.dataTransfer.setData("id", id);
  };

  onDragOver = (ev) => {
    ev.preventDefault();
  };

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let tasks = this.state.tasks.filter((task) => {
      if (task.name === id) {
        task.category = cat;
      }
      return task;
    });

    this.setState({
      ...this.state,
      tasks,
    });
  };

  render() {
    var tasks = {
      wip: [],
      complete: [],
      main: [],
    };

    this.state.tasks.forEach((t) => {
      tasks[t.category].push(
        <div
          key={t.name}
          onDragStart={(e) => this.onDragStart(e, t.name)}
          draggable
          className="draggable"
          style={{ backgroundColor: t.bgcolor }}
        >
          {t.name}
        </div>
      );
    });

    return (
      <div className="container-drag">
        <div
          className="wip"
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => {
            this.onDrop(e, "wip");
          }}
        >
          {/* {tasks.wip} */}
          {tasks.wip.map((task, index) => (
            <div key={task.id} onDrop={(e) => this.onDrop(e, "wip", index)}>
              {task}
            </div>
          ))}
        </div>
        {/* <div className="main center">
         
        </div> */}
        <div
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => {
            this.onDrop(e, "main");
          }}
          className="main center"
        >
          <div>
            <MinimizableCard />
          </div>
          <div>
            <MinimizableCard />
          </div>
          <hr className="divider" />
          <div>
            <AbsoluteCard />
          </div>
          <hr className="divider" />

          <div>
            <NikeShoe />
          </div>
          {/* <DragNDropVertically /> */}
          {tasks.main}
        </div>

        <div
          className="droppable"
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => {
            this.onDrop(e, "complete");
          }}
        >
          {tasks.complete}
        </div>
      </div>
    );
  }
}

// chatgpt version
// export default class DragAndDrop extends Component {
//   state = {
//     tasks: [
//       { name: "Learn Next", category: "wip", bgcolor: "#fff", id: 1 },
//       { name: "React", category: "wip", bgcolor: "#fff", id: 2 },
//       { name: "Python", category: "complete", bgcolor: "#fff", id: 3 },
//       { name: "Learn Angular", category: "wip", bgcolor: "#fff", id: 4 },
//       { name: "Angular", category: "wip", bgcolor: "#fff", id: 5 },
//       { name: "Vue", category: "complete", bgcolor: "#fff", id: 6 },
//       { name: "Learn Nuxt", category: "wip", bgcolor: "#fff", id: 7 },
//       { name: "Html", category: "wip", bgcolor: "#fff", id: 8 },
//       { name: "CSS", category: "complete", bgcolor: "#fff", id: 9 },
//     ],
//     draggedTask: null, // added a state variable to keep track of the task being dragged
//     draggedTaskIndex: null, // added a state variable to keep track of the index of the task being dragged
//   };

//   onDragStart = (ev, id, index) => {
//     console.log("dragstart:", id);
//     ev.dataTransfer.setData("id", id);
//     this.setState({
//       draggedTask: id,
//       draggedTaskIndex: index,
//     });
//   };

//   onDragOver = (ev) => {
//     ev.preventDefault();
//   };

//   onDrop = (ev, cat, index) => {
//     let id = ev.dataTransfer.getData("id");
//     let tasks = [...this.state.tasks];
//     let tempTask = tasks[this.state.draggedTaskIndex];
//     tasks[this.state.draggedTaskIndex] = tasks[index];
//     tasks[index] = tempTask;
//     this.setState({
//       tasks,
//       draggedTask: null,
//       draggedTaskIndex: null,
//     });
//   };

//   render() {
//     var tasks = {
//       wip: [],
//       complete: [],
//       main: [],
//     };

//     this.state.tasks.forEach((t, index) => {
//       tasks[t.category].push(
//         <div
//           key={t.id}
//           onDragStart={(e) => this.onDragStart(e, t.id, index)}
//           draggable
//           className="draggable"
//           style={{ backgroundColor: t.bgcolor }}
//         >
//           {t.name}
//         </div>
//       );
//     });

//     return (
//       <div className="container-drag">
//         <div
//           className="wip"
//           onDragOver={(e) => this.onDragOver(e)}
//           onDrop={(e) => {
//             this.onDrop(e, "wip");
//           }}
//         >
//           {tasks.wip.map((task, index) => (
//             <div key={task.id} onDrop={(e) => this.onDrop(e, "wip", index)}>
//               {task}
//             </div>
//           ))}
//         </div>
//         <div
//           onDragOver={(e) => this.onDragOver(e)}
//           onDrop={(e) => {
//             this.onDrop(e, "main");
//           }}
//           className="main center"
//         >
//           {tasks.main.map((task, index) => (
//             <div key={task.id} onDrop={(e) => this.onDrop(e, "main", index)}>
//               {task}
//             </div>
//           ))}
//         </div>

//         <div
//           className="droppable"
//           onDragOver={(e) => this.onDragOver(e)}
//           onDrop={(e) => {
//             this.onDrop(e, "complete");
//           }}
//         >
//           {tasks.complete.map((task, index) => (
//             <div
//               key={task.id}
//               onDrop={(e) => this.onDrop(e, "complete", index)}
//             >
//               {task}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
