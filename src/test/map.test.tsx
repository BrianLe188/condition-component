import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Map from "@/loops/map";
import Chain from "@/loops/chain";
import { Filter } from "@/not-handle";

describe("Map component", () => {
  const data = [1, 2, 3, 4, 5, 6];

  it("Render an array of number", () => {
    render(<Map data={data}>{(e) => <p>{e}</p>}</Map>);

    data.forEach((e) => {
      expect(screen.getByText(e)).not.toBeNull();
    });
  });

  it("Render an array of number wrapped by Chain", () => {
    render(
      <Chain data={data}>
        <Map<number>>{(e) => <p>{e}</p>}</Map>
      </Chain>,
    );

    data.forEach((e) => {
      expect(screen.getByText(e.toString())).not.toBeNull();
    });
  });

  it("Render an array of number wrapped by Chain and Filter before", () => {
    render(
      <Chain data={data}>
        <Filter>{(e) => e > 3}</Filter>
        <Map<number>>{(e) => <p>{e}</p>}</Map>
      </Chain>,
    );

    const invalidData = [1, 2, 3];
    const validData = [4, 5, 6];

    invalidData.forEach((e) => {
      const num = screen.queryByText(e);
      expect(num).toBeNull();
    });
    validData.forEach((e) => {
      const num = screen.getByText(e);
      expect(num).not.toBeNull();
    });
  });
});
