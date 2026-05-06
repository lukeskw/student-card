export default function StudentCard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 py-10 bg-[rgb(47,5,73)]">
      <img
        src={`${import.meta.env.BASE_URL}clube_do_estudante_logo.png`}
        alt="Clube do Estudante"
        className="w-48 mb-10"
      />

      {/* Card */}
      <div className="w-full max-w-[600px] overflow-hidden bg-[rgb(0,167,181)] text-white px-8 py-6 mb-10 flex flex-col gap-1">
        {/* Header: SNE left, logo right */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <p className="text-2xl font-black leading-none">SNE</p>
            <p className="text-[9px] leading-tight">Sociedade<br />Nacional dos<br />Estudantes</p>
          </div>
          <img
            src={`${import.meta.env.BASE_URL}clube_do_estudante_white_logo.png`}
            alt="Clube do Estudante"
            className="w-28"
          />
        </div>

        {/* Body: photo left, info right */}
        <div className="flex justify-center items-center w-full gap-12">
          <div className="w-8"></div>
          <img
            src={`${import.meta.env.BASE_URL}student_image.jpg`}
            alt="Foto do estudante"
            className="w-28 h-36 object-cover rounded shrink-0"
          />
          <div className="flex flex-col justify-between flex-1">
            <div className="text-xs leading-snug">
              <p className="font-semibold text-sm">Lucas Porfirio Alves</p>
              <p>CPF: 176.249.097-82</p>
              <p>CNH: 07236900665</p>
              <p>DATA NASC.: 03/09/1998</p>
              <p>UNIFOA-RJ</p>
              <p>Sistemas de Informação</p>
              <p>Graduação</p>
              <p>MATRÍCULA: 2021862SI</p>
            </div>
            <div className="flex-col md:flex items-end justify-between mt-2">
              <div className="text-xs">
                <p className="font-semibold">CÓD. USO</p>
                <p>McJk7C37hTTRxZCi7gHJw</p>
              </div>
              <p className="text-3xl font-bold">2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* QR Code */}
      <div className="flex flex-col max-w-[600px]">
        <h2 className="text-white text-2xl mb-4 text-center">QRCode de validação:</h2>
        <div className="bg-[rgb(30,20,45)] rounded-2xl p-6 flex items-center justify-center">
          <img
            src={`${import.meta.env.BASE_URL}qr_code.png`}
            alt="QR Code de validação"
            className="w-72 h-72 object-contain"
          />
        </div>
      </div>
    </div>
  )
}
