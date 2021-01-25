import React, { InputHTMLAttributes } from 'react'
import StyledInput from '../StyledInput'
import StyledSelect from '../StyledSelect'

import './styles.css'

interface PageScheduleProps extends InputHTMLAttributes<HTMLInputElement>  {
    scheduleItems: {
        id: number;
        weekday: string;
        from: string;
        to: string;
        action: number;
    }[]
    alterSchedule: any
}

const Schedule: React.FC<PageScheduleProps> = ( { alterSchedule, scheduleItems,  ...rest } )  => {
    return (
        <article className="schedule">
            {scheduleItems.map((scheduleItem, index) => {
                return (
                    <div key={Math.random()} className="input-block">
                        <div className="schedule-item">
                            <StyledSelect 
                                name="weekday" 
                                label="Dia da Semana"
                                value={scheduleItem.weekday}
                                onChange={e => alterSchedule(index, 'weekday', e.target.value)}
                                options={[
                                    {id: '0', value: '0', label: 'Domingo'},
                                    {id: '1', value: '1', label: 'Segunda-Feira'},
                                    {id: '2', value: '2', label: 'Terça-Feira'},
                                    {id: '3', value: '3', label: 'Quarta-Feira'},
                                    {id: '4', value: '4', label: 'Quinta-Feira'},
                                    {id: '5', value: '5', label: 'Sexta-Feira'},
                                    {id: '6', value: '6', label: 'Sábado'}                    
                                ]}             
                            />

                            <StyledInput 
                                name="from" 
                                label="Das" 
                                type="time"
                                value={scheduleItem.from}
                                onChange={e => alterSchedule(index, 'from', e.target.value)}
                            />
                            <StyledInput 
                                name="to" 
                                label="Até" 
                                type="time"
                                value={scheduleItem.to}
                                onChange={e => alterSchedule(index, 'to', e.target.value)}
                            />
                        </div>     
                    </div>
                )
            })} 
        </article>
    )
}

export default Schedule