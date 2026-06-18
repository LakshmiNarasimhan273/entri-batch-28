# MongoDB CRUD Practice - Users & Tasks

## Scenario

In this practice, we will learn MongoDB CRUD operations using two collections:

### Users Collection

```javascript
{
    name: String,
    email: String
}
```

### Tasks Collection

```javascript
{
    title: String,
    description: String,
    status: String,
    userId: ObjectId
}
```

The relationship is:

* One User can have multiple Tasks.
* Each Task belongs to a specific User using `userId`.

---

# Step 1: Create Database

```javascript
use task_management
```

---

# Users Collection

## Insert One User

Create a user document.

```javascript
db.users.insertOne({
    name: "Narasimhan",
    email: "narasimhan@gmail.com"
})
```

---

## Verify User Data

```javascript
db.users.find()
```

### Sample Output

```javascript
{
    _id: ObjectId("685f123abc456def78912345"),
    name: "Narasimhan",
    email: "narasimhan@gmail.com"
}
```

> Copy the generated `_id` value. It will be used as the `userId` while creating tasks.

---

# Tasks Collection

Assume the user id is:

```javascript
ObjectId("685f123abc456def78912345")
```

---

## Insert One Task

```javascript
db.tasks.insertOne({
    title: "Learn MongoDB",
    description: "Practice CRUD operations",
    status: "Pending",
    userId: ObjectId("685f123abc456def78912345")
})
```

---

## Insert Many Tasks

```javascript
db.tasks.insertMany([
    {
        title: "Learn Express",
        description: "Understand routing",
        status: "Pending",
        userId: ObjectId("685f123abc456def78912345")
    },
    {
        title: "Learn React",
        description: "Build components",
        status: "In Progress",
        userId: ObjectId("685f123abc456def78912345")
    },
    {
        title: "Deploy Project",
        description: "Deploy to Netlify",
        status: "Pending",
        userId: ObjectId("685f123abc456def78912345")
    }
])
```

---

# Read Operations

## Find All Tasks

```javascript
db.tasks.find()
```

---

## Find Tasks Belonging to a Particular User

```javascript
db.tasks.find({
    userId: ObjectId("685f123abc456def78912345")
})
```

---

## Find One Task

```javascript
db.tasks.findOne({
    title: "Learn MongoDB"
})
```

---

## Find Completed Tasks

```javascript
db.tasks.find({
    status: "Completed"
})
```

---

# Update Operations

## Update One Task

### Scenario

Change the status of the MongoDB task from `Pending` to `Completed`.

```javascript
db.tasks.updateOne(
    { title: "Learn MongoDB" },
    {
        $set: {
            status: "Completed"
        }
    }
)
```

---

## Update Many Tasks

### Scenario

Change all tasks with status `Pending` to `In Progress`.

```javascript
db.tasks.updateMany(
    { status: "Pending" },
    {
        $set: {
            status: "In Progress"
        }
    }
)
```

---

## Update Task Description

```javascript
db.tasks.updateOne(
    { title: "Learn React" },
    {
        $set: {
            description: "Build reusable components"
        }
    }
)
```

---

# Delete Operations

## Delete One Task

### Scenario

Delete the task named `Deploy Project`.

```javascript
db.tasks.deleteOne({
    title: "Deploy Project"
})
```

---

## Delete Many Tasks

### Scenario

Delete all tasks with status `Completed`.

```javascript
db.tasks.deleteMany({
    status: "Completed"
})
```

---

# Learning Flow

### Step 1: Create a User

```javascript
db.users.insertOne({
    name: "Narasimhan",
    email: "narasimhan@gmail.com"
})
```

### Step 2: Copy the Generated User ID

```javascript
ObjectId("685f123abc456def78912345")
```

### Step 3: Create Tasks for the User

```javascript
db.tasks.insertMany([...])
```

### Step 4: Read the User's Tasks

```javascript
db.tasks.find({
    userId: ObjectId("685f123abc456def78912345")
})
```

### Step 5: Update Task Information

```javascript
db.tasks.updateOne(...)
```

### Step 6: Delete Task Records

```javascript
db.tasks.deleteOne(...)
```

---

## Concepts Covered

* Database Creation
* Collection Creation
* insertOne()
* insertMany()
* find()
* findOne()
* updateOne()
* updateMany()
* deleteOne()
* deleteMany()
* One-to-Many Relationship using ObjectId Reference
* Basic MongoDB CRUD Operations
