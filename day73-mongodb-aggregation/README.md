# MongoDB Aggregation & Indexing Practice

## Objective

In this exercise, we will learn:

* Aggregation Framework
* Counting Documents
* Grouping Documents
* Sorting Documents
* Indexing
* Query Optimization
* Query Performance Analysis using `explain()`

---

# Aggregation Operations

Aggregation is used to analyze and process data in MongoDB.

---

## 1. Count All Tasks

Count the total number of tasks available in the collection.

```javascript
db.tasks.aggregate([
    {
        $count: "totalTasks"
    }
])
```

### Sample Output

```javascript
[
    {
        totalTasks: 4
    }
]
```

---

## 2. Count Tasks by Status

Count how many tasks belong to each status.

```javascript
db.tasks.aggregate([
    {
        $group: {
            _id: "$status",
            totalTasks: {
                $sum: 1
            }
        }
    }
])
```

### Sample Output

```javascript
[
    {
        _id: "Pending",
        totalTasks: 2
    },
    {
        _id: "Completed",
        totalTasks: 1
    },
    {
        _id: "In Progress",
        totalTasks: 1
    }
]
```

---

## 3. Sort Tasks by Title

Sort tasks in ascending order (A-Z).

```javascript
db.tasks.aggregate([
    {
        $sort: {
            title: 1
        }
    }
])
```

### Ascending Order

```javascript
title: 1
```

### Descending Order

```javascript
title: -1
```

---

# Indexing Operations

Indexes help MongoDB locate documents faster without scanning the entire collection.

---

## Step 1: Insert Sample Data

```javascript
db.tasks.insertMany([
    {
        title: "MongoDB",
        status: "Pending"
    },
    {
        title: "Node.js",
        status: "Completed"
    },
    {
        title: "React",
        status: "Pending"
    },
    {
        title: "Express",
        status: "In Progress"
    }
])
```

---

## Step 2: Check Query Performance Before Creating an Index

Run the following query:

```javascript
db.tasks.find({
    status: "Pending"
}).explain("executionStats")
```

Look for the following output:

```javascript
winningPlan: {
    stage: "COLLSCAN"
}
```

### Explanation

* `COLLSCAN` stands for Collection Scan.
* MongoDB scans every document in the collection.
* This approach becomes slower as the collection grows.

---

## Step 3: Create a Single Field Index

Create an index on the `status` field.

```javascript
db.tasks.createIndex({
    status: 1
})
```

---

## View Existing Indexes

```javascript
db.tasks.getIndexes()
```

---

## Step 4: Check Query Performance After Creating an Index

Run the same query again.

```javascript
db.tasks.find({
    status: "Pending"
}).explain("executionStats")
```

Look for the following output:

```javascript
winningPlan: {
    stage: "FETCH",
    inputStage: {
        stage: "IXSCAN"
    }
}
```

or

```javascript
IXSCAN
```

### Explanation

* `IXSCAN` stands for Index Scan.
* MongoDB uses the index instead of scanning every document.
* Queries execute faster and more efficiently.

---

# Before vs After Indexing

| Before Index        | After Index |
| ------------------- | ----------- |
| COLLSCAN            | IXSCAN      |
| Scans all documents | Uses index  |
| Slower              | Faster      |
| Not Optimized       | Optimized   |

---

# Real-World Analogy

### Without Index

Imagine a library with thousands of books.

To find a JavaScript book, the librarian checks every shelf one by one.

```text
COLLSCAN
```

### With Index

The library maintains a catalog.

The librarian checks the catalog and directly goes to the correct shelf.

```text
IXSCAN
```

---

# Concepts Covered

### Aggregation

* `$count`
* `$group`
* `$sort`

### Indexing

* `createIndex()`
* `getIndexes()`
* Query Optimization
* `explain("executionStats")`
* `COLLSCAN`
* `IXSCAN`

---

# Conclusion

Aggregation helps analyze and summarize data, while indexing improves query performance. Together, they are essential MongoDB features used in real-world applications for reporting, analytics, and efficient data retrieval.
