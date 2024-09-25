const Error = ({ message, retry }) => {
  return (
    <>
      <div className="flex gap-4 p-5 bg-red-500 rounded text-white">
        <div className="text-4xl">🚧</div>

        <div>
          <h2>Üzgünüz bir sorun oluştu</h2>
          <p>{message}</p>
        </div>
      </div>

      <div className="flex justify-center my-5">
        <button
          onClick={retry}
          className="border py-2 px-5 font-semibold shadow bg-blue-400 rounded hover:scale-125 transition text-white"
        >
          Tekrar Dene
        </button>
      </div>
    </>
  );
};

export default Error;
