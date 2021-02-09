export class Problem {
    public initital =
        [
            [0, 0, 0, 0], 
            [0, 0, 0, 0], 
            [0, 0, 0, 0], 
            [0, 0, 0, 0], 
        ];

    initRandom(initialState: number[][]): number[][] {
        initialState.map(row => {
            row[Math.round(Math.random() * 3)] = 1;
        })

        return initialState;
    }

    heuristic(state: number[][]) {
        let conflicts = 0;
        for (let i = 0; i < state.length; i++) {
            for (let j = 0; j < state.length; j++) {
                if (state[i][j] == 1) {
                    for (let k = i + 1; k < state.length; k++) {
                        for (let l = 0; l < state.length; l++) {
                            if (state[k][l] == 1) {
                                if (this.hasConflict(i, j, k, l)) {
                                    conflicts += 1;
                                }
                            }
                        }
                    }
                }
            }
        }
        return conflicts;
    }

    neighbours(state: number[][]) {
        let neighbours = [];
        for (let i = 0; i < state.length; i++) {
            let queen: number = -1;
            for (let j = 0; j < state.length; j++) {
                if (state[i][j] == 1) {
                    queen = j;
                }
            }
            if (queen > -1) {
                for (let k = 0; k < state.length; k++) {
                    if (k != queen) {
                        const newState: number[][] = JSON.parse(JSON.stringify(state));
                        newState[i][k] = 1;
                        newState[i][queen] = 0;
                        neighbours.push(newState);
                    }
                }
            }
        }
        return neighbours;
    }

    actions(state: number[][]) {
        const actions = [];
        for (let i = 0; i < state.length; i++) {
            const rowSum = state[i].reduce((a, b) => a + b, 0);
            if (rowSum == 1) {
                continue;
            } else {
                for (let j = 0; j < state.length; j++) {
                    if (state[i][j] != 1) {
                        if (this.isConflicted(state, i, j) == false) actions.push([i, j]);
                    }
                }
                break;
            }
            
        }
        return actions;
    }

    place(state: number[][], row: number, col: number): number[][] {

        let newState: number[][] = JSON.parse(JSON.stringify(state));

        newState[row][col] = 1;
        return newState;
    }

    isConflicted(state: number[][], row: number, col: number) {
        let conflicted = false;
        for (let i = 0; i < state.length; i++) {
            for (let j = 0; j < state.length; j++) {
                if (state[i][j] == 1) {
                    conflicted = this.hasConflict(row, col, i, j);
                }
                if (conflicted) break;
            }
            if (conflicted) break;
        }
        return conflicted;
    }

    hasConflict(row1: number, col1: number, row2: number, col2: number) {
        if (
            (
                row1 == row2 ||
                col1 == col2 ||
                row1 - col1 == row2 - col2 ||
                row1 + col1 == row2 + col2
            ) && !(row1 == row2 && col1 == col2)
        ) {
            return true;
        }
        return false;
    }

    isGoal(state: number[][]): boolean {
        let goal = true;
        for (let i = 0; i < state.length; i++) {
            const rowSum = state[i].reduce((a, b) => a + b, 0);
            if (rowSum != 1) {
                goal = false;
                break;
            }
            for (let j = 0; j < state.length; j++) {
                if (state[i][j] == 1) {
                    goal = !this.isConflicted(state, i, j);
                }
                if (!goal) break;
            }
            if (!goal) {
                break;
            }
        }
        return goal;
    }
}