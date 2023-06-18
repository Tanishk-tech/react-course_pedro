export const Datasetconfig=({dataConfig,SetDataConfig,id}) => {
    const handleConfig=(e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        let temp=Object.assign({}, dataConfig[id-1]);
        temp[e.target.name]=e.target.value;

        let tempArr=[...dataConfig];
        tempArr[id-1]=temp;
        SetDataConfig(tempArr);
    }

    return (
        <form className="addDataSet" >
            <div className="dataSetConfig">
                <label for="dataSet-Name" style={{width:"10%"}}>Name:</label>
                <input type="text" id="dataSet-Name" name="legend" style={{width:"40%"}} value={dataConfig[id-1].legend} onChange={handleConfig}/>
            </div>
            <div className="dataSetConfig dataSetColor">
                <label for="dataSet-background">Background Color :</label>
                <div className="dataSetInput">
                    <input type="color" id="dataSet-background" name="backgroundcolor" value={dataConfig[id-1].background_color} onChange={handleConfig} />
                </div>
            </div>
            <div className="dataSetConfig dataSetColor">
                <label for="dataSet-border">border Color :</label>
                <div className="dataSetInput">
                    <input type="color" id="dataSet-border" name="bordercolor" value={dataConfig[id-1].border_color} onChange={handleConfig} />
                </div>
            </div>
            <div className="dataSetConfig dataSetColor">
                <label for="dataSet-hover-background">Hover Background Color :</label>
                <div className="dataSetInput">
                    <input type="color" id="dataSet-hover-background" name="hoverBackgroundColor" value={dataConfig[id-1].hover_background_color} onChange={handleConfig}/>
                </div>
            </div>
            <div className="dataSetConfig dataSetColor">
                <label for="dataSet-hover-border">Hover Border Color :</label>
                <div className="dataSetInput">
                    <input type="color" id="dataSet-hover-border" name="hoverBorderColor" value={dataConfig[id-1].hover_border_color} onChange={handleConfig}/>
                </div>
            </div>
        </form>
    )
}