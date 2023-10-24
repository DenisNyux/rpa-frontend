import BackButton from "@/components/SharedComponents/BackButton/BackButton";

function NotFound() {
  return (
    <div className="mt-6 mb-12 mx-36">
        <BackButton href="/" text="На главную"></BackButton>
      <div className="flex w-100 justify-center align-center flex-col gap-6 my-12">
        <h2 className="justify-center align-center">Ошибка 404</h2>
        <p className="justify-center align-center">Извините, данная страница не найдена</p>
    </div>
    </div>
  );
}

export default NotFound;
