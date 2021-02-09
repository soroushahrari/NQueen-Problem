import { Problem } from './problem';
import { BFS } from './bfs';
import { DFS } from './dfs';
import { Algorithm} from './algorithm.interface';
import { HillClimbing } from './hillClimbing';
import readline from 'readline';

export function print(state: number[][], color: string, texts: string[], stateNumber?: number) {
    if (stateNumber != undefined) {
        console.log(color, `----- State number: ${stateNumber} -----`);
    } else {
        console.log(color, `----- Goal State -----`);
    }
    console.log('\n')
    state.map(row => {
        console.log(color, row);
    });
    console.log('\n')
    texts.map(text => {
        console.log(color, text, '\n');
    });
}


const problem = new Problem();


let algorithm: Algorithm;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Choose one of the algorithms {BFS, DFS, HillClimbing} (Ex: BFS) : `, (input) => {
    switch (input) {
        case 'BFS': {
            algorithm = new BFS(problem);
            break;
        }
        case 'DFS': {
            algorithm = new DFS(problem);
            break;
        }
        case 'HillClimbing': {
            algorithm = new HillClimbing(problem);
            break;
        }
    }

    let startTime = process.hrtime()
    algorithm.solve(problem).then(goal => {
        let endTime = process.hrtime(startTime)[1] / 1000000;
        const texts = [`Execution Time: ${endTime}ms`]
        print(goal, '\x1b[32m%s\x1b[0m', texts);
    });
    rl.close()
})

