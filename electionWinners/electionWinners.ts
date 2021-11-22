function electionsWinners(votes: number[], k: number): number {
  let maxVotes = Math.max(...votes);
  let winners = votes.filter((vote) => vote + k > maxVotes);
  return winners.length;
}

console.log(electionsWinners([2, 3, 5, 2], 3));
