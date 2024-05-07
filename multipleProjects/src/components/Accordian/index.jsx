import { useState } from "react";
import data from "./data";
import './style.css';

export default function Accordion() {
  const [selected, setSelected] = useState(null);
    const [enableMultiselection, setEnableMultiSelecton] = useState(false);
    const [multiple, setMultiple] = useState([])
    

  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId);
      setSelected(getCurrentId===selected ? null : getCurrentId);
      
    }
    
    function handleMultipleSelection(getCurrentId)
    {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId=cpyMultiple.indexOf(getCurrentId)
        console.log(findIndexOfCurrentId)
        if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
        else {
            cpyMultiple.splice(findIndexOfCurrentId, 1)
        };
        console.log(multiple)
        setMultiple(cpyMultiple)
    }

  return (
      <div className="wrapper">
          <button onClick={()=>setEnableMultiSelecton(!enableMultiselection)}>Enable Multi Selection</button>
      <div className="accordian"> 
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                      onClick={
                          enableMultiselection ?
                              () => handleMultipleSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
                  </div >
                  {
                      enableMultiselection ? multiple.indexOf(dataItem.id) !== -1 && (
                          <div className="content">{dataItem.answer}</div>)
                              : selected === dataItem.id &&
                         ( <div className="content">{dataItem.answer}</div>)
                  }
                 
            </div>
          ))
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  );
}
