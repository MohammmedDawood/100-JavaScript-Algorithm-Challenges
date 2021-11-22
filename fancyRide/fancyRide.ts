function fancyRide(l: number, fares: number[]): string {
  let rides: string[] = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];
  let affordableRide: string;
  fares
    .map((fare) => fare * l)
    .filter((fare, index) => {
      if (fare <= 20) {
        affordableRide = rides[index];
      }
    });
  return affordableRide;
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));
