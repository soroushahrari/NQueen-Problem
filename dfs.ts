import { Problem } from './problem';
export class DFS {
    public problem: Problem;
    constructor(problem: Problem) {
        this.problem = problem;
    }


    algorithm(initialState: number[][]): number[][] {

        let states = [initialState];

        while (states.length > 0) {
            const currentState: number[][] = states.pop()!;


            if (this.problem.isGoal(currentState)) {
                return currentState;
            }

            const nextActions = this.problem.actions(currentState);

            nextActions.map(action => {
                const newState = this.problem.place(currentState, action[0], action[1]);
                states.push(newState);
            })
        }
        return initialState;
    }

    solve(problem: Problem) {
        const initialState = problem.initital;
        return this.algorithm(initialState);
    }

}
