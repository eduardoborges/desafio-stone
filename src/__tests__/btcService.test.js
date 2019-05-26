import { expect, assert } from "chai";
import { prices } from "../services/btcService";

test("Consulta a cotacao do Bitcoin corretamente", async () => {
  const resp = await prices();
  expect(resp.sell)
    .to.be.an("number")
    .and.greaterThan(0);

  expect(resp.buy)
    .to.be.an("number")
    .and.greaterThan(0);
});
