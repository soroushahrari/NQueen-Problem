//Tree_Search(Problem, Strategy) returns Solution or Failure
//States, Initial State, Goal State, Action, Node

import { Statement } from "typescript";

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
            [0, 1, 0, 0],
            [0, 0, 0, 0],
            [1, 0, 0, 1],
            [0, 0, 1, 0],
        ];

    isConflicted(state: Array<Array<number>>, row: number, col: number) {
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

    isGoal(state: Array<Array<number>>) {
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


const problem = new Problem();
console.log(problem.isGoal(problem.initital));

// var array = ["ABCD", "EFGH", "IJKL"];

// function diagonal(array, bottomToTop) {
//     var temp;
//     var returnArray = [];
//     for (var k = 0; k <= 2 * (maxLength - 1); ++k) {
//         temp = [];
//         for (var y = Ylength - 1; y >= 0; --y) {
//             var x = k - (bottomToTop ? Ylength - y : y);
//             if (x >= 0 && x < Xlength) {
//                 temp.push(array[y][x]);
//             }
//         }
//         if (temp.length > 0) {
//             returnArray.push(temp.join(''));
//         }
//     }
//     return returnArray;
// }

// document.body.innerHTML = diagonal(array).join('<br>') +
//     '<br><br><br>' +
//     diagonal(array, true).join('<br>');


// let colSum = 0;
//             for (let j = 0; j < state.length; j++) {
//                 colSum += state[j][i];
//             }
//             if (colSum != 1) return false;

//             let leftDiagnolaSum = 0;
//             for (let l = 0; l <= 2 * (state.length - 1); l++) {
//                 let k = l - state.length - i;

//                 if (k >= 0 && k < state.length) {
//                     leftDiagnolaSum += state[i][k];
//                 }
//             }
//             if (leftDiagnolaSum != 1) return false;

//             // let rightDiagnolaSum = 0;
//             // for (let k = state.length; k > 0; k--) {
//             //     leftDiagnolaSum += state[k][k - i];
//             // }
//             // if (leftDiagnolaSum != 1) return false;


