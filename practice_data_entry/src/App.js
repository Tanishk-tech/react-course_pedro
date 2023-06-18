//data part of summer project

import './App.css';
import { useState } from 'react';
import {Dataset} from "./Dataset";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

function App() {
  const [Number ,SetNumber]=useState(0);
  const [dataSetList,setDataSetList]=useState([]);
  const [dataConfig,SetDataConfig]=useState([]);

  // console.log(dataSetList);

  const addDataSet=() => {
    SetNumber(Number+1);
    const obj={
      content:Number,
      id:dataSetList.length===0 ? 1 : dataSetList[dataSetList.length -1].id +1
    }
    setDataSetList([...dataSetList,obj]);

    console.log(Number);
    const obj2={
      legend : `series ${Number+1}`,
      background_color : "#fff",
      border_color:"#fff",
      border_hover_color:"#fff",
      border_hover_background_color:"#fff",
    }

    SetDataConfig([...dataConfig,obj2]);
  }

  const deleted=(id) =>{

      setDataSetList(dataSetList.filter((item) => {
        return (
          // console.log(item.id);
          item.id!==id
        )
      })
    )
  }

  function handleOnDragEnd(result){
    if(!result.destination) return;

    const items=Array.from(dataSetList);
    const [reorderedItem]=items.splice(result.source.index,1);

    items.splice(result.destination.index,0,reorderedItem);

    setDataSetList(items);
  }

  return (
    <div className="App">
      <div className="addData">
        <div>
          <button className="addLegend" onClick={addDataSet}>ADD DATASET</button>
        </div>

        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="dataSetList">
            {(provided)=> {
              <div className="draggableArea" {...provided.droppableProps} innerRef={provided.innerRef}>
                {dataSetList.map((obj,index) => {
                  return (
                    <Draggable key={obj.id} draggableId={obj.id} index={index}>
                      {(provided) => (
                        <Dataset key={obj.id} index={index}  id={obj.id} deleted={deleted} dataConfig={dataConfig} SetDataConfig={SetDataConfig} dataSetList={dataSetList} setDataSetList={setDataSetList} innerRef={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} />
                      )}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </div>
            }}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;

{/* <div class="addData">
                
                <div>
                    <button class="addLegend">ADD DATASET</button>
                </div>
                <div>
                    <button class="dataSets">DATASET-1</button>
                </div>
                <form class="addDataSet">
                    <div class="dataSetConfig">
                        <label for="dataSet-Name" style="width: 10%;">Name:</label>
                        <input type="text" id="dataSet-Name" name="name" style="width: 40%;">
                    </div>
                    <div class="dataSetConfig dataSetColor">
                        <label for="dataSet-background">Background Color :</label>
                        <div class="dataSetInput">
                            <input type="color" id="dataSet-background" name="backgroundcolor">
                        </div>
                    </div>
                    <div class="dataSetConfig dataSetColor">
                        <label for="dataSet-border">border Color :</label>
                        <div class="dataSetInput">
                            <input type="color" id="dataSet-border" name="bordercolor">
                        </div>
                    </div>
                    <div class="dataSetConfig dataSetColor">
                        <label for="dataSet-hover-background">Hover Background Color :</label>
                        <div class="dataSetInput">
                            <input type="color" id="dataSet-hover-background" name="hoverBackgroundColor">
                        </div>
                    </div>
                    <div class="dataSetConfig dataSetColor">
                        <label for="dataSet-hover-border">Hover Border Color :</label>
                        <div class="dataSetInput">
                            <input type="color" id="dataSet-hover-border" name="hoverBorderColor">
                        </div>
                    </div>
                </form>
            </div> */}
