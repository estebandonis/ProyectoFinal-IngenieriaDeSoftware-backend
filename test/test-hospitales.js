const { expect } = require("chai");
const pool = require("../db");
const { AllHospitales } = require("../src/hospitales/queries");

describe("Test de extracción de datos", () => {
  it("Obtener el nombre del hospital Hospital Alpha", async () => {
    const hospitales = await pool.query(AllHospitales);
    expect(hospitales.rows[0].nombre).to.equal("Hospital Alpha");
  });

  it("Obtener la dirección del hospital Alpha", async () => {
    const hospitales = await pool.query(AllHospitales);
    expect(hospitales.rows[0].direccion).to.equal("123 Main Street");
  });

  it("Obtener la zona  del hospital Alpha", async () => {
    const hospitales = await pool.query(AllHospitales);
    expect(hospitales.rows[0].zona).to.equal(1);
  });

  it("Obtener el estado del hospital Alpha", async () => {
    const hospitales = await pool.query(AllHospitales);
    expect(hospitales.rows[0].estado).to.equal("aprobado");
  });
});