//Tree_Search(Problem, Strategy) returns Solution or Failure
//States, Initial State, Goal State, Action, Node

class MyNode {
    public state: Array<Array<number>>;
    public parent: MyNode;
    constructor(state: Array<Array<number>>, parent: MyNode) {
        this.state = state;
        this.parent = parent;
    }
}

class Problem {
    public initital =
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];

    isGoal(state: Array<Array<number>>) {
        for (let i = 0; i < state.length; i++) {

            const rowSum = state[i].reduce((a, b) => a + b, 0);
            if (rowSum > 1) return false;

            let colSum = 0;
            for (let j = 0; j < state.length; j++) {
                colSum += state[j][i];
            }
            if (colSum != 1) return false;

            let leftDiagnolaSum = 0;
            for (let l = state.length; l > state.length - i - 1; l--) {
                leftDiagnolaSum += state[state.length - l + i][l ];
            }
            if (leftDiagnolaSum != 1) return false;

            let rightDiagnolaSum = 0;
            for (let k = state.length; k > 0; k--) {
                leftDiagnolaSum += state[k][k - i];
            }
            if (leftDiagnolaSum != 1) return false;
        }
        

    }
}