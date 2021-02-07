import { Problem } from './problem';
export class DFS {
    public problem: Problem;
    constructor(problem: Problem) {
        this.problem = problem;
    }


    algorithm(initialState: number[][]): number[][] {
        const nextActions = this.problem.actions(initialState);

        let goalState: number[][] = [];
        nextActions.map(action => {
            const newState: number[][] = this.problem.place(initialState, action[0], action[1]);
            const finalState: number[][] = this.algorithm(newState);

            if (this.problem.isGoal(finalState)) {
                goalState = finalState;
                return;
            }

        })
        return goalState.length > 0 ? goalState : initialState;
    }

    solve(problem: Problem) {
        const initialState = problem.initital;
        return this.algorithm(initialState);
    }

}
