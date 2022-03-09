function gridMaker(){
    makeRows(20);
}

function clearGrid(){
    removeRows(20);
    rowCount=0;
    makeRows(20);
}

function makeRows(n){
    let i=0;
    for(i;i<n;i++){
        let row=columnCellMaker(i,50);
        try {
            gridArea.appendChild(row);
        } catch (error) {
        }
    }
}

function removeRows(n){
    for(i=0;i<n;i++){
        try {
            gridArea.removeChild(gridArea.children[0]);
        } catch (error) {
        }
    }
}