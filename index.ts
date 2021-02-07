import { Problem } from './problem';
import {BFS} from './bfs';
import {DFS} from './dfs';


const problem = new Problem();
const algorithm = new BFS(problem);
console.time()
console.log(algorithm.solve(problem));
console.timeEnd()

// console.log(problem.hasConflict(problem.initital))
