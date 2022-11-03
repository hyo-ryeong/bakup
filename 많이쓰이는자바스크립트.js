// 1. object shorthand assignment -키값과 밸류가 같을 경우 생략가능
let name = 'david';
let age = '20'

let youngman = {
  // name: name ,   //value값을 위 변수에서 받아옴.키와 밸류가 같아
  // age:age

  name,
  age
} 
console.log(youngman); 

// 2. destructuring(디스트럭쳐링, 구조 분해 할당, 비구조할당)
let cat = {
  name1:'누리',
  color: 'gold',
  house: 'street'
}
// let name1 = cat.name1;
// let color = cat['color'];

let {name1,color} = cat;  //키값을 변수로 만들어 주고(선언), 오브젝트가 할당된다

console.log(name1,color);

// 3. 2와 동일-배열에 적용
let array = [1, 2, 3, 4, 5]
let [first, second] = array;  //배열에서 앞에 2개를 변수만들고 array배열을 할당한다
console.log(first, second); 

let [a,b,...rest] = array; //앞에 2개를 제외한 나머지
console.log(rest);

let {house, ...rest2} = cat;
console.log(rest2);   //오브젝트 cat의 house키값을 뺀 나머지
//...rest 


// 4. spread 문법
let dog ={ name:'choco', color:'brown', size:'big' }
let dog2 = { ...dog };
let dog3 = dog;
console.log('dog2 - ',dog2); 
console.log('dog3 - ',dog3); 


console.log('dog,dog2는 같아? - ',dog == dog2); //false, 
console.log('dog,dog3는 같아? - ',dog == dog3); //true, 

let aa = [1,2]
let bb = [...aa,'🍔','🍗']
console.log('bb는? - ',bb); 

let cc =[...aa,...bb]
console.log('cc는? - ',cc); 


// 5.삼항연산자
//함수? a: b    -트루일때는 a, false일때는 b


