function createPoints(rows: number, cols: number): Array<[number, number]> {
  return Array.from({ length: rows }, (_, row) =>
    Array.from(
      { length: cols },
      (_, col) => [row - 1, col - 1] as [number, number]
    )
  ).flat()
}

export default createPoints
