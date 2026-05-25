export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/057d0fa6-d097-4747-a968-6a79e82f174a/files/fc8f546b-c7ae-48f8-9717-26cfe935ff79.jpg"
          alt="Художник в мастерской"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1" id="about">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Народный художник РСФСР</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Ким Ольдаев — живописец с мировым именем. Каждая работа — живое ощущение момента,
          переданное маслом на холсте с искренностью и мастерством.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Приобрести картину
        </button>
      </div>
    </div>
  );
}