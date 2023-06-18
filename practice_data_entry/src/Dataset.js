import { useState ,useRef } from "react"
import { Datasetconfig } from "./Datasetconfig";
import { DragDropContext,Droppable,Draggable } from "react-beautiful-dnd";

export const Dataset=({id,index,deleted,dataConfig,SetDataConfig , dataSetList,setDataSetList}) => {
    const [showConfig,setShowConfig]=useState(false);

    const dataSetConfig=() => {
        setShowConfig(!showConfig);
    }

    return (
        <div className="datasetWrapper">
            <button className="dataSets" onClick={dataSetConfig} >DATASET-{index+1}</button>
            <button onClick={() => deleted(id)}>remove</button>
            {showConfig && <Datasetconfig dataConfig={dataConfig} SetDataConfig={SetDataConfig} id={id} />}
        </div>
    )
}