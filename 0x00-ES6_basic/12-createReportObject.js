export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(deps) {
      return Object.keys(deps).length;
    },
  };
}
