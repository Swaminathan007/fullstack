class Node{
  constructor(val){
      this.val = val;
      this.link = null;
  }
}

class LinkedList{
  constructor(){
      this.head = null;
      this.count = 0;
      this.ll = document.getElementById("ll");
  }
  add_data_beg(val){
      let node = new Node(val);
      node.link = this.head;
      this.head = node;
      this.count++;
      this.ll.innerText = `${val}->` + this.ll.innerText;
      if(this.count == 1){
          this.ll.innerText += "NULL";
      }

  }
}
function setTime(){
  let cur_time = new Date();
  cur_time =  cur_time.toUTCString()
  document.getElementById("time").innerText = cur_time;
  setTimeout(setTime,1000);
}
setTime();

let ll = new LinkedList();

document.getElementById("add_beg").onclick = ()=>{
  let val = document.getElementById("val").value;
  document.getElementById("val").value = "";
  ll.add_data_beg(val);
}

const persons = [{
  name:"Swaminathan",
  age:20,
  isHuman:true
},
{
  name:"Priyanka",
  age:21,
  isHuman:false
}]

for(let person in persons){
  document.getElementById("list").innerHTML += `<li>${JSON.stringify(persons[person])}</li>`
}


