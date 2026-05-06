export default function Validation() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[rgb(47,5,73)]">
      <div className="w-full max-w-[600px] bg-[rgb(102,187,106)] text-white px-8 py-12 rounded-lg shadow-md">
        <div className="size-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
          <svg viewBox="0 0 24 24" width="64" height="64" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="rgb(102,187,106)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h2 className="text-center text-2xl mb-4">Carteirinha válida!</h2>

        <div className="text-left leading-relaxed mb-6">
          <p><strong>Nome:</strong> Lucas Porfirio Alves</p>
          <p><strong>Instituição de ensino:</strong> UNIFOA-RJ</p>
          <p><strong>Código de uso:</strong> McJk7C37hTTRxZCi7gHJw</p>
        </div>

        <button className="w-full py-3.5 bg-[rgb(123,0,130)] text-white font-bold text-sm tracking-wider rounded cursor-pointer border-none font-[Nunito]">
          BAIXAR CERTIFICADO DE ATRIBUTOS
        </button>
      </div>
    </div>
  )
}
