# Python Dictionaries

student = {"name": "Victor","age": 20,"course": "DevOps", "gps": 5.6}

# Printing the dictionary
print(student)

# Accessing an item
print(student["name"])

# Adding an item
student["city"] = "Memphis"
print(student)

# Changing an item
student["age"] = 21
print(student)

# Removing an item
student.pop("gps")
print(student)

# Finding the number of items
print(len(student))

# Checking if an item exists
print("name" in student)