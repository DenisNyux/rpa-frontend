"use client";
import { useState } from "react";
import { z } from "zod";
import { DepartmentsData } from "@/types/DepartmentsType";
import styles from "./ApplicationForm.module.css";
import { type } from "os";

type ApplicationFormProps = {
  departments: DepartmentsData;
};

type FormType = {
  name: string | null;
  contacts: string | null;
  otdelenie: number | null;
  education: string | null;
  spec: string | null;
  degree: string | null;
  workPlace: string | null;
  psychotherapyType: string | null;
  imageFile: FileList | null;
};

function ApplicationForm({ departments }: ApplicationFormProps) {
  const [formData, setFormData] = useState<FormType>({
    name: null,
    contacts: null,
    otdelenie: null,
    education: null,
    spec: null,
    degree: null,
    workPlace: null,
    psychotherapyType: null,
    imageFile: null,
  });

  const formSchema = z.object({
    name: z
      .string({
        required_error: "Поле обязательно для заполнения",
        invalid_type_error: "Неверный формат",
      })
      .min(3, "Минимум 3 символа"),
    contacts: z
      .string({
        required_error: "Поле обязательно для заполнения",
        invalid_type_error: "Неверный формат",
      })
      .min(
        3,
        'Минимум 3 символа. Если вы не хотите указывать личные данные напишите "Нет"'
      ),
    otdelenie: z.number({ required_error: "Поле обязательно для заполнения" }),
    education: z
      .string({ required_error: "Поле обязательно для заполнения" })
      .min(
        5,
        'Минимум 5 символов. Если вы не хотите указывать данные об образовании напишите "Высшее"'
      ),
    spec: z
      .string({ required_error: "Поле обязательно для заполнения" })
      .min(3, "Минимум 3 символа"),
    degree: z
      .string({ required_error: "Поле обязательно для заполнения" })
      .min(
        3,
        'Минимум 3 символа. Если у вас нет ученой степени напишите "Нет"'
      ),
    workPlace: z
      .string({ required_error: "Поле обязательно для заполнения" })
      .min(3, "Минимум 5 символов"),
    psychotherapyType: z
      .string({ required_error: "Поле обязательно для заполнения" })
      .min(3, "Минимум 3 символа"),
    imageFile: z.instanceof(FileList),
  });

  // console.log(formData);
  return (
    <form
      className={`flex flex-col my-6 mt-6 mb-12 mx-36 ${styles.applicationForm}`}
    >
      <div>
        <label htmlFor="name">ФИО</label>
        <input
          type="text"
          id="name"
          onInput={(e) =>
            setFormData({
              ...formData,
              name: (e.target as HTMLInputElement).value,
            })
          }
        />
      </div>
      <div>
        <label htmlFor="contacts">Профессиональные контакты</label>
        <input
          type="text"
          id="contacts"
          onInput={(e) =>
            setFormData({
              ...formData,
              contacts: (e.target as HTMLInputElement).value,
            })
          }
        />
      </div>
      <div>
        <label htmlFor="department">Отделение</label>
        <select
          id="department"
          onChange={(e) =>
            setFormData({ ...formData, otdelenie: Number(e.target.value) })
          }
        >
          <option value="">Выберите отделение</option>
          {departments.data.map((department) => (
            <option key={department.id} value={department.id}>
              {department.attributes.depTitle}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="education">Образование</label>
        <input
          type="text"
          id="education"
          onInput={(e) =>
            setFormData({
              ...formData,
              education: (e.target as HTMLInputElement).value,
            })
          }
        />
      </div>
      <div>
        <label htmlFor="spec">Специальность</label>
        <input
          type="text"
          id="spec"
          onInput={(e) =>
            setFormData({
              ...formData,
              spec: (e.target as HTMLInputElement).value,
            })
          }
        />
      </div>
      <div>
        <label htmlFor="degree">Ученая степень, если есть</label>
        <input
          type="text"
          id="degree"
          onInput={(e) =>
            setFormData({
              ...formData,
              degree: (e.target as HTMLInputElement).value,
            })
          }
        />
      </div>
      <div>
        <label htmlFor="workPlace">Место работы</label>
        <input
          type="text"
          id="workPlace"
          onInput={(e) =>
            setFormData({
              ...formData,
              workPlace: (e.target as HTMLInputElement).value,
            })
          }
        />
      </div>
      <div>
        <label htmlFor="psychotherapyType">Тип психотерапии</label>
        <input
          type="text"
          id="psychotherapyType"
          onInput={(e) =>
            setFormData({
              ...formData,
              psychotherapyType: (e.target as HTMLInputElement).value,
            })
          }
        />
      </div>
      <div>
        <label htmlFor="image">Фотография для сайта</label>
        <input
          type="file"
          id="image"
          accept=".png, .jpg, .jpeg, .gif, .webp, .bmp, .heic, .svg"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            setFormData({ ...formData, imageFile: e.target.files });
          }}
        />
      </div>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          console.log(formData);
          console.log(formSchema.safeParse(formData));
        }}
      >
        Отправить
      </button>
    </form>
  );
}

export default ApplicationForm;
