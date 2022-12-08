let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 

let names = [];
studentRecords.forEach(element =>{
    element=element.name;
   names.push(element.toUpperCase());
}) 
console.log(names);

 namesCap = studentRecords.map( studentName => studentName.name.toUpperCase());
 console.log(namesCap);

let detailsMgt50=studentRecords.filter(studentMarks=>studentMarks.marks>50)
console.log(detailsMgt50);

let details=studentRecords.filter(student => student.marks>50 && student.id>120)
console.log(details);

let sum=studentRecords.reduce(((a,b)=>a+b.marks),0)
console.log(sum);

let detailsMgt50_name=studentRecords.filter(studentMarks=>studentMarks.marks>50).map(studentName=>studentName.name)
console.log(detailsMgt50_name);

let q6=studentRecords.filter(studentId=>studentId.id>120).reduce(((a,b)=>a+b.marks),0)
console.log(q6);
 
let q7=studentRecords.map(function(studentMarks){
    if(studentMarks.marks<50)
    studentMarks.marks +=15
    return studentMarks;
    // acc=studentMarks
}).filter(studentMarks=>studentMarks.marks>50).reduce((a,b)=>a+b.marks,0);
console.log(q7);


// function myObj(name,classname,rollno){
//    this.name=name;
//    this.classname=classname;
//    this.rollno=rollno;
// }
// const obj1= new myObj('one','class one',1)
// const obj2= new myObj('two','class ',2)
// const obj3= new myObj('three','class ',3)
// const obj4= new myObj('four','class ',4)
// const obj5= new myObj('five','class ',5)
// const obj6= new myObj('six','class ',6)

const myObj={
    one:{name:'one',classname:'class-one',roll:1},
    two:{name:'two',classname:'class-two',roll:2},
    three:{name:'three',classname:'class-three',roll:3},
    four:{name:'four',classname:'class-four',roll:4},
    five:{name:'five',classname:'class-five',roll:5},
    six:{name:'six',classname:'class-six',roll:6},
}
 
let arrObj=[];
for(let i in myObj){
    arrObj.push(myObj[i])
}
console.log(arrObj);
  



