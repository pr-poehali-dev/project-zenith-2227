const paintings = [
  {
    title: "Калмычка",
    year: "1968",
    medium: "Холст, масло",
    price: "По запросу",
    forSale: true,
    img: "https://cdn.poehali.dev/projects/057d0fa6-d097-4747-a968-6a79e82f174a/files/8673d7e0-d67c-4025-a660-0d9228fe01bc.jpg",
  },
  {
    title: "Степь цветёт",
    year: "1972",
    medium: "Холст, масло",
    price: "По запросу",
    forSale: true,
    img: "https://cdn.poehali.dev/projects/057d0fa6-d097-4747-a968-6a79e82f174a/files/cfea221d-6c6d-415e-ac20-468676459cf0.jpg",
  },
  {
    title: "Пастух",
    year: "1975",
    medium: "Холст, масло",
    price: "В частной коллекции",
    forSale: false,
    img: "https://cdn.poehali.dev/projects/057d0fa6-d097-4747-a968-6a79e82f174a/files/8fbd71fa-4efd-4865-bd3a-e1202532a350.jpg",
  },
  {
    title: "Из серии «Пережитое»",
    year: "1980",
    medium: "Холст, масло",
    price: "По запросу",
    forSale: true,
    img: "https://cdn.poehali.dev/projects/057d0fa6-d097-4747-a968-6a79e82f174a/files/6037ed01-a99f-4936-8bde-24b17c6bdcb0.jpg",
  },
  {
    title: "Хурул",
    year: "1983",
    medium: "Холст, масло",
    price: "В частной коллекции",
    forSale: false,
    img: "https://cdn.poehali.dev/projects/057d0fa6-d097-4747-a968-6a79e82f174a/files/3e9adfa4-68d9-4c49-aec6-1119e69f22aa.jpg",
  },
  {
    title: "Хозяин степи",
    year: "1970",
    medium: "Холст, масло",
    price: "По запросу",
    forSale: true,
    img: "https://cdn.poehali.dev/projects/057d0fa6-d097-4747-a968-6a79e82f174a/files/9524f2ef-6a3c-4a6a-ac3c-a0e5b4f7d380.jpg",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-neutral-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="uppercase text-xs tracking-[0.3em] text-neutral-500 mb-3">Коллекция</p>
          <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900">Работы художника</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paintings.map((p) => (
            <div key={p.title} className="group bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="overflow-hidden h-72">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col gap-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-neutral-900">{p.title}</h3>
                  <span className={`text-xs uppercase tracking-wide px-2 py-1 ${p.forSale ? "bg-neutral-900 text-white" : "bg-neutral-200 text-neutral-500"}`}>
                    {p.forSale ? "Продаётся" : "Не в продаже"}
                  </span>
                </div>
                <p className="text-sm text-neutral-500">{p.year} · {p.medium}</p>
                <p className="text-sm text-neutral-700 mt-1 font-medium">{p.price}</p>
                {p.forSale && (
                  <button className="mt-3 w-full border border-black text-black text-sm py-2 uppercase tracking-wide hover:bg-black hover:text-white transition-all duration-300">
                    Узнать стоимость
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
