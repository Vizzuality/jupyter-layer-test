import validate from './type-checker.validator';

validate(JSON.parse(process.argv[2]));