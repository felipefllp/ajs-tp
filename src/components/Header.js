export default function Header({children}) {
  return (
  <header>
    <div className="bg-gray-100 mx-auto p-4">
      <h1 className="text-center font-semibold text-xl">
        {children}
      </h1>
      <h3 className="text-center font-semibold text-sm">
        Felipe Barbosa Lopes
      </h3>
    </div>
  </header>
  );
}