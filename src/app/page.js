export default function Home() {
  return (
    <div style={{ padding: 24, fontFamily: "Arial, sans-serif" }}>
      <h1>Adrios</h1>
      <p>Ferramenta pessoal de apoio clínico.</p>

      <textarea
        placeholder="Cole os exames aqui..."
        rows={10}
        style={{ width: "100%", marginTop: 12 }}
      />

      <br /><br />

      <button>
        Processar exames
      </button>
    </div>
  );
}
