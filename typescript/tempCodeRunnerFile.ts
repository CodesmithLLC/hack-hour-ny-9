//permute
interface IListNode<T> {
  value: T;
  next?: IListNode<T>;
}

function ListNode(value: number) {
  this.value = value;
  this.next = null;
}

var oddEvenList = function(head: IListNode<T>) {
  console.log(head);
};

const list = new ListNode(5);
console.log(list);
