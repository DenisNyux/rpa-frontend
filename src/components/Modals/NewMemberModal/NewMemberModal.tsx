"use client";
import { FC } from "react";
import { Modal } from "react-responsive-modal";

import uploadFile from "./actions";

import "react-responsive-modal/styles.css";
import styles from "./NewMemberModal.module.css";

export type NewMemberModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const NewMemberModal: FC<NewMemberModalProps> = ({ open, setOpen }) => {
  

  // const clientAction = async (formData: FormData) => {
  //   const result = await createTodo(formData);
  //   if (result?.error) {
  //     setAlertMessage(result.error.message);
  //   } else {
  //     setAlertMessage(undefined);
  //     handleClose();
  //   }
  // };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      center
      classNames={{ modal: styles.rootModal }}
    >
      <h3 className="mb-4 text-2xl">Попасть на сайт</h3>
      {/* <form action=""> */}
        <div className={styles.formControl}>
          <label>ФИО</label>
          <input type="text" id="name" name="name" />
        </div>
        <form className={styles.formControl} action={uploadFile}>
          <label>Ваше фото</label>
          <input type="file" id="photo" name="photo" />
          <button type="submit">Загрузить</button>
        </form>
        <div className={styles.formControl}>
          <label>Выберите отделение</label>
          <select id="name" name="department">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className={styles.formControl}>
          <label>Образование</label>
          <input type="text" id="education" name="education" />
        </div>
        <div className={styles.formControl}>
          <label>Контакты</label>
          <textarea name="contacts" id="contacts"></textarea>
        </div>
        <div className={styles.formControl}>
          <label>Место работы</label>
          <input name="workPlace" id="workPlace"></input>
        </div>
        <div className={styles.formControl}>
          <label>Образование</label>
          <input type="text" id="education" name="education" />
        </div>
        <div className={styles.formControl}>
          <label>Специализация</label>
          <input name="specialization" id="specialization"></input>
        </div>
        <div className={styles.formControl}>
          <label>Ученая степень</label>
          <input name="degree" id="degree"></input>
        </div>
        <div className={styles.formControl}>
          <label>Направление психотерапии</label>
          <input name="therapyType" id="therapyField"></input>
        </div>

        <div className={styles.submitButton}>
          <button
            type="submit"
            className="bg-[#5E050D] text-white w-1/4 md:w-full p-4 rounded"
          >
            Отправить
          </button>
        </div>
      {/* </form> */}
    </Modal>
  );
};

export default NewMemberModal;
