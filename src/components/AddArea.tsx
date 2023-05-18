import { AiOutlinePlusSquare } from "react-icons/ai";
import { useState, KeyboardEvent } from "react";

type Props = {
  onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState('')

  const handleKayUp = (e: KeyboardEvent) => {
    if(e.code ===  'Enter' && inputText !== '') {
        onEnter(inputText);
        setInputText('');
    }
  }

  return (
    <div className="border border-zinc-500 rounded-xl p-3 my-5 flex items-center gap-5">
      <div className="font-semibold text-4xl cursor-pointer"><AiOutlinePlusSquare/></div>
      <input 
      className="border-0 bg-transparent outline-none text-zinc-50 text-lg flex-1"
      type="text" 
      placeholder="Adicione uma tarefa"
      value={inputText}
      onChange={e=>setInputText(e.target.value)}
      onKeyUp={handleKayUp}
      />
    </div>
  );
}