/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
 
    let newHead = head;
    let resHead = head;
    let countHead = head;
    let count = 0;
    while(countHead){
        countHead = countHead.next;
        count++;
    }
    //console.log(count);
    
    if(count - n <1) return resHead.next;
    for(let i=0; i<count - n; i++){
        newHead = newHead.next;
    }
    
    
    for(let i=0; i< count -n -1; i++){
        resHead = resHead.next;
    }
    
    resHead.next = newHead.next;
    
    return head;
};