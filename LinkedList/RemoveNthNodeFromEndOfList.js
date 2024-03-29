// Remove Nth Node From End of List

// Solution
// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// https://redquark.org/leetcode/0019-remove-nth-node/

// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

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
const removeNthFromEnd = (head, n) =>{
    let fast = head
    let slow = head

    for(let i = 0; i < n; i++){
        if (fast.next === null){
            if ( i === n - 1){
                head = head.next;
            }
            return head;
        }
        fast = fast.next
    }
    while (fast.next !== null){
        slow = slow.next;
        fast = fast.next;
    }
    if (slow.next !== null){
        slow.next = slow.next.next;
    }
    return head;
};