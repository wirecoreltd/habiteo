export default function TrustBar() {
  const items = [
    { num: "RGE", cap: "Artisans qualifiés, reconnus garants de l'environnement" },
    { num: "0 €", cap: "Visite technique & étude de faisabilité" },
    { num: "24h", cap: "Délai moyen de premier rappel" },
    { num: "10 ans", cap: "Garantie décennale sur la pose des équipements" },
  ];

  return (
    <div className="trustbar">
      <div className="wrap">
        {items.map((item) => (
          <div className="trust-item" key={item.num}>
            <span className="num">{item.num}</span>
            <span className="cap">{item.cap}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
