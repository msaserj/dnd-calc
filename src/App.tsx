import React, { useState } from 'react';
import css from './App.module.css';
import { FlexWrapTablo } from './components/blocks/flexWrapTablo/FlexWrapTablo';
import { Toggler } from './components/Toggler/Toggler';
import dropHere from './assets/img/dropHere.svg';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { deleteWidget, dropWidget, setToggle } from './store/dnd-reducer';

function App() {
  const [item, setItem] = useState<string>('');

  const { canvas, palette, toggle } = useAppSelector(state => state.dndReducer);
  const dispatch = useAppDispatch();

  const toggleHandler = () => {
    dispatch(setToggle({ value: !toggle }));
  };

  const handlerOnDrag = (e: React.DragEvent, widgetType: any) => {
    setItem(widgetType);
  };

  const dropHandler = (e: any) => {
    if (!canvas.includes(item)) {
      dispatch(dropWidget({ value: item }));
      e.target.style.backgroundColor = 'white';
    }
  };

  const dragOverHandler = (e: any) => {
    e.preventDefault();
    e.target.style.backgroundColor = '#d1e0ff';
  };

  const deleteHandler = (widgetType: string) => {
    dispatch(deleteWidget({ value: widgetType }));
  };
  const dragLeaveHandler = (e: any) => {
    e.preventDefault();
    e.target.style.backgroundColor = 'inherit';
  };
  const dragEndHandler = (e: any) => {
    e.preventDefault();
    e.target.style.backgroundColor = 'inherit';
  };
  console.log(canvas);
  return (
    <div className={css.app}>
      <div className={css.blocks}>
        <div>
          <div className={css.spacer} />
          <div className={`${css.block} ${toggle ? css.dash : ''}`}>
            {palette.map((widget, index) => {
              return (
                <FlexWrapTablo
                  key={index}
                  draggable={toggle}
                  onDragStart={e => handlerOnDrag(e, widget)}
                  disabled={true}
                  widgetType={widget}
                  opacity={canvas.includes(widget)}
                  editable={toggle}
                  visibility={!toggle}
                />
              );
            })}
          </div>
        </div>

        <div>
          <Toggler disabled={toggle} toggleHandler={toggleHandler} />
          <div
            className={`${css.block} ${toggle ? css.dash : ''}`}
            onDrop={dropHandler}
            onDragEnd={e => dragEndHandler(e)}
            onDragOver={dragOverHandler}
            onDragLeave={e => dragLeaveHandler(e)}
          >
            {toggle && (
              <div className={css.dragHere}>
                {!canvas.length && (
                  <>
                    <img src={dropHere} alt="dropHere" />
                    <p>Перетащите сюда</p>
                    <p>любой элемент из левой панели</p>
                  </>
                )}
              </div>
            )}
            {canvas.map((widget, index) => {
              return (
                <FlexWrapTablo
                  onDoubleClick={() => toggle && deleteHandler(widget)}
                  key={index}
                  draggable={toggle}
                  onDragStart={e => handlerOnDrag(e, widget)}
                  disabled={toggle}
                  widgetType={widget}
                  editable={toggle}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
