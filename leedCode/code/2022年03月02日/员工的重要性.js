
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
    var importance = 0;
    var computeImportance = function (id) {
        for (var i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                importance += employees[i].importance;
                if (employees[i].subordinates.length > 0) {
                    for (var j = 0; j < employees[i].subordinates.length; j++) {
                        computeImportance(employees[i].subordinates[j])
                    }
                }
            }
        }
    }
    computeImportance(id)
    return importance;
};