import { Problem } from './problem';
import {print} from './index';

export class HillClimbing {
    public problem: Problem;
    constructor(problem: Problem) {
        this.problem = problem;
    }

    public counter = 0;
    async algorithm(initialState: number[][]): Promise<number[][]> {
        let currentState = initialState;

        while (true) {
            const neighbours = this.problem.neighbours(currentState);
            if(neighbours.length == 0) {
                break;
            }

            let texts: string[] =[];

            if(this.counter == 0) {
                texts.push('Initial State');
            }

            texts.push(`Conflicts: ${this.problem.heuristic(currentState)}`);

            print(currentState, '\x1b[37m%s\x1b[0m', texts, this.counter);


            let neighbour = neighbours[0];
            neighbours.map(state => {
                if (this.problem.heuristic(state) < this.problem.heuristic(neighbour)) {
                    neighbour = state;
                }
            });

            if (this.problem.heuristic(currentState) <= this.problem.heuristic(neighbour)) break;
            currentState = neighbour;
            this.counter++;
        }

        return currentState;
    }

    async solve(problem: Problem): Promise<number[][]> {
        const initialState = problem.initRandom(problem.initital);
        return await this.algorithm(initialState);
    }

}
