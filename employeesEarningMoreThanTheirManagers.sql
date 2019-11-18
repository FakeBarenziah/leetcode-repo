SELECT a.Name AS Employee FROM Employee AS a JOIN Employee AS b ON a.ManagerID = b.id AND a.Salary > b.Salary
