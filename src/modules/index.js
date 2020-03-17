/*
        Modules
    - import { export } form "module-name";
    - import { export as alias } from "module-name";
    - import * as name from "module-name";
    - import defaultExport from "module-name";

*/

// import { sum , multyply as mp} from "./lib";
import * as lib from "./lib";
import profile from "./profile";

console.log(lib.sum(1, 2, 3));
console.log(lib.multyply(4,2))

const jhonProfile = new Profile("jhon","doe","jhon@doe.com");
console.log(jhonProfile.display());