import { useState, type FormEvent } from "react";

const Quotation = () => {
  const [quotation, setQuotation] = useState<number>(0);
  const [totalPayroll, setTotalPayroll] = useState<number>(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!totalPayroll) {
      return;
    }
    const finalQuotation = (totalPayroll * (4 / 100)).toFixed(0);
    setQuotation(Number(finalQuotation));
  };

  return (
    <div className="bg-[#FFFF] my-10">
      <div className="container mx-auto md:flex justify-center">
        <div className="md:w-1/2 md:flex-col md:border-r-2 justify-center border-r-gray">
          <h3 className="uppercase text-gray text-4xl font-bold font-primary underline text-center mb-10">
            Cotizador
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-bg text-lg font-secondary mb-2"
                htmlFor="totalPayroll"
              >
                Total de tu nómina pagada antes de impuestos
              </label>
              <input
                className="shadow appearance-none border border-gray-bg rounded w-full md:w-5/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="totalPayroll"
                type="text"
                min={0}
                placeholder="Ej. 1000000"
                value={totalPayroll}
                onChange={(e) =>
                  Number.isNaN(Number(e.target.value))
                    ? 0
                    : setTotalPayroll(Number(e.target.value))
                }
              />
            </div>
            <div className="flex justify-center mt-10">
              <button
                type="submit"
                className="bg-secondary text-white-bg font-secondary text-sm font-bold py-3 px-10 rounded-md"
              >
                Cotizar
              </button>
            </div>
          </form>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <div>
            <div className=" max-w-3xl">
              <h3 className="text-secondary lg:text-9xl text-6xl font-primary font-bold uppercase underline text-center mt-10 md:mt-0 mb-5  flow-text break-words">
                ${quotation}
              </h3>
            </div>
            <li className="text-xl text-gray font-bold font-secondary text-center">
              Se generará una factura según la frecuencia de pago
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotation;
