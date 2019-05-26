import { expect, assert } from "chai";
import { prices } from "../services/brtService";

test("Consulta a cotacao da Brita corretamente", async () => {
  const resp = await prices();
  expect(resp.sell)
    .to.be.an("number")
    .and.greaterThan(0);

  expect(resp.buy)
    .to.be.an("number")
    .and.greaterThan(0);
});
