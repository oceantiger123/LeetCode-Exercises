/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    while(headA){
        
        let curHeadB = headB;
        while(curHeadB){
            if(headA===curHeadB) return headA;
            curHeadB=curHeadB.next;
        }
        headA = headA.next;
    }
    return null
};