export default function Header() {
  return (
    <section className="bg-black px-4 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <h2 className="
            text-3xl sm:text-4xl lg:text-5xl
            font-bold
            text-white
            mb-4
          ">
            Password Generator
          </h2>

          <p className="
            text-base sm:text-lg
            text-gray-400
            max-w-2xl
            mx-auto
          ">
            Generate secure, random passwords with customizable options.
          </p>
        </div>

      </div>
    </section>
  );
}
