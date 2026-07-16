function generateSensitivity() {

  const device = document.getElementById("device").value || "Unknown Device";
  const ram = parseInt(document.getElementById("ram").value);
  const refresh = parseInt(document.getElementById("refresh").value);
  const processor = document.getElementById("processor").value;
  const style = document.getElementById("style").value;
  
  let score = 0;

  score += ram * 4;
  score += refresh / 10;

  switch (processor) {
    case "snap8":
    case "dim9000":
      score += 30;
      break;

    case "snap7":
    case "dim8000":
      score += 20;
      break;

    case "snap6":
    case "dim7000":
      score += 12;
      break;

    default:
      score += 8;
  }

  if (style === "rush") score += 10;
  if (style === "sniper") score -= 5;

  function limit(v){
    return Math.max(80, Math.min(200, Math.round(v)));
  }

  const general = limit(score + 90);
  const redDot = limit(score + 85);
  const x2 = limit(score + 80);
  const x4 = limit(score + 70);
  const sniper = limit(score + 40);
  const freeLook = 200;

  let fireButtonSize;

  if (ram >= 8 && refresh >= 120 && storage >= 128) {
    fireButtonSize = 48;
  } else if (ram >= 6) {
    fireButtonSize = 46;
  } else {
    fireButtonSize = 44;
  }

  document.getElementById("result").innerHTML = `
    <h2>Generated Sensitivity</h2>
    <p><b>Device:</b> ${device}</p>
    <hr>
    <p>General : ${general}</p>
    <p>Red Dot : ${redDot}</p>
    <p>2x Scope : ${x2}</p>
    <p>4x Scope : ${x4}</p>
    <p>Sniper Scope : ${sniper}</p>
    <p>Free Look : ${freeLook}</p>
    
    <p>Fire Button Size : ${fireButtonSize}%</p>
  `;
}
