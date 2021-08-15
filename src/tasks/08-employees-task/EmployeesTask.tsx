/*

Task:
Render a list of employees that displays their details. If a person is a manager
they should have [Manager] before their name.

Example:

* [Manager] Lisa Green
  Salary: $60000
* Bob Murphy
  Salary: $25000

*/

const employees = [
  {
    firstName: "Lisa",
    lastName: "Green",
    isManager: true,
    salary: 60_000,
  },
  {
    firstName: "Bob",
    lastName: "Murphy",
    isManager: false,
    salary: 25_000,
  },
  {
    firstName: "Carl",
    lastName: "Anderson",
    isManager: false,
    salary: 30_000,
  },
  {
    firstName: "Ronald",
    lastName: "Smith",
    isManager: true,
    salary: 57_000,
  },
  {
    firstName: "Amy",
    lastName: "Miller",
    isManager: false,
    salary: 29_000,
  },
];

export function EmployeesTask() {
  return <div>Task: Employees</div>;
}
