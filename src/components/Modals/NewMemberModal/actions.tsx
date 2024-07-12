"use server";

import postUploadFile from "@/requests/upload/postUploadFile";


export default async function uploadFile(formData: FormData) {
  const rawFormData = {
    avatar: formData.get("photo"),
  }

  if (!rawFormData.avatar) {
    return {
      error: { field: "photo", message: "Фото обязательно" },
    };
  }

  postUploadFile(rawFormData.avatar as unknown as HTMLInputElement);
}
