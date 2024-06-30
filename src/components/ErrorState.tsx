export const ErrorState = () => {
  return (
    <div className="flex flex-col items-center space-y-10">
      <h1 className="text-5xl">Ой, произошла ошибка</h1>
      <button
        type="button"
        onClick={() => location.reload()}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Перезагрузить страницу
      </button>
    </div>
  );
};
