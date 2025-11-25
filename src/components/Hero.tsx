interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center px-6 text-center">
      <div className="max-w-2xl">
        <p className="text-xs tracking-[0.3em] text-gray-500 mb-6 uppercase">
          UVI Jewelry
        </p>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
          Подарочный сертификат
        </h1>
        <p className="text-lg md:text-xl text-gray-500 font-light mb-12">
          Современные ювелирные украшения
        </p>
        <button
          onClick={onOpenModal}
          className="bg-[#C4785A] text-white px-10 py-4 text-sm tracking-wide hover:bg-[#B06A4E] transition-colors"
        >
          Выбрать номинал
        </button>
      </div>
    </section>
  );
};
