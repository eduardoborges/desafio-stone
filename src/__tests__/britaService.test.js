import { expect, assert } from "chai";
import { prices } from "../services/britaService";

test("Consulta a cotacao da Brita corretamente", async () => {
  const resp = await prices();
  expect(resp.value).to.have.length.greaterThan(0);
  expect(resp.value[0].cotacaoCompra)
    .to.be.an("number")
    .and.greaterThan(0);
  expect(resp.value[0].cotacaoVenda)
    .to.be.an("number")
    .and.greaterThan(0);
});
