const _=require('lodash');
function se(num){
    const ev=_.filter(num,x=>x%2==0);
    return _.sumBy(ev);
}
const num=[1,2,3,4,5,6,7,8];
console.log(se(num));
