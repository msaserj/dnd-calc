import React, {useState} from 'react';
import css from './App.module.css'
import {Display} from "./components/blocks/Display/Display";
import {FlexWrapTablo, WidgetType} from "./components/blocks/flexWrapTablo/FlexWrapTablo";
import {Toggler} from "./components/Toggler/Toggler";

function App() {
    const [toggle, setToggle] = useState<boolean>(true)
    const [widget, setWidget] = useState<WidgetType[]>( ["display", "operators", "numbers", "equal"])
    const [widgets, setWidgets] = useState<WidgetType[]>([])

    const handlerOnDrag = (e: React.DragEvent, widgetType: any) => {
        e.dataTransfer.setData('widgetType', widgetType)
    }

    const handlerOnDrop = (e: React.DragEvent) => {
        const widgetType = e.dataTransfer.getData('widgetType') as any
        console.log("aaa", widgetType)
        if (!widgets.includes(widgetType)) {
            setWidgets([...widgets, widgetType])
            setWidget(widget.filter(el => el !== widgetType))
        }

    }
    const handlerDragOver = (e: React.DragEvent) => {
      e.preventDefault()
    }

    return (
        <div className={css.app}>
            <div className={css.blocks}>
                <div className={`${css.block} ${toggle ? css.dash : ''}`}>
                    {widget.map((widget, index) => {
                        return  <FlexWrapTablo
                            key={index}
                            draggable={toggle}
                            onDragStart={(e)=> handlerOnDrag(e, widget)}
                            disabled={!toggle}
                            widgetType={widget}
                            opacity>
                            <Display disabled={toggle}/>
                        </FlexWrapTablo>
                    })}
                </div>
                <div>
                   <Toggler disabled={toggle} toggleHandler={()=>setToggle(!toggle)}/>
                    <div className={`${css.block} ${toggle ? css.dash : ''}`} onDrop={handlerOnDrop} onDragOver={handlerDragOver}>

                        {widgets.map((widget, index) => {
                            return  <FlexWrapTablo
                                key={index}
                                draggable={toggle}
                                onDragStart={(e)=> handlerOnDrag(e, widget)}
                                disabled={toggle}
                                widgetType={widget} opacity={false}>
                                <Display disabled={toggle}/>
                            </FlexWrapTablo>
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
