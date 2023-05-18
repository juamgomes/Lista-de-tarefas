import { Item } from "../types/Item"
import { useState } from "react"
import classNames from 'classnames';


type Props = {
  item: Item
}

export const ListItem = ({ item }: Props) => {
  const [isChecked, setIsChecked] = useState( item.done );
  const labelClassName = classNames('text-zinc-100', {
    'line-through': isChecked,
  });
  
  // ...
  
  <label className={labelClassName}>{item.name}</label>
  
  
  return (
    <div className="flex bg-zinc-600 p-3 rounded-xl mb-3 items-center gap-5">
      <input 
        className="w-6 h-6" 
        type="checkbox" 
        checked={isChecked} 
        onChange={e => setIsChecked(e.target.checked)}
      /> 
      <label className={labelClassName}>{item.name}</label>
    </div>
  )
}