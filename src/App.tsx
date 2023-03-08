import React, { useState } from 'react';
import css from './App.module.css';
import { FlexWrapTablo, WidgetType } from './components/blocks/flexWrapTablo/FlexWrapTablo';
import { Toggler } from './components/Toggler/Toggler';

function App() {
  const [toggle, setToggle] = useState<boolean>(true);
  const [widget, setWidget] = useState<WidgetType[]>(['display', 'operators', 'numbers', 'equal']);
  const [widgets, setWidgets] = useState<WidgetType[]>([]);

  const handlerOnDrag = (e: React.DragEvent, widgetType: any) => {
    e.dataTransfer.setData('widgetType', widgetType);
  };

  const handlerOnDrop = (e: React.DragEvent) => {
    const widgetType = e.dataTransfer.getData('widgetType') as any;
    if (!widgets.includes(widgetType)) {
      setWidgets([...widgets, widgetType]);
      setWidget(widget.filter(el => el !== widgetType));
    }
  };
  const handlerDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  const deleteHandler = (widgetType: WidgetType) => {
    if (!widget.includes(widgetType)) {
      setWidgets(widgets.filter(el => el !== widgetType));
      setWidget([...widget, widgetType]);
    }
  };
  return (
    <div className={css.app}>
      <div className={css.blocks}>
        <div>
          <div className={css.spacer} />
          <div className={`${css.block} ${toggle ? css.dash : ''}`}>
            {widget.map((widget, index) => {
              return (
                <FlexWrapTablo
                  key={index}
                  draggable={toggle}
                  onDragStart={e => handlerOnDrag(e, widget)}
                  disabled={true}
                  widgetType={widget}
                  opacity={toggle}
                />
              );
            })}
          </div>
        </div>

        <div>
          <Toggler disabled={toggle} toggleHandler={() => setToggle(!toggle)} />
          <div className={`${css.block} ${toggle ? css.dash : ''}`} onDrop={handlerOnDrop} onDragOver={handlerDragOver}>
            {toggle && (
              <div className={css.dragHere}>
                <p>Перетащите сюда</p>
                <p>любой элемент из левой панели</p>
              </div>
            )}
            {widgets.map((widget, index) => {
              return (
                <FlexWrapTablo
                  onDoubleClick={() => toggle && deleteHandler(widget)}
                  key={index}
                  draggable={toggle}
                  onDragStart={e => handlerOnDrag(e, widget)}
                  disabled={toggle}
                  widgetType={widget}
                  opacity={toggle}
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
