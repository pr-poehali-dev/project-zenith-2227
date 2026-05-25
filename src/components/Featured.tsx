export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/057d0fa6-d097-4747-a968-6a79e82f174a/files/5b873553-779e-482a-a4a6-041acea99634.jpg"
          alt="Ким Менгенович Ольдаев"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1 px-0" id="about">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">1933 — 1995</h3>
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-neutral-900 leading-tight">Ким Менгенович Ольдаев</h2>
        <p className="text-base lg:text-lg mb-4 text-neutral-700 leading-relaxed">
          Народный художник РСФСР, Заслуженный художник России, лауреат Государственной премии Калмыцкой АССР. Один из основателей современной калмыцкой живописи.
        </p>
        <p className="text-base lg:text-lg mb-4 text-neutral-600 leading-relaxed">
          Художник яркого самобытного таланта — его кисть объяла всё: степь, ветер, травы, солнце и людей, влюблённых в эту вечную круговерть. Портрет — один из ведущих жанров его творчества: каждый образ индивидуален и в то же время несёт печать своего времени.
        </p>
        <p className="text-base lg:text-lg mb-8 text-neutral-600 leading-relaxed">
          Особое место занимает серия «Пережитое» — 13 картин о суровом военном времени. Работы Ольдаева хранятся в частных коллекциях России и за рубежом.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Приобрести картину
        </button>
      </div>
    </div>
  );
}