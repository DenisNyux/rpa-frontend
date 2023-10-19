'use client'
import { z } from 'zod'

function ApplicationForm() {

    const formSchema = z.object({
        name: z.string(),
    })

    return (
        <form className="flex flex-col my-6">
            <label htmlFor="name">ФИО</label>
            <input type="text" />
            <label htmlFor="">Профессиональные контакты</label>
            <input type="text" />
            <label htmlFor="">Отделение</label>
            <input type="text" />
            <label htmlFor="">Образование</label>
            <input type="text" />
            <label htmlFor="">Специальность</label>
            <input type="text" />
            <label htmlFor="">Ученая степень, если есть</label>
            <input type="text" />
            <label htmlFor="">Место работы</label>
            <input type="text" />
            <label htmlFor="">Тип</label>
            <input type="text" />
        </form>
    )
}

export default ApplicationForm