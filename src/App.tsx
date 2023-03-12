import React, {useState} from 'react';
import css from './App.module.css';
import {FlexWrapTablo} from './components/blocks/flexWrapTablo/FlexWrapTablo';
import {Toggler} from './components/Toggler/Toggler';
import dropHere from './assets/img/dropHere.svg';
import {useAppDispatch, useAppSelector} from './hooks/hooks';
import {deleteWidget, dropWidget, setToggle, WidgetsType} from './store/dnd-reducer';

function App() {
  const [item, setItem] = useState<WidgetsType>('');

  const { canvas, palette, toggle } = useAppSelector(state => state.dndReducer);
  const dispatch = useAppDispatch();

  const toggleHandler = () => {
    dispatch(setToggle({ value: !toggle }));
  };


  const dragStartItemHandler = (e: React.DragEvent, widgetType: any) => {
    setItem(widgetType);
    console.log(widgetType)
  };
  const dropHandler = (e: any, widget?: string) => {
    e.preventDefault()
    if (!canvas.includes(item)) {
      dispatch(dropWidget({ value: item }));
      e.target.style.backgroundColor = 'white';
    }
    e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2)'
    console.log(widget)
  };
  const dragOverItemHandler = (e: any, widget: WidgetsType) => {
    e.preventDefault()
    if (canvas.includes(widget)) {
      e.target.style.boxShadow = '0 6px 12px #8DB3FFFF'
    }
  }
  const dragLeaveItemHandler = (e: any, widget: WidgetsType) => {
    e.preventDefault()
    if (canvas.includes(widget)) {
      e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2)'
    }
  }
  const dragOverHandler = (e: any) => {
    e.preventDefault();
    if (!canvas.length) {
      e.target.style.backgroundColor = '#d1e0ff';
    }

  };

  const deleteHandler = (widgetType: string) => {
    dispatch(deleteWidget({ value: widgetType }));
  };
  const dragLeaveHandler = (e: any) => {
    e.preventDefault();
    e.target.style.backgroundColor = 'white';
  };

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
                  draggable={!canvas.includes(widget)}
                  onDragStart={e => dragStartItemHandler(e, widget)}
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

            onDragOver={dragOverHandler}
            onDragLeave={dragLeaveHandler}
          >
            {toggle && (
              <div className={css.dragHere}>
                {!canvas.length && (
                  <div>
                    <img src={dropHere} alt="dropHere" />
                    <p>Перетащите сюда</p>
                    <p>любой элемент из левой панели</p>
                  </div>
                )}
              </div>
            )}
            {canvas.map((widget, index) => {
              return (
                <FlexWrapTablo
                  onDoubleClick={() => toggle && deleteHandler(widget)}
                  key={index}
                  draggable={toggle}
                  onDragStart={e => dragStartItemHandler(e, widget)}
                  onDragOver={e=> dragOverItemHandler(e, widget)}
                  onDragLeave={e=> dragLeaveItemHandler(e, widget) }
                  // onDrop={e=> dropHandler(e, widget)}
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
