import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/ìconButton";

export default props => {

  const keyHandler = (e) => {
    if (e.key === 'Enter'){
      e.shiftKey ? props.handlerSearch() : props.handlerAdd()
    }else if (e.key === 'Escape'){
      props.handlerClear()
    }
  }

  return (
    <div role="form" className="todoForm">
      <Grid cols="12 9 10">
        <input
          id="description"
          className="form-control"
          placeholder="Adicione uma tarefa"
          onKeyUp={keyHandler}
          onChange={props.handlerChange}
          value={props.description}
        />
      </Grid>
      <Grid cols="12 3 2">
        <IconButton style="primary" icon="plus" onClick={props.handlerAdd} />
        <IconButton style="info" icon="search" onClick={props.handlerSearch} />
        <IconButton style="default" icon="close" onClick={props.handlerClear} />
      </Grid>
    </div>
  );
};
