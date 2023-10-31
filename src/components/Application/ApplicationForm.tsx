"use client";
import { useState } from "react";
import { z, ZodFormattedError } from "zod";
import { DepartmentsData } from "@/types/DepartmentsType";
import styles from "./ApplicationForm.module.css";
import { type } from "os";

type ApplicationFormProps = {
  departments: DepartmentsData;
};

type FormType = {
  name: string;
  contacts: string;
  otdelenie: number;
  education: string;
  spec: string;
  degree: string;
  workPlace: string;
  psychotherapyType: string;
};

function ApplicationForm({ departments }: ApplicationFormProps) {
  const [formData, setFormData] = useState<FormType>({
    name: "",
    contacts: "",
    otdelenie: 0,
    education: "",
    spec: "",
    degree: "",
    workPlace: "",
    psychotherapyType: "",
  });

  const [errorList, setErrorList] =
    useState<ZodFormattedError<FormType> | null>(null);

  const [uploadedImage, setUploadedImage] = useState<any>(null);

  const formSchema = z
    .object({
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
      otdelenie: z
        .number({ required_error: "Поле обязательно для заполнения" })
        .gt(0, "Выберите отделение"),
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
    })
    .required();

  const sendImage = async () => {

    if (!uploadedImage) {
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `bearer ${process.env.API_TOKEN}`);

    const formdata = new FormData();
    formdata.append("files", uploadedImage);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
    };

    const response = await fetch(`/api/upload`, requestOptions)
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    return response;
  };
  // console.log(errorList);
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
        <span className="text-red-500">
          {errorList?.name?._errors?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </span>
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
        <span className="text-red-500">
          {errorList?.contacts?._errors?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </span>
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
        <span className="text-red-500">
          {errorList?.otdelenie?._errors?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </span>
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
        <span className="text-red-500">
          {errorList?.education?._errors?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </span>
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
        <span className="text-red-500">
          {errorList?.spec?._errors?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </span>
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
        <span className="text-red-500">
          {errorList?.degree?._errors?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </span>
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
        <span className="text-red-500">
          {errorList?.workPlace?._errors?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </span>
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
        <span className="text-red-500">
          {errorList?.psychotherapyType?._errors?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </span>
      </div>
      <div>
        <label htmlFor="image">Фотография для сайта</label>
        <input
          type="file"
          id="image"
          accept=".png, .jpg, .jpeg, .gif, .webp, .bmp, .heic, .svg"
          // onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          //   setUploadedImage(e.target.files[0]);
          // }}
          onChange={(e: any): void => {
            setUploadedImage(e.target.files[0]);
          }}
        />
      </div>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          const sas = sendImage();
          console.log(sas)
          const validationResult = formSchema.safeParse(formData);
          if (!validationResult.success) {
            setErrorList(validationResult.error.format());
          }
        }}
      >
        Отправить
      </button>
    </form>
  );
}

export default ApplicationForm;
