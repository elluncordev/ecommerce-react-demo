export const CardProduct = () => {
  return (
    <article className="cursor-pointer w-56 h-60 rounded-md overflow-hidden">
      <figure className="relative mb-2 w-full h-3/4">
        <span className="absolute top-2 right-2 flex justify-center items-center">
          +
        </span>
        <img className="w-full h-full object-cover" src="" alt="" />
        <div className="top-0 absolute hover:-translate-y-1 w-full h-full duration-200">
          <span className="bg-white absolute bottom-0 left-2 px-2 py-1">
            $ 345
          </span>
        </div>
      </figure>
      <section className="flex flex-col pl-3 gap-1">
        <p>Nombre del producto</p>
        <p className="text-slate-500/50">Categoria</p>
      </section>
    </article>
  );
};
