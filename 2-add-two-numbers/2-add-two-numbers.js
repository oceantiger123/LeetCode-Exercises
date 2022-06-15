/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let newList = new ListNode();
    let newHead = newList;
    let advance = 0;
    while(l1 && l2) {
        let curNode = new ListNode();
        if(l1.val+l2.val+advance >= 10) { 
            curNode.val = l1.val+l2.val - 10 + advance;
            advance = 1;
        } else{
            curNode.val = l1.val+l2.val + advance;
            advance = 0;
        }
        newHead.next = curNode;
        newHead = newHead.next;
        l1 = l1.next;
        l2 = l2.next;
    }

    while(l1){
        let curNode = new ListNode();
        if(l1.val+advance>=10){
            curNode.val = l1.val + advance -10;
            advance = 1;
        } else{
            curNode.val = l1.val+advance;
            advance = 0;
        }
        newHead.next = curNode;
        newHead = newHead.next;
        l1= l1.next;
    }
    while(l2){
        let curNode = new ListNode();
        if(l2.val+advance>=10){
            curNode.val = l2.val + advance -10;
            advance = 1;
        } else{
            curNode.val = l2.val+advance;
            advance = 0;
        }
        newHead.next = curNode;
        newHead = newHead.next;
        l2= l2.next;
    }
    if(advance === 1) {
        let curNode = new ListNode();
        curNode.val = 1;
        newHead.next = curNode;
    }
    return newList.next;
};