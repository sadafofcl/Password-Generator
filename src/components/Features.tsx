type Feature = {
  title: string;
  description: string;
  icon: string;
};

type FeaturesProps = {
  features: Feature[];
};

export default function Features({ features }: FeaturesProps) {
  return (
    <section className="bg-black text-white px-4 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Features
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            "Generate strong, secure passwords in seconds with our smart password generator. Customize length, include numbers, symbols, and more to create passwords that are safe, unique, and easy to use."
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                group
                p-6 sm:p-8
                bg-zinc-900
                rounded-2xl
                border border-zinc-800
                transition-all duration-300
                hover:-translate-y-1
                hover:border-zinc-700
                hover:shadow-[0_0_30px_rgba(255,255,255,0.06)]
              "
            >
              <div className="text-3xl sm:text-4xl mb-4">
                {feature.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                {feature.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
