import { Problem } from './problem';
import { print } from './index';
export class BFS {
    public problem: Problem;
    constructor(problem: Problem) {
        this.problem = problem;
    }

    public counter = 0;


    async algorithm(initialState: number[][]): Promise<number[][]> {

        let states = [initialState];

        while (states.length > 0) {
            const currentState: number[][] = states.shift()!;



            if (this.problem.isGoal(currentState)) {
                return currentState;
            }

            let texts: string[] = [];
            if (this.counter == 0) {
                texts.push('Initial State');
            }
            print(currentState, '\x1b[37m%s\x1b[0m', texts, this.counter);

            this.counter++;

            const nextActions = this.problem.actions(currentState);

            nextActions.map(action => {
                const newState = this.problem.place(currentState, action[0], action[1]);
                states.push(newState);
            })
        }
        return initialState;
    }

    async solve(problem: Problem): Promise<number[][]> {
        const initialState = problem.initital;
        return await this.algorithm(initialState);
    }

}
