import { Problem } from "./problem";

export interface Algorithm {
    algorithm(state: number[][]): Promise<number[][]>;
    solve(problem: Problem): Promise<number[][]>;
}