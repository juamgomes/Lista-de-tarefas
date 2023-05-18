import { useState } from "react";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([
    
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false    
    });
    setList(newList);
  }

  

  return (
    <div className="bg-zinc-700 text-zinc-100 min-h-screen">
      <div className="m-auto max-w-4xl p-3">
        <h1 className="m-0 font-semibold text-4xl p-0 text-center border-b border-zinc-600 pb-5">Lista de tarefas</h1>
        <AddArea onEnter={handleAddTask} />
        {list.map((Item, index) => (
          <ListItem key={index} item={Item} />
        ))}
      </div>
    </div>
  );
}

export default App;