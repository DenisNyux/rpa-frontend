"use client";
import { useEffect, useState } from "react";
import { z, ZodFormattedError } from "zod";
import md5 from "md5";

import styles from "./PaymentForm.module.css";
import { type } from "os";

type PaymentFormProps = {
  merchantId: string | undefined;
  merchantPassword: string | undefined;
};

type FormType = {
  name: string;
  amount: number;
};

function PaymentForm({ merchantId, merchantPassword }: PaymentFormProps) {
  const [formData, setFormData] = useState<FormType>({
    name: "",
    amount: 2000,
  });
  const [resultLink, setResultLink] = useState<string | undefined>(undefined);
  const [errorList, setErrorList] =
    useState<ZodFormattedError<FormType> | null>();

  const [isPayButtonDisabled, setIsPayButtonDisabled] = useState(true);

  const formSchema = z
    .object({
      name: z
        .string({
          required_error: "Поле обязательно для заполнения",
          invalid_type_error: "Неверный формат",
        })
        .min(3, "Введите свое имя, фамилию и отчество кириллицей")
        .refine(
          (value) =>
            /^([А-ЯЁ][а-яё]+(?:[\s-][А-ЯЁ][а-яё]+)?)\s+([А-ЯЁ][а-яё]+)\s+([А-ЯЁ][а-яё]+)$/.test(
              value
            ),
          "Поле должно содержать ФИО без дополнительных знаков"
        ),
      amount: z
        .number({ required_error: "Поле обязательно для заполнения" })
        .gt(0, "Сумма должна быть больше 10 рублей")
        .lt(100000, "Сумма должна быть меньше 100 000 рублей"),
    })
    .required();

  const createSignatureValue = (
    merchantLog: string | undefined,
    merchantPass: string | undefined
  ) => {
    if (!merchantLog || !merchantPass || !formData.amount) {
      return null;
    } else {
      return md5(`${merchantLog}:${formData.amount}::${merchantPass}`);
    }
  };

  useEffect(() => {
    const validationResult = formSchema.safeParse(formData);
    if (!validationResult.success) {
      setErrorList(validationResult.error.format());
    } else {
      setResultLink(
        `https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=${merchantId}&OutSum=${
          formData.amount
        }&Description=${formData.name}&SignatureValue=${createSignatureValue(
          merchantId,
          merchantPassword
        )}`
      );
      setIsPayButtonDisabled(false);
    }
  }, [formData]);

  return (
    <div className="flex justify-center my-20">
      <form
        className={`flex flex-col gap-3 styles w-1/2 lg:w-full ${styles.paymentForm}`}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <label htmlFor="amount">Введите, пожалуйста, сумму платежа</label>
          <input
            type="number"
            id="amount"
            min={10}
            max={100000}
            value={formData.amount}
            onInput={(e) =>
              setFormData({
                ...formData,
                amount: Number((e.target as HTMLInputElement).value),
              })
            }
          />
          <span className="text-red-500">
            {errorList?.amount?._errors?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </span>
        </div>
        <div>
          <label htmlFor="name">Введите, пожалуйста, ваше имя</label>
          <input
            type="text"
            id="name"
            onInput={(e) =>
              setFormData({
                ...formData,
                name: (e.target as HTMLInputElement).value,
              })
            }
            onKeyUp={(e) => {
              const target = e.target as HTMLInputElement;
              const sepName = target.value.split(" ");
              const resultName = sepName.map((item) => {
                if (item.length > 0) {
                  return item[0].toUpperCase() + item.slice(1);
                } else {
                  item;
                }
              });
              target.value = resultName.join(" ");
            }}
          />
          <span className="text-red-500">
            {errorList?.name?._errors?.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </span>
        </div>

        {isPayButtonDisabled ? (
          <a className={`w-full flex justify-center bg-zinc-400`}>Оплатить</a>
        ) : (
          <a
            href={resultLink}
            className={`w-full flex justify-center bg-[#5e050d]`}
          >
            Оплатить
          </a>
        )}
      </form>
    </div>
  );
}

export default PaymentForm;
