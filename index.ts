import { Problem } from './problem';
import {BFS} from './bfs';
import {DFS} from './dfs';


const problem = new Problem();
const algorithm = new DFS(problem);
console.log(algorithm.solve(problem));

// console.log(problem.hasConflict(problem.initital))
